import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PaystackPop from "@paystack/inline-js";
import * as Yup from "yup";
import { CreditCard, ArrowLeft } from "lucide-react";
import PropTypes from "prop-types";
import axiosInstance from "../../utils/axiosInstance";
import { v4 as uuidv4 } from "uuid";

function PaymentHandler({ contactDetails, ticketCounts, totalWithDiscount, onBack }) {
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentError, setPaymentError] = useState(null);

  const contactSchema = Yup.object().shape({
    firstName: Yup.string()
      .required("First Name is required")
      .matches(/^[A-Za-z]+$/, "First Name should contain only letters"),
    lastName: Yup.string()
      .required("Last Name is required")
      .matches(/^[A-Za-z]+$/, "Last Name should contain only letters"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    phone: Yup.string()
      .required("Phone Number is required")
      .matches(/^[0-9]+$/, "Phone Number should contain only numbers")
      .min(10, "Phone Number must be at least 10 digits")
      .max(15, "Phone Number must be at most 15 digits"),
    referralCode: Yup.string().nullable(),
  });

  const initializePaystack = async () => {
    setIsProcessing(true);
    setPaymentError(null);

    try {
      // Validate contact details
      await contactSchema.validate(contactDetails, { abortEarly: false });

      // Ensure totalWithDiscount is a valid number
      if (typeof totalWithDiscount !== "number" || totalWithDiscount <= 0) {
        throw new Error("Invalid payment amount: totalWithDiscount must be a valid number greater than 0.");
      }

      const amountInKobo = Math.round(totalWithDiscount * 100); // Convert to kobo

      // Generate a unique reference for Paystack (optional, Paystack can generate one)
      const reference = `TICKET_${Date.now()}_${Math.floor(Math.random() * 1000000)}`;

      const paystack = new PaystackPop();
      paystack.newTransaction({
        key: "pk_live_9fdf47f626da3db16775f593a57baa26078d859d", // Replace with your actual live key
        email: contactDetails.email,
        amount: amountInKobo,
        currency: "NGN",
        reference, // Use the generated reference or let Paystack create one
        metadata: {
          custom_fields: [
            {
              display_name: "Customer Name",
              variable_name: "customer_name",
              value: `${contactDetails.firstName} ${contactDetails.lastName}`,
            },
            {
              display_name: "Phone Number",
              variable_name: "phone",
              value: contactDetails.phone,
            },
          ],
        },
        onSuccess: async (response) => {
          console.log("Payment successful:", response);
          setIsProcessing(false);

          const ticketDataToSend = {
            firstName: contactDetails.firstName,
            lastName: contactDetails.lastName,
            email: contactDetails.email,
            phone: contactDetails.phone,
            referralCode: contactDetails.referralCode || null,
            tickets: ticketCounts,
            price: totalWithDiscount,
            ticketId: uuidv4(), // Generate a ticket ID on the frontend
            paymentReference: response.reference, // Send the Paystack reference for verification
            eventName: "Spotlight", // Or dynamically set your event name
          };

          try {
            const postResponse = await axiosInstance.post(
              "https://spotlight-znvr.onrender.com/api/tickets/purchase",
              ticketDataToSend,
              { timeout: 10000 }
            );
            console.log("Backend ticket purchase response:", postResponse.data);
            const ticketId = postResponse.data?.ticketId;
            if (ticketId) {
              localStorage.removeItem("checkoutStep");
              localStorage.removeItem("checkoutTimer");
              localStorage.setItem("lastTransactionRef", response.reference);
              navigate(`/ticket-details/${ticketId}`);
            } else {
              console.error("No ticket ID received from backend");
              setPaymentError("Failed to retrieve ticket details.");
            }
          } catch (error) {
            console.error("Error sending ticket data to backend:", error);
            setPaymentError(
              error.response?.data?.error || "An error occurred while processing your ticket."
            );
          } finally {
            setIsProcessing(false);
          }
        },
        onCancel: () => {
          setPaymentError("Payment was cancelled. Please complete your payment to secure your tickets.");
          setIsProcessing(false);
        },
      });
    } catch (error) {
      console.error("Payment initialization error:", error);
      setPaymentError(error.message || "An error occurred during payment initialization.");
      setIsProcessing(false);
    }
  };

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold text-white mb-6">Complete Your Payment</h2>
      <div className="bg-gray-900 p-6 rounded-lg border border-gold mb-6">
        <div className="flex items-center mb-4">
          <CreditCard className="h-6 w-6 text-gold mr-2" />
          <h3 className="text-lg font-medium text-white">Payment Information</h3>
        </div>
        <p className="text-gray-300 mb-4">
          You're about to purchase tickets for the concert. Click the button below to proceed with your payment securely
          via Paystack.
        </p>
        <div className="bg-black bg-opacity-50 p-4 rounded-lg mb-4">
          <div className="flex justify-between mb-2">
            <span className="text-gray-400">Name:</span>
            <span className="text-white">
              {contactDetails.firstName} {contactDetails.lastName}
            </span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-400">Email:</span>
            <span className="text-white">{contactDetails.email}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Amount:</span>
            <span className="text-gold font-bold">₦{totalWithDiscount.toLocaleString("en-NG")}</span>
          </div>
        </div>
        {paymentError && (
          <div className="bg-red-900 bg-opacity-30 border border-red-500 text-red-200 p-4 rounded-lg mb-4">
            {paymentError}
          </div>
        )}
        <div className="flex justify-between mt-6">
          <button
            type="button"
            onClick={onBack}
            className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors cursor-pointer"
            disabled={isProcessing}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </button>
          <button
            className="px-6 py-3 bg-gold text-white font-medium rounded-lg hover:bg-opacity-90 transition-colors cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
            onClick={initializePaystack}
            disabled={isProcessing}
          >
            {isProcessing ? "Processing..." : "Pay Now"}
          </button>
        </div>
      </div>
    </div>
  );
}

PaymentHandler.propTypes = {
  contactDetails: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    referralCode: PropTypes.string,
  }).isRequired,
  ticketCounts: PropTypes.object.isRequired,
  totalWithDiscount: PropTypes.number.isRequired,
  onBack: PropTypes.func.isRequired,
};

export default PaymentHandler;

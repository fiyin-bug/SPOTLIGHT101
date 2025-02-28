// src/pages/Checkout/PaymentHandler.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import PaystackPop from '@paystack/inline-js';
import * as Yup from 'yup';

function PaymentHandler({ contactDetails, ticketCounts, totalWithDiscount }) {
  const navigate = useNavigate();

  const contactSchema = Yup.object().shape({
    firstName: Yup.string()
      .required('First Name is required')
      .matches(/^[A-Za-z]+$/, 'First Name should contain only letters'),
    lastName: Yup.string()
      .required('Last Name is required')
      .matches(/^[A-Za-z]+$/, 'Last Name should contain only letters'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    phone: Yup.string()
      .required('Phone Number is required')
      .matches(/^[0-9]+$/, 'Phone Number should contain only numbers')
      .min(10, 'Phone Number must be at least 10 digits')
      .max(15, 'Phone Number must be at most 15 digits'),
    referralCode: Yup.string()
      .nullable()
      .test('valid-referral', 'Invalid referral code', (value) => {
        if (!value) return true;
        const validReferralCodes = [
          'DAMI', 'STB', 'DARA', 'ORE', 'MONNIE', 'GUS', 'HXC', 'TUZO1960',
          'JIGGY1536', 'VASTIFE', 'VEENA', 'NENYE', 'ZARA', 'RYANXGABBY', 'NXD', 'KAMAL'
        ];
        return validReferralCodes.includes(value.toUpperCase());
      }),
  });
  const initializePaystack = async () => {
    try {
      // Validate contact details
      console.log('Validating contact details:', contactDetails);
      await contactSchema.validate(contactDetails, { abortEarly: false });
  
      // Ensure totalWithDiscount is a valid number
      if (typeof totalWithDiscount !== 'number' || totalWithDiscount <= 0) {
        throw new Error('Invalid payment amount: totalWithDiscount must be a valid number greater than 0.');
      }
  
      const amountInKobo = Math.round(totalWithDiscount * 100); // Convert to kobo
  
      // Validate payment parameters
      if (!contactDetails.email || !Number.isFinite(amountInKobo) || amountInKobo <= 0) {
        throw new Error('Invalid payment parameters: email or amount is missing/invalid');
      }
  
      console.log('Initializing Paystack with:', {
        email: contactDetails.email,
        amount: amountInKobo,
      });
  
      // Initialize Paystack transaction
      const paystack = new PaystackPop();
      paystack.newTransaction({
        key: 'pk_live_9fdf47f626da3db16775f593a57baa26078d859d', 
        email: contactDetails.email,
        amount: amountInKobo,
        currency: 'NGN',
        reference: `TICKET_${Math.floor(Math.random() * 1000000000)}`,
        onSuccess: (response) => {
          alert('Payment Successful! 🎉');
          console.log('Payment successful:', response);
          navigate(`/ticket-details/${response.reference}`);
        },
        onCancel: () => {
          alert('Payment closed. Please complete your payment to secure your tickets.');
          console.log('Payment cancelled');
        },
      });
    } catch (error) {
      console.error('Payment initialization error:', error.message);
      alert(`Failed to initialize payment: ${error.message}`);
    }
  };
  

  return (
    <div>
      <h3 className="text-xl sm:text-2xl text-white mb-2 sm:mb-4">Complete Your Payment</h3>
      <button
        className="px-4 py-2 sm:px-6 sm:py-3 border-2 border-gold rounded bg-black text-white text-sm sm:text-base cursor-pointer hover:bg-gold"
        onClick={initializePaystack}
      >
        Pay Now
      </button>
    </div>
  );
}

export default PaymentHandler;
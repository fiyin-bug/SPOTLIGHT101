import React from 'react';
import { useNavigate } from 'react-router-dom';
import PaystackPop from '@paystack/inline-js';
import axiosInstance from './utils/axiosInstance';
import * as Yup from 'yup';

function PaymentHandler({ contactDetails, ticketCounts, totalWithDiscount }) {
  const navigate = useNavigate();

  const contactSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required').matches(/^[A-Za-z]+$/, 'First Name should contain only letters'),
    lastName: Yup.string().required('Last Name is required').matches(/^[A-Za-z]+$/, 'Last Name should contain only letters'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phone: Yup.string().required('Phone Number is required').matches(/^[0-9]+$/, 'Phone Number should contain only numbers').min(10, 'Phone Number must be at least 10 digits').max(15, 'Phone Number must be at most 15 digits'),
    referralCode: Yup.string().nullable().test('valid-referral', 'Invalid referral code', (value) => {
      if (!value) return true;
      const validReferralCodes = ['DAMI', 'STB', 'DARA', 'ORE', 'MONNIE', 'GUS', 'HXC', 'TUZO1960', 'JIGGY1536', 'VASTIFE', 'VEENA', 'NENYE', 'ZARA', 'RYANXGABBY', 'NXD', 'KAMAL'];
      return validReferralCodes.includes(value.toUpperCase());
    }),
  });

  const initializePaystack = async () => {
    try {
      await contactSchema.validate(contactDetails, { abortEarly: false });
      await axiosInstance.post('https://spotlight-znvr.onrender.com/api/checkout/contact', { ...contactDetails });

      const handler = PaystackPop.setup({
        key: 'pk_live_9fdf47f626da3db16775f593a57baa26078d859d',
        email: contactDetails.email,
        amount: totalWithDiscount * 100,
        currency: 'NGN',
        ref: `TICKET_${Math.floor(Math.random() * 1000000000)}`,
        callback: async (paymentResponse) => {
          alert('Payment Successful! 🎉');
          try {
            const purchaseResponse = await axiosInstance.post('https://spotlight-znvr.onrender.com/api/tickets/purchase', {
              ...contactDetails,
              tickets: ticketCounts,
              price: totalWithDiscount,
              ticketId: paymentResponse.reference,
              eventName: 'Spotlight',
            });
            navigate(`/ticket-details/${purchaseResponse.data.ticketId}`);
          } catch (err) {
            console.error('Error finalizing purchase:', err);
            alert('There was an error finalizing your purchase. Please try again.');
          }
        },
        onClose: () => alert('Payment closed. Please complete your payment to secure your tickets.'),
      });
      handler.openIframe();
    } catch (error) {
      console.error('Payment initialization error:', error);
      alert('Failed to initialize payment. Please check your details and try again.');
    }
  };

  return (
    <div>
      <h3>Complete Your Payment</h3>
      <button className="pay-btn" onClick={initializePaystack}>Pay Now</button>
    </div>
  );
}

export default PaymentHandler;
<<<<<<< HEAD
// src/pages/Checkout/index.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressBar from './ProgressBar';
import TicketSelector from './TicketSelector';
import ContactForm from './ContactForm';
import Summary from './Summary';
import DiscountHandler from './DiscountHandler';
import PaymentHandler from './PaymentHandler';
import useCheckout from './useCheckout.jsx'; // Ensure this file exists
import useTicketPrices from './useTicketPrices.jsx';
import useTimer from './useTimer.jsx';

function CheckoutPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  // Debug useCheckout
  let checkoutState;
  try {
    checkoutState = useCheckout();
    console.log('useCheckout returned:', checkoutState);
  } catch (error) {
    console.error('useCheckout failed:', error);
    checkoutState = null;
  }

  // Fallback state if useCheckout fails
  const [fallbackTicketCounts, setFallbackTicketCounts] = useState({
    earlyBirdCount: 0,
    regularCount: 0,
    vipSoloCount: 0,
    vipTable5Count: 0,
    vipTable7Count: 0,
    vipTable10Count: 0,
  });
  const [fallbackContactDetails, setFallbackContactDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    referralCode: '',
  });
  const [fallbackErrors, setFallbackErrors] = useState({});
  const [fallbackTotalWithDiscount, setFallbackTotalWithDiscount] = useState(0);
  const [fallbackDiscountAmount, setFallbackDiscountAmount] = useState(0);

  const {
    ticketCounts = fallbackTicketCounts,
    setTicketCounts = setFallbackTicketCounts,
    contactDetails = fallbackContactDetails,
    setContactDetails = setFallbackContactDetails,
    errors = fallbackErrors,
    setErrors = setFallbackErrors,
    totalWithDiscount = fallbackTotalWithDiscount,
    setTotalWithDiscount = setFallbackTotalWithDiscount,
    discountAmount = fallbackDiscountAmount,
    setDiscountAmount = setFallbackDiscountAmount,
  } = checkoutState || {};

  // Debug state setup
  console.log('CheckoutPage - ticketCounts:', ticketCounts);
  console.log('CheckoutPage - setTicketCounts type:', typeof setTicketCounts, setTicketCounts);

  const { ticketPrices, loading: pricesLoading } = useTicketPrices();
  const { timer, formatTime, resetTimer } = useTimer(step);

  const subtotal = Object.keys(ticketCounts).reduce(
    (sum, key) => sum + ticketCounts[key] * (ticketPrices[key.replace('Count', '')] || 0),
    0
  );

  const handleContinue = () => step < 3 && setStep(step + 1);
  const handleBack = () => {
    if (step === 1) {
      navigate('/tickets');
    } else {
      setStep(step - 1);
      if (step === 2) resetTimer();
    }
  };
  const handleDiscountApplied = (discountedTotal, discount) => {
    setTotalWithDiscount(discountedTotal);
    setDiscountAmount(discount * subtotal);
  };

  if (pricesLoading) return <div className="text-white text-center py-4">Loading ticket prices...</div>;

  return (
    <div className="bg-black flex flex-col lg:flex-row gap-4 sm:gap-8 lg:gap-16 p-4 sm:p-8 lg:p-36 w-full">
      <ProgressBar step={step} />
      <div className="w-full lg:flex-2 bg-black p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg">
        {step === 1 && (
          <TicketSelector
            ticketPrices={ticketPrices}
            ticketCounts={ticketCounts}
            setTicketCounts={setTicketCounts}
            onBack={handleBack}
            onContinue={handleContinue}
          />
        )}
        {step === 2 && (
          <ContactForm
            contactDetails={contactDetails}
            setContactDetails={setContactDetails}
            errors={errors}
            timer={formatTime(timer)}
            onSubmit={() => setStep(3)}
          />
        )}
        {step === 3 && (
          <PaymentHandler
            contactDetails={contactDetails}
            ticketCounts={ticketCounts}
            totalWithDiscount={totalWithDiscount || subtotal}
          />
        )}
      </div>
      <Summary
        ticketCounts={ticketCounts}
        ticketPrices={ticketPrices}
        subtotal={subtotal}
        discountAmount={discountAmount}
        totalWithDiscount={totalWithDiscount}
      />
      <DiscountHandler
        referralCode={contactDetails.referralCode}
        originalTotal={subtotal}
        onDiscountApplied={handleDiscountApplied}
      />
    </div>
  );
}

export default CheckoutPage;
=======
"use client"

import { useState, useMemo } from "react"
import { useNavigate } from "react-router-dom"
import { Loader } from "lucide-react"
import ProgressBar from "./ProgressBar"
import TicketSelector from "./TicketSelector"
import ContactForm from "./ContactForm"
import Summary from "./Summary"
import DiscountHandler from "./DiscountHandler"
import PaymentHandler from "./PaymentHandler"
import useCheckout from "./useCheckout"
import useTicketPrices from "./useTicketPrices"
import useTimer from "./useTimer"

function CheckoutPage() {
  const navigate = useNavigate()
  const [step, setStep] = useState(1)

  const {
    ticketCounts,
    setTicketCounts,
    contactDetails,
    setContactDetails,
    errors,
    setErrors,
    discountAmount,
    setDiscountAmount,
  } = useCheckout()

  const { ticketPrices, loading: pricesLoading, error: pricesError } = useTicketPrices()
  const { timer, formatTime, resetTimer } = useTimer(step)

  // Calculate subtotal based on ticket counts and prices
  const subtotal = useMemo(() => {
    return Object.keys(ticketCounts).reduce(
      (sum, key) => sum + ticketCounts[key] * (ticketPrices[key.replace("Count", "")] || 0),
      0,
    )
  }, [ticketCounts, ticketPrices])

  const handleContinue = () => {
    if (step < 3) {
      setStep(step + 1)
    }
  }

  const handleBack = () => {
    if (step === 1) {
      navigate("/tickets")
    } else {
      setStep(step - 1)
      if (step === 2) resetTimer()
    }
  }

  const handleDiscountApplied = (discountAmount) => {
    setDiscountAmount(discountAmount)
  }

  // Show loading state
  if (pricesLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black text-white">
        <div className="text-center">
          <Loader className="animate-spin h-8 w-8 mx-auto mb-4" />
          <p>Loading ticket information...</p>
        </div>
      </div>
    )
  }

  // Show error state
  if (pricesError) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black text-white">
        <div className="text-center p-6 border border-red-500 rounded-lg">
          <h2 className="text-xl mb-4">Error</h2>
          <p>{pricesError}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-gold text-black rounded hover:bg-opacity-80"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <ProgressBar step={step} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          <div className="lg:col-span-2 bg-black p-6 rounded-lg border border-gold">
            {step === 1 && (
              <TicketSelector
                ticketPrices={ticketPrices}
                ticketCounts={ticketCounts}
                setTicketCounts={setTicketCounts}
                onBack={handleBack}
                onContinue={handleContinue}
              />
            )}
            {step === 2 && (
              <ContactForm
                contactDetails={contactDetails}
                setContactDetails={setContactDetails}
                errors={errors}
                setErrors={setErrors}
                timer={formatTime(timer)}
                onSubmit={handleContinue}
                onBack={handleBack}
              />
            )}
            {step === 3 && (
              <PaymentHandler
                contactDetails={contactDetails}
                ticketCounts={ticketCounts}
                totalWithDiscount={subtotal - discountAmount}
                onBack={handleBack}
              />
            )}
          </div>

          <div className="lg:col-span-1">
            <Summary ticketCounts={ticketCounts} ticketPrices={ticketPrices} discountAmount={discountAmount} />

            {step === 2 && (
              <div className="mt-6">
                <DiscountHandler
                  referralCode={contactDetails.referralCode}
                  originalTotal={subtotal}
                  onDiscountApplied={handleDiscountApplied}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutPage

>>>>>>> 98fa7df4e6d2970f27f1b5715e067d72bbee1227

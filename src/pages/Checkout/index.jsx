// src/pages/Checkout/index.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressBar from './ProgressBar';
import TicketSelector from './TicketSelector';
import ContactForm from './ContactForm';
import Summary from './Summary';
import DiscountHandler from './DiscountHandler';
import PaymentHandler from './PaymentHandler';
import useCheckout from './useCheckout.jsx';
import useTicketPrices from './useTicketPrices.jsx';
import useTimer from './useTimer.jsx';

function CheckoutPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const { ticketCounts, setTicketCounts, contactDetails, setContactDetails, errors, setErrors, totalWithDiscount, setTotalWithDiscount, discountAmount, setDiscountAmount } = useCheckout();
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
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Checkout.css';
import ProgressBar from './ProgressBar';
import TicketSelector from './TicketSelector';
import ContactForm from './ContactForm';
import Summary from './Summary';
import DiscountHandler from './DiscountHandler';
import PaymentHandler from './PaymentHandler';
import UseCheckout from './UseCheckout';
import UseTicketPrices from './UseTicketPrices';
import UseTimer from './UseTimer';

function CheckoutPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const { ticketCounts, setTicketCounts, contactDetails, setContactDetails, errors, setErrors, totalWithDiscount, setTotalWithDiscount, discountAmount, setDiscountAmount } = useCheckoutState();
  const { ticketPrices, loading: pricesLoading } = useTicketPrices();
  const { timer, formatTime, resetTimer } = useTimer(step);

  const subtotal = Object.keys(ticketCounts).reduce((sum, key) => sum + ticketCounts[key] * ticketPrices[key.replace('Count', '')], 0);

  const handleContinue = () => step < 3 && setStep(step + 1);
  const handleBack = () => step === 1 ? navigate('/tickets') : (setStep(step - 1), step === 2 && resetTimer());
  const handleDiscountApplied = (discountedTotal, discount) => {
    setTotalWithDiscount(discountedTotal);
    setDiscountAmount(discount * subtotal);
  };

  if (pricesLoading) return <div>Loading ticket prices...</div>;

  return (
    <div className="checkout-page">
      <ProgressBar step={step} />
      <div className="left-section">
        {step === 1 && <TicketSelector ticketPrices={ticketPrices} ticketCounts={ticketCounts} setTicketCounts={setTicketCounts} onBack={handleBack} onContinue={handleContinue} />}
        {step === 2 && <ContactForm contactDetails={contactDetails} setContactDetails={setContactDetails} errors={errors} timer={formatTime(timer)} onSubmit={() => setStep(3)} />}
        {step === 3 && <PaymentHandler contactDetails={contactDetails} ticketCounts={ticketCounts} totalWithDiscount={totalWithDiscount || subtotal} />}
      </div>
      <Summary ticketCounts={ticketCounts} ticketPrices={ticketPrices} subtotal={subtotal} discountAmount={discountAmount} totalWithDiscount={totalWithDiscount} />
      <DiscountHandler referralCode={contactDetails.referralCode} originalTotal={subtotal} onDiscountApplied={handleDiscountApplied} />
    </div>
  );
}

export default CheckoutPage;

import { useState, useMemo } from "react"
import { useNavigate } from "react-router-dom"
import { Loader } from "lucide-react"
import ProgressBar from "./ProgressBar"
import TicketSelector from "./TicketSelector"
import ContactForm from "./ContactForm"
import Summary from "./Summary"
import DiscountHandler from "./DiscountHandler"
import PaymentHandler from "./PaymentHandler"
import Checkout from "./Checkout"
import TicketPrices from "./TicketPrices"
import Timer from "./Timer"

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
  } = Checkout()

  const { ticketPrices, loading: pricesLoading, error: pricesError } = TicketPrices()
  const { timer, formatTime, resetTimer } = Timer(step)
                                                                                                                                                                                                                                                                                       
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

export default CheckoutPage;


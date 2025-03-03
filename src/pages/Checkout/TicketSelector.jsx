<<<<<<< HEAD
// src/pages/Checkout/TicketSelector.jsx
import React from 'react';

function TicketSelector({ ticketPrices, ticketCounts, setTicketCounts, onBack, onContinue }) {
  const formatPrice = (price) => price.toLocaleString('en-NG', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  // Debug setters
  console.log('setTicketCounts type:', typeof setTicketCounts, setTicketCounts);

  const handleIncrement = (key) => {
    console.log(`Before incrementing ${key}: ${ticketCounts[key] || 0}`);
    if (typeof setTicketCounts !== 'function') {
      console.error('setTicketCounts is not a function:', setTicketCounts);
      return;
    }
    try {
      // Use curried setTicketCounts with a function value
      setTicketCounts(key)((prev) => {
        const newCount = (prev || 0) + 1;
        console.log(`After incrementing ${key}: ${newCount}`);
        return newCount;
      });
    } catch (error) {
      console.error('Error in setTicketCounts:', error);
    }
  };

  const handleDecrement = (key) => {
    console.log(`Before decrementing ${key}: ${ticketCounts[key] || 0}`);
    if (typeof setTicketCounts !== 'function') {
      console.error('setTicketCounts is not a function:', setTicketCounts);
      return;
    }
    try {
      // Use curried setTicketCounts with a function value
      setTicketCounts(key)((prev) => {
        const newCount = Math.max(0, (prev || 0) - 1);
        console.log(`After decrementing ${key}: ${newCount}`);
        return newCount;
      });
    } catch (error) {
      console.error('Error in setTicketCounts:', error);
    }
  };

  return (
    <div className="bg-black">
      <button
        className="mb-4 px-4 py-2 sm:px-6 sm:py-3 border-2 border-gold rounded bg-black text-white text-sm sm:text-base cursor-pointer hover:bg-gold"
        onClick={onBack}
      >
        Back
      </button>
      <p className="mb-4 sm:mb-6 text-lg sm:text-xl text-white">CHOOSE TICKET</p>

      {/* Early Bird */}
      <div className="mb-4 sm:mb-6">
        <p className="m-1 sm:m-2 text-base sm:text-lg text-white">REGULAR TICKET (EARLY BIRD)</p>
        <p className="m-1 sm:m-2 text-base sm:text-lg text-white">₦{formatPrice(ticketPrices.earlyBird)}</p>
        <div className="flex items-center gap-2 sm:gap-4">
          <button
            className="p-1 sm:p-2 border-2 border-gold rounded bg-black text-white text-sm sm:text-base hover:bg-gold"
            onClick={() => handleDecrement('earlyBirdCount')}
          >
            -
          </button>
          <span className="text-lg sm:text-xl font-bold">{ticketCounts.earlyBirdCount || 0}</span>
          <button
            className="p-1 sm:p-2 border-2 border-gold rounded bg-black text-white text-sm sm:text-base hover:bg-gold"
            onClick={() => handleIncrement('earlyBirdCount')}
          >
            +
          </button>
        </div>
      </div>

      {/* Regular Tickets */}
      <div className="mb-4 sm:mb-6">
        <p className="m-1 sm:m-2 text-base sm:text-lg text-gray-500">REGULAR TICKETS</p>
        <p className="m-1 sm:m-2 text-base sm:text-lg text-white">₦{formatPrice(ticketPrices.regular)}</p>
        <div className="flex items-center gap-2 sm:gap-4">
          <button
            className="p-1 sm:p-2 border-2 border-gold rounded bg-black text-white text-sm sm:text-base cursor-not-allowed"
            disabled
          >
            -
          </button>
          <span className="text-lg sm:text-xl font-bold">{ticketCounts.regularCount || 0}</span>
          <button
            className="p-1 sm:p-2 border-2 border-gold rounded bg-black text-white text-sm sm:text-base cursor-not-allowed"
            disabled
          >
            +
          </button>
        </div>
      </div>

      {/* VIP Solo */}
      <div className="mb-4 sm:mb-6">
        <p className="m-1 sm:m-2 text-base sm:text-lg text-white">VIP SOLO</p>
        <p className="m-1 sm:m-2 text-base sm:text-lg text-white">₦{formatPrice(ticketPrices.vipSolo)}</p>
        <div className="flex items-center gap-2 sm:gap-4">
          <button
            className="p-1 sm:p-2 border-2 border-gold rounded bg-black text-white text-sm sm:text-base hover:bg-gold"
            onClick={() => handleDecrement('vipSoloCount')}
          >
            -
          </button>
          <span className="text-lg sm:text-xl font-bold">{ticketCounts.vipSoloCount || 0}</span>
          <button
            className="p-1 sm:p-2 border-2 border-gold rounded bg-black text-white text-sm sm:text-base hover:bg-gold"
            onClick={() => handleIncrement('vipSoloCount')}
          >
            +
          </button>
        </div>
      </div>

      {/* VIP Table of 5 */}
      <div className="mb-4 sm:mb-6">
        <p className="m-1 sm:m-2 text-base sm:text-lg text-white">VIP TABLE OF 5</p>
        <p className="m-1 sm:m-2 text-base sm:text-lg text-white">₦{formatPrice(ticketPrices.vipTable5)}</p>
        <div className="flex items-center gap-2 sm:gap-4">
          <button
            className="p-1 sm:p-2 border-2 border-gold rounded bg-black text-white text-sm sm:text-base hover:bg-gold"
            onClick={() => handleDecrement('vipTable5Count')}
          >
            -
          </button>
          <span className="text-lg sm:text-xl font-bold">{ticketCounts.vipTable5Count || 0}</span>
          <button
            className="p-1 sm:p-2 border-2 border-gold rounded bg-black text-white text-sm sm:text-base hover:bg-gold"
            onClick={() => handleIncrement('vipTable5Count')}
          >
            +
          </button>
        </div>
      </div>

      {/* VIP Table of 7 */}
      <div className="mb-4 sm:mb-6">
        <p className="m-1 sm:m-2 text-base sm:text-lg text-white">VIP TABLE OF 7</p>
        <p className="m-1 sm:m-2 text-base sm:text-lg text-white">₦{formatPrice(ticketPrices.vipTable7)}</p>
        <div className="flex items-center gap-2 sm:gap-4">
          <button
            className="p-1 sm:p-2 border-2 border-gold rounded bg-black text-white text-sm sm:text-base hover:bg-gold"
            onClick={() => handleDecrement('vipTable7Count')}
          >
            -
          </button>
          <span className="text-lg sm:text-xl font-bold">{ticketCounts.vipTable7Count || 0}</span>
          <button
            className="p-1 sm:p-2 border-2 border-gold rounded bg-black text-white text-sm sm:text-base hover:bg-gold"
            onClick={() => handleIncrement('vipTable7Count')}
          >
            +
          </button>
        </div>
      </div>

      {/* VIP Table of 10 */}
      <div className="mb-4 sm:mb-6">
        <p className="m-1 sm:m-2 text-base sm:text-lg text-white">VIP TABLE OF 10</p>
        <p className="m-1 sm:m-2 text-base sm:text-lg text-white">₦{formatPrice(ticketPrices.vipTable10)}</p>
        <div className="flex items-center gap-2 sm:gap-4">
          <button
            className="p-1 sm:p-2 border-2 border-gold rounded bg-black text-white text-sm sm:text-base hover:bg-gold"
            onClick={() => handleDecrement('vipTable10Count')}
          >
            -
          </button>
          <span className="text-lg sm:text-xl font-bold">{ticketCounts.vipTable10Count || 0}</span>
          <button
            className="p-1 sm:p-2 border-2 border-gold rounded bg-black text-white text-sm sm:text-base hover:bg-gold"
            onClick={() => handleIncrement('vipTable10Count')}
          >
            +
          </button>
        </div>
      </div>

      <button
        className="mt-4 px-4 py-2 sm:px-6 sm:py-3 border-2 border-gold rounded bg-black text-white text-sm sm:text-base cursor-pointer hover:bg-gold"
        onClick={onContinue}
      >
        CONTINUE
      </button>
    </div>
  );
}

export default TicketSelector;
=======
import { Plus, Minus, ArrowRight } from "lucide-react"
import PropTypes from 'prop-types'

function TicketSelector({ ticketPrices, ticketCounts, setTicketCounts, onContinue }) {
  const formatPrice = (price) => price.toLocaleString("en-NG")

  const handleIncrement = (type) => {
    setTicketCounts({
      ...ticketCounts,
      [type]: ticketCounts[type] + 1,
    })
  }

  const handleDecrement = (type) => {
    if (ticketCounts[type] > 0) {
      setTicketCounts({
        ...ticketCounts,
        [type]: ticketCounts[type] - 1,
      })
    }
  }

  const totalTickets = Object.values(ticketCounts).reduce((sum, count) => sum + count, 0)

  const ticketTypes = [
    { id: "earlyBirdCount", name: "Early Bird Ticket", price: ticketPrices.earlyBird },
    { id: "regularCount", name: "Regular Ticket", price: ticketPrices.regular },
    { id: "vipSoloCount", name: "VIP Solo", price: ticketPrices.vipSolo },
    { id: "vipTable5Count", name: "VIP Table of 5", price: ticketPrices.vipTable5 },
    { id: "vipTable7Count", name: "VIP Table of 7", price: ticketPrices.vipTable7 },
    { id: "vipTable10Count", name: "VIP Table of 10", price: ticketPrices.vipTable10 },
  ]

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold text-white mb-6">Select Your Tickets</h2>

      <div className="space-y-4">
        {ticketTypes.map((ticket) => (
          <div
            key={ticket.id}
            className="bg-gray-900 p-4 rounded-lg border border-gray-800 hover:border-gold transition-colors"
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-medium text-white">{ticket.name}</h3>
                <p className="text-gold font-bold">₦{formatPrice(ticket.price)}</p>
              </div>

              <div className="flex items-center space-x-3">
                <button
                  onClick={() => handleDecrement(ticket.id)}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors"
                  aria-label={`Decrease ${ticket.name} quantity`}
                >
                  <Minus className="h-4 w-4" />
                </button>

                <span className="w-8 text-center text-white font-medium">{ticketCounts[ticket.id]}</span>

                <button
                  onClick={() => handleIncrement(ticket.id)}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-gold text-black hover:bg-opacity-90 transition-colors"
                  aria-label={`Increase ${ticket.name} quantity`}
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-between">
        <button
          onClick={() => window.history.back()}
          className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors cursor-pointer"
        >
          Back
        </button>

        <button
          onClick={onContinue}
          disabled={totalTickets === 0}
          className="flex items-center px-6 py-3 bg-gold text-white font-medium rounded-lg hover:bg-opacity-90 transition-colors disabled:opacity-70 cursor-pointer disabled:cursor-not-allowed"
        >
          Continue
          <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
TicketSelector.propTypes = {
  ticketPrices: PropTypes.shape({
    earlyBird: PropTypes.number.isRequired,
    regular: PropTypes.number.isRequired,
    vipSolo: PropTypes.number.isRequired,
    vipTable5: PropTypes.number.isRequired,
    vipTable7: PropTypes.number.isRequired,
    vipTable10: PropTypes.number.isRequired
  }).isRequired,
  ticketCounts: PropTypes.object.isRequired,
  setTicketCounts: PropTypes.func.isRequired,
  onContinue: PropTypes.func.isRequired
}

export default TicketSelector


>>>>>>> 98fa7df4e6d2970f27f1b5715e067d72bbee1227

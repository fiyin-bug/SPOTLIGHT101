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
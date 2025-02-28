// src/pages/Checkout/TicketSelector.jsx
import React from 'react';

function TicketSelector({ ticketPrices, ticketCounts, setTicketCounts, onBack, onContinue }) {
  const formatPrice = (price) => price.toLocaleString('en-NG', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

 
  const handleIncrement = (key) => {
    console.log(`Incrementing ${key} from ${ticketCounts[key]}`);
    setTicketCounts((prevCounts) => ({
      ...prevCounts,
      [key]: prevCounts[key] + 1,
    }));
    console.log(`New ${key} value: ${ticketCounts[key] + 1}`);
  };

  const handleDecrement = (key) => {
    console.log(`Decrementing ${key} from ${ticketCounts[key]}`);
    const newCount = Math.max(0, ticketCounts[key] - 1);
    setTicketCounts((prevCounts) => ({
      ...prevCounts,
      [key]: newCount,
    }));
    console.log(`New ${key} value: ${newCount}`);
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
          <span className="text-lg sm:text-xl font-bold">{ticketCounts.earlyBirdCount}</span>
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
          <span className="text-lg sm:text-xl font-bold">{ticketCounts.regularCount}</span>
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
          <span className="text-lg sm:text-xl font-bold">{ticketCounts.vipSoloCount}</span>
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
          <span className="text-lg sm:text-xl font-bold">{ticketCounts.vipTable5Count}</span>
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
          <span className="text-lg sm:text-xl font-bold">{ticketCounts.vipTable7Count}</span>
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
          <span className="text-lg sm:text-xl font-bold">{ticketCounts.vipTable10Count}</span>
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
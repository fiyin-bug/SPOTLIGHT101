import React from 'react';

function Summary({ ticketCounts, ticketPrices, subtotal, discountAmount, totalWithDiscount }) {
  const formatPrice = (price) => price.toLocaleString('en-NG', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  return (
    <div className="w-full lg:flex-1 bg-black p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl text-[#fbfaf1] mb-2 sm:mb-4">Summary</h2>
      <p className="m-1 sm:m-2 text-base sm:text-lg text-[#fefdf9]"><strong className="text-[#eae9e4]">Spotlight Events</strong></p>
      <p className="m-1 sm:m-2 text-base sm:text-lg text-[#fefdf9]">Early Bird Ticket: {ticketCounts.earlyBirdCount}</p>
      <p className="m-1 sm:m-2 text-base sm:text-lg text-[#fefdf9]">Regular Ticket: {ticketCounts.regularCount}</p>
      <p className="m-1 sm:m-2 text-base sm:text-lg text-[#fefdf9]">VIP Solo: {ticketCounts.vipSoloCount}</p>
      <p className="m-1 sm:m-2 text-base sm:text-lg text-[#fefdf9]">VIP Table of 5: {ticketCounts.vipTable5Count}</p>
      <p className="m-1 sm:m-2 text-base sm:text-lg text-[#fefdf9]">VIP Table of 7: {ticketCounts.vipTable7Count}</p>
      <p className="m-1 sm:m-2 text-base sm:text-lg text-[#fefdf9]">VIP Table of 10: {ticketCounts.vipTable10Count}</p>
      {/* Add other ticket types */}
      <p className="m-1 sm:m-2 text-base sm:text-lg text-[#fefdf9]">Subtotal: ₦{formatPrice(subtotal)}</p>
      {discountAmount > 0 && <p className="m-1 sm:m-2 text-base sm:text-lg text-[#fefdf9]">Discount (5%): -₦{formatPrice(discountAmount)}</p>}
      <p className="m-1 sm:m-2 text-base sm:text-lg text-[#fefdf9]"><strong className="text-[#eae9e4]">Total: ₦{formatPrice(totalWithDiscount > 0 ? totalWithDiscount : subtotal)}</strong></p>
    </div>
  );
}

export default Summary;
import React from 'react';

function Summary({ ticketCounts, ticketPrices, subtotal, discountAmount, totalWithDiscount }) {
  const formatPrice = (price) => price.toLocaleString('en-NG', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  return (
    <div className="right-section">
      <h2>Summary</h2>
      <p><strong>Spotlight Events</strong></p>
      <p>Early Bird Ticket: {ticketCounts.earlyBirdCount}</p>
      <p>Regular Ticket: {ticketCounts.regularCount}</p>
      <p>VIP Solo: {ticketCounts.vipSoloCount}</p>
      <p>VIP Table of 5: {ticketCounts.vipTable5Count}</p>
      <p>VIP Table of 7: {ticketCounts.vipTable7Count}</p>
      <p>VIP Table of 10: {ticketCounts.vipTable10Count}</p>
      <p>Subtotal: ₦{formatPrice(subtotal)}</p>
      {discountAmount > 0 && <p>Discount (5%): -₦{formatPrice(discountAmount)}</p>}
      <p><strong>Total: ₦{formatPrice(totalWithDiscount > 0 ? totalWithDiscount : subtotal)}</strong></p>
    </div>
  );
}

export default Summary;
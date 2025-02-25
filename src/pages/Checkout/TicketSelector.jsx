import React from 'react';

function TicketSelector({ ticketPrices, ticketCounts, setTicketCounts, onBack, onContinue }) {
  const { earlyBirdCount, regularCount, vipSoloCount, vipTable5Count, vipTable7Count, vipTable10Count } = ticketCounts;
  const { setEarlyBirdCount, setRegularCount, setVipSoloCount, setVipTable5Count, setVipTable7Count, setVipTable10Count } = setTicketCounts;

  const formatPrice = (price) => price.toLocaleString('en-NG', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  return (
    <>
      <button className="back-btn" onClick={onBack}>Back</button>
      <p className="Choose-text">CHOOSE TICKET</p>
      <div className="ticket-option">
        <p className="choose-ticket">REGULAR TICKET(EARLY BIRD)</p>
        <p>₦{formatPrice(ticketPrices.earlyBird)}</p>
        <div className="counter">
          <button className="decrementor" onClick={() => setEarlyBirdCount(Math.max(0, earlyBirdCount - 1))}>-</button>
          <span>{earlyBirdCount}</span>
          <button className="incrementor" onClick={() => setEarlyBirdCount(earlyBirdCount + 1)}>+</button>
        </div>
      </div>
      <div className="divider"></div>
      <div className="ticket-option">
        <p className="Choose-reg">REGULAR TICKETS</p>
        <p>₦{formatPrice(ticketPrices.regular)}</p>
        <div className="counter">
          <button className="decrementor2" disabled onClick={() => setRegularCount(Math.max(0, regularCount - 1))}>-</button>
          <span>{regularCount}</span>
          <button className="incrementor2" disabled onClick={() => setRegularCount(regularCount + 1)}>+</button>
        </div>
      </div>
      <div className="divider"></div>
      <div className="ticket-option">
        <p className="Choose-vip6">VIP SOLO</p>
        <p>₦{formatPrice(ticketPrices.vipSolo)}</p>
        <div className="counter">
          <button className="decrementor3" onClick={() => setVipSoloCount(Math.max(0, vipSoloCount - 1))}>-</button>
          <span>{vipSoloCount}</span>
          <button className="incrementor3" onClick={() => setVipSoloCount(vipSoloCount + 1)}>+</button>
        </div>
      </div>
      <div className="divider"></div>
      <div className="ticket-option">
        <p className="Choose-vip6">VIP TABLE OF 5</p>
        <p>₦{formatPrice(ticketPrices.vipTable5)}</p>
        <div className="counter">
          <button className="decrementor3" onClick={() => setVipTable5Count(Math.max(0, vipTable5Count - 1))}>-</button>
          <span>{vipTable5Count}</span>
          <button className="incrementor3" onClick={() => setVipTable5Count(vipTable5Count + 1)}>+</button>
        </div>
      </div>
      <div className="divider"></div>
      <div className="ticket-option">
        <p className="Choose-vip6">VIP TABLE OF 7</p>
        <p>₦{formatPrice(ticketPrices.vipTable7)}</p>
        <div className="counter">
          <button className="decrementor3" onClick={() => setVipTable7Count(Math.max(0, vipTable7Count - 1))}>-</button>
          <span>{vipTable7Count}</span>
          <button className="incrementor3" onClick={() => setVipTable7Count(vipTable7Count + 1)}>+</button>
        </div>
      </div>
      <div className="divider"></div>
      <div className="ticket-option">
        <p className="Choose-vip10">VIP TABLE OF 10</p>
        <p>₦{formatPrice(ticketPrices.vipTable10)}</p>
        <div className="counter">
          <button className="decrementor4" onClick={() => setVipTable10Count(Math.max(0, vipTable10Count - 1))}>-</button>
          <span>{vipTable10Count}</span>
          <button className="incrementor4" onClick={() => setVipTable10Count(vipTable10Count + 1)}>+</button>
        </div>
      </div>
      <div className="divider"></div>
      <button className="continue-btn" onClick={onContinue}>CONTINUE</button>
    </>
  );
}

export default TicketSelector;
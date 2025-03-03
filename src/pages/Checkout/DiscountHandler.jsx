import React, { useEffect } from 'react';

function DiscountHandler({ referralCode, originalTotal, onDiscountApplied }) {
  useEffect(() => {
    const applyDiscount = () => {
      const validReferralCodes = [
        'DAMI', 'STB', 'DARA', 'ORE', 'MONNIE', 'GUS', 'HXC', 'TUZO1960',
        'JIGGY1536', 'VASTIFE', 'VEENA', 'NENYE', 'ZARA', 'RYANXGABBY', 'NXD', 'KAMAL'
      ];

      if (referralCode && validReferralCodes.includes(referralCode.toUpperCase())) {
        const discount = 0.05; // 5% discount
        const discountedTotal = originalTotal * (1 - discount);
        onDiscountApplied(discountedTotal, discount);
      } else {
        onDiscountApplied(originalTotal, 0); // No discount applied
      }
    };

    applyDiscount();
  }, [referralCode, originalTotal, onDiscountApplied]);

  return null; // This component doesn't render anything
}

export default DiscountHandler;

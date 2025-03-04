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

    if (isValid) {
      const discountRate = 0.05 // 5% discount
      const discountAmount = originalTotal * discountRate
      setMessage("Referral code applied successfully!")
      onDiscountApplied(discountAmount)
    } else {
      setMessage("Invalid referral code.")
      onDiscountApplied(0)
    }
  }, [referralCode, originalTotal, onDiscountApplied, validReferralCodes])

  if (!referralCode) {
    return null
  }

  return (
    <div
      className={`p-4 rounded-lg ${isValidCode ? "bg-green-900 bg-opacity-20 border border-green-500" : "bg-red-900 bg-opacity-20 border border-red-500"}`}
    >
      <div className="flex items-center">
        {isValidCode ? <Check className="h-5 w-5 text-green-500 mr-2" /> : <X className="h-5 w-5 text-red-500 mr-2" />}
        <p className={`text-sm ${isValidCode ? "text-green-400" : "text-red-400"}`}>{message}</p>
      </div>

      {isValidCode && <p className="text-white text-sm mt-2">You received a 5% discount!</p>}
    </div>
  )
}
DiscountHandler.propTypes = {
  referralCode: PropTypes.string,
  originalTotal: PropTypes.number.isRequired,
  onDiscountApplied: PropTypes.func.isRequired
}

export default DiscountHandler;

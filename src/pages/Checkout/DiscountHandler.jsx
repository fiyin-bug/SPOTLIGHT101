import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Check, X } from 'lucide-react'; // Ensure this library is installed

function DiscountHandler({ referralCode, originalTotal, onDiscountApplied }) {
  const [isValidCode, setIsValidCode] = useState(false);
  const [message, setMessage] = useState("");

  const validReferralCodes = [
    'DAMI', 'STB', 'DARA', 'ORE', 'MONNIE', 'GUS', 'HXC', 'TUZO1960',
    'JIGGY1536', 'VASTIFE', 'VEENA', 'NENYE', 'ZARA', 'RYANXGABBY', 'NXD', 'KAMAL'
  ];

  useEffect(() => {
    if (!referralCode) {
      setMessage("");
      setIsValidCode(false);
      onDiscountApplied(originalTotal, 0);
      return;
    }

    const isValid = validReferralCodes.includes(referralCode.toUpperCase());
    const discountRate = 0.05; // 5% discount
    const discountAmount = isValid ? originalTotal * discountRate : 0;
    
    if (isValid) {
      setMessage("Referral code applied successfully!");
    } else {
      setMessage("Invalid referral code.");
    }

    setIsValidCode(isValid);
    onDiscountApplied(originalTotal - discountAmount, discountAmount);
  }, [referralCode, originalTotal, onDiscountApplied]);

  if (!referralCode) return null;

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
  );
}

DiscountHandler.propTypes = {
  referralCode: PropTypes.string,
  originalTotal: PropTypes.number.isRequired,
  onDiscountApplied: PropTypes.func.isRequired
};

export default DiscountHandler;

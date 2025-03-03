// src/pages/Checkout/ProgressBar.jsx
import React from 'react';

function ProgressBar({ step }) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between sticky top-0 px-2 sm:px-4 lg:px-8 -mt-8 sm:-mt-12 lg:-mt-24 mb-2 sm:mb-4 lg:mb-8 w-full max-w-full">
      <div
        className={`p-1 sm:p-2 lg:p-3 border-2 border-gold rounded text-xs sm:text-sm lg:text-base text-white ${
          step >= 1 ? 'bg-black border-gold text-white' : ''
        }`}
      >
        ✔ Tickets
      </div>
      <div className="w-full sm:flex-1 h-px bg-white my-1 sm:my-2 lg:my-3 mx-1 sm:mx-2 lg:mx-4"></div>
      <div
        className={`p-1 sm:p-2 lg:p-3 border-2 border-gold rounded text-xs sm:text-sm lg:text-base text-white ${
          step >= 2 ? 'bg-black border-gold text-white' : ''
        }`}
      >
        ✔ Contact
      </div>
      <div className="w-full sm:flex-1 h-px bg-white my-1 sm:my-2 lg:my-3 mx-1 sm:mx-2 lg:mx-4"></div>
      <div
        className={`p-1 sm:p-2 lg:p-3 border-2 border-gold rounded text-xs sm:text-sm lg:text-base text-white ${
          step >= 3 ? 'bg-black border-gold text-white' : ''
        }`}
      >
        ✔ Payment
      </div>
    </div>
  );
}

export default ProgressBar;
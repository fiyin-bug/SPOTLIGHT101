<<<<<<< HEAD
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
=======
import PropTypes from 'prop-types';

function ProgressBar({ step }) {
  return (
    <div className="w-full max-w-4xl mx-auto mb-8">
      <div className="flex items-center justify-between">
        <div className={`flex flex-col items-center ${step >= 1 ? "text-gold" : "text-gray-400"}`}>
          <div
            className={`w-10 h-10 flex items-center justify-center rounded-full border-2 ${step >= 1 ? "border-gold bg-black" : "border-gray-400 bg-gray-800"}`}
          >
            {step > 1 ? "✓" : "1"}
          </div>
          <span className="mt-2 text-sm font-medium">Tickets</span>
        </div>

        <div className={`flex-1 h-1 rounded-xl mb-6 mx-2 ${step >= 2 ? "bg-gold" : "bg-gray-400"}`}></div>

        <div className={`flex flex-col items-center ${step >= 2 ? "text-gold" : "text-gray-400"}`}>
          <div
            className={`w-10 h-10 flex items-center justify-center rounded-full border-2 ${step >= 2 ? "border-gold bg-black" : "border-gray-400 bg-gray-800"}`}
          >
            {step > 2 ? "✓" : "2"}
          </div>
          <span className="mt-2 text-sm font-medium">Contact</span>
        </div>

        <div className={`flex-1 h-1 rounded-xl mb-6 mx-2 ${step >= 3 ? "bg-gold" : "bg-gray-400"}`}></div>

        <div className={`flex flex-col items-center ${step >= 3 ? "text-gold" : "text-gray-400"}`}>
          <div
            className={`w-10 h-10 flex items-center justify-center rounded-full border-2 ${step >= 3 ? "border-gold bg-black" : "border-gray-400 bg-gray-800"}`}
          >
            3
          </div>
          <span className="mt-2 text-sm font-medium">Payment</span>
        </div>
>>>>>>> 98fa7df4e6d2970f27f1b5715e067d72bbee1227
      </div>
    </div>
  );
}

<<<<<<< HEAD
export default ProgressBar;
=======
ProgressBar.propTypes = {
  step: PropTypes.number.isRequired
};

export default ProgressBar;



>>>>>>> 98fa7df4e6d2970f27f1b5715e067d72bbee1227

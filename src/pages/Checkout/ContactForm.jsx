// src/pages/Checkout/ContactForm.jsx
import React from 'react';

function ContactForm({ contactDetails, setContactDetails, errors, timer, onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    onSubmit(); // Trigger step change (setStep(3))
  };

  return (
    <div className="bg-black w-full">
      <p className="text-base sm:text-lg md:text-xl text-white mb-3 sm:mb-4 md:mb-6">
        {`YOUR TICKETS ARE RESERVED. COMPLETE CHECKOUT WITHIN ${timer} TO SECURE TICKETS.`}
      </p>
      <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 md:space-y-6">
        <div>
          <label htmlFor="firstName" className="block mb-1 sm:mb-2 text-xs sm:text-sm md:text-base text-white">
            First Name
          </label>
          <input
            id="firstName"
            type="text"
            placeholder="Enter your first name"
            value={contactDetails.firstName}
            onChange={(e) => setContactDetails({ ...contactDetails, firstName: e.target.value })}
            className="w-full p-1 sm:p-2 md:p-3 border border-gold rounded text-white bg-black focus:outline-none focus:border-gold text-xs sm:text-sm md:text-base"
            required
          />
          {errors.firstName && <span className="text-red-500 text-xs mt-1">{errors.firstName}</span>}
        </div>
        <div>
          <label htmlFor="lastName" className="block mb-1 sm:mb-2 text-xs sm:text-sm md:text-base text-white">
            Last Name
          </label>
          <input
            id="lastName"
            type="text"
            placeholder="Enter your last name"
            value={contactDetails.lastName}
            onChange={(e) => setContactDetails({ ...contactDetails, lastName: e.target.value })}
            className="w-full p-1 sm:p-2 md:p-3 border border-gold rounded text-white bg-black focus:outline-none focus:border-gold text-xs sm:text-sm md:text-base"
            required
          />
          {errors.lastName && <span className="text-red-500 text-xs mt-1">{errors.lastName}</span>}
        </div>
        <div>
          <label htmlFor="email" className="block mb-1 sm:mb-2 text-xs sm:text-sm md:text-base text-white">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={contactDetails.email}
            onChange={(e) => setContactDetails({ ...contactDetails, email: e.target.value })}
            className="w-full p-1 sm:p-2 md:p-3 border border-gold rounded text-white bg-black focus:outline-none focus:border-gold text-xs sm:text-sm md:text-base"
            required
          />
          {errors.email && <span className="text-red-500 text-xs mt-1">{errors.email}</span>}
        </div>
        <div>
          <label htmlFor="phone" className="block mb-1 sm:mb-2 text-xs sm:text-sm md:text-base text-white">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="Enter your phone number"
            value={contactDetails.phone}
            onChange={(e) => setContactDetails({ ...contactDetails, phone: e.target.value })}
            className="w-full p-1 sm:p-2 md:p-3 border border-gold rounded text-white bg-black focus:outline-none focus:border-gold text-xs sm:text-sm md:text-base"
            required
          />
          {errors.phone && <span className="text-red-500 text-xs mt-1">{errors.phone}</span>}
        </div>
        <div>
          <label htmlFor="referralCode" className="block mb-1 sm:mb-2 text-xs sm:text-sm md:text-base text-white">
            Referral Code (Optional)
          </label>
          <input
            id="referralCode"
            type="text"
            placeholder="Enter referral code (if any)"
            value={contactDetails.referralCode}
            onChange={(e) => setContactDetails({ ...contactDetails, referralCode: e.target.value })}
            className="w-full p-1 sm:p-2 md:p-3 border border-gold rounded text-white bg-black focus:outline-none focus:border-gold text-xs sm:text-sm md:text-base"
          />
          {errors.referralCode && <span className="text-red-500 text-xs mt-1">{errors.referralCode}</span>}
        </div>
        <button
          type="submit"
          className="w-full sm:w-auto px-3 sm:px-4 md:px-6 py-1 sm:py-2 md:py-3 border-2 border-gold rounded bg-black text-white text-xs sm:text-sm md:text-base cursor-pointer hover:bg-gold"
        >
          Proceed to Payment
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
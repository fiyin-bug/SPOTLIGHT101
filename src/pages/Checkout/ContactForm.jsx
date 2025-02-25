import React from 'react';

function ContactForm({ contactDetails, setContactDetails, errors, timer, onSubmit }) {
  return (
    <>
      <p className="timer">YOUR TICKETS ARE RESERVED. COMPLETE CHECKOUT WITHIN {timer} TO SECURE TICKETS.</p>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            type="text"
            placeholder="Enter your first name"
            value={contactDetails.firstName}
            onChange={(e) => setContactDetails({ ...contactDetails, firstName: e.target.value })}
            required
          />
          {errors.firstName && <span className="error">{errors.firstName}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            type="text"
            placeholder="Enter your last name"
            value={contactDetails.lastName}
            onChange={(e) => setContactDetails({ ...contactDetails, lastName: e.target.value })}
            required
          />
          {errors.lastName && <span className="error">{errors.lastName}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={contactDetails.email}
            onChange={(e) => setContactDetails({ ...contactDetails, email: e.target.value })}
            required
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            id="phone"
            type="tel"
            placeholder="Enter your phone number"
            value={contactDetails.phone}
            onChange={(e) => setContactDetails({ ...contactDetails, phone: e.target.value })}
            required
          />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="referralCode">Referral Code (Optional)</label>
          <input
            id="referralCode"
            type="text"
            placeholder="Enter referral code (if any)"
            value={contactDetails.referralCode}
            onChange={(e) => setContactDetails({ ...contactDetails, referralCode: e.target.value })}
          />
          {errors.referralCode && <span className="error">{errors.referralCode}</span>}
        </div>
        <button className="proceed-btn" type="submit">Proceed to Payment</button>
      </form>
    </>
  );
}

export default ContactForm;
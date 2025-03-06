// "use client"

import { useState } from "react"
import * as Yup from "yup"
import PropTypes from "prop-types"

function ContactForm({ contactDetails, setContactDetails, errors, setErrors, timer, onSubmit, onBack }) {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const contactSchema = Yup.object().shape({
    firstName: Yup.string()
      .required("First Name is required")
      .matches(/^[A-Za-z]+$/, "First Name should contain only letters"),
    lastName: Yup.string()
      .required("Last Name is required")
      .matches(/^[A-Za-z]+$/, "Last Name should contain only letters"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    phone: Yup.string()
      .required("Phone Number is required")
      .matches(/^[0-9]+$/, "Phone Number should contain only numbers")
      .min(10, "Phone Number must be at least 10 digits")
      .max(15, "Phone Number must be at most 15 digits"),
    referralCode: Yup.string()
      .nullable()
      .test("valid-referral", "Invalid referral code", (value) => {
        if (!value) return true
        const validReferralCodes = [
          "DAMI",
          "STB",
          "DARA",
          "ORE",
          "MONNIE",
          "GUS",
          "HXC",
          "TUZO1960",
          "JIGGY1536",
          "VASTIFE",
          "VEENA",
          "NENYE",
          "ZARA",
          "RYANXGABBY",
          "NXD",
          "KAMAL",
        ]
        return validReferralCodes.includes(value.toUpperCase())
      }),
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await contactSchema.validate(contactDetails, { abortEarly: false })
      onSubmit()
    } catch (validationError) {
      const newErrors = {}
      validationError.inner.forEach((error) => {
        newErrors[error.path] = error.message
      })
      setErrors(newErrors)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setContactDetails((prev) => ({ ...prev, [name]: value }))

    // Clear error when field is edited
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  return (
    <div className="w-full">
      <div className="mb-6 p-4 bg-gold bg-opacity-10 rounded-lg border border-gold">
        <p className="text-lg font-medium text-white">
          Your tickets are reserved. Complete checkout within <span className="font-extrabold">{timer}</span> to
          secure tickets.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-white">
              First Name
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              placeholder="Enter your first name"
              value={contactDetails.firstName}
              onChange={handleChange}
              className={`w-full p-3 bg-gray-900 border ${errors.firstName ? "border-red-500" : "border-gold"} rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-gold`}
              required
            />
            {errors.firstName && <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>}
          </div>

          <div>
            <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-white">
              Last Name
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Enter your last name"
              value={contactDetails.lastName}
              onChange={handleChange}
              className={`w-full p-3 bg-gray-900 border ${errors.lastName ? "border-red-500" : "border-gold"} rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-gold`}
              required
            />
            {errors.lastName && <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={contactDetails.email}
            onChange={handleChange}
            className={`w-full p-3 bg-gray-900 border ${errors.email ? "border-red-500" : "border-gold"} rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-gold`}
            required
          />
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="block mb-2 text-sm font-medium text-white">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Enter your phone number"
            value={contactDetails.phone}
            onChange={handleChange}
            className={`w-full p-3 bg-gray-900 border ${errors.phone ? "border-red-500" : "border-gold"} rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-gold`}
            required
          />
          {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
        </div>

        <div>
          <label htmlFor="referralCode" className="block mb-2 text-sm font-medium text-white">
            Referral Code (Optional)
          </label>
          <input
            id="referralCode"
            name="referralCode"
            type="text"
            placeholder="Enter referral code (if any)"
            value={contactDetails.referralCode}
            onChange={handleChange}
            className={`w-full p-3 bg-gray-900 border ${errors.referralCode ? "border-red-500" : "border-gold"} rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-gold`}
          />
          {errors.referralCode && <p className="mt-1 text-sm text-red-500">{errors.referralCode}</p>}
        </div>

        <div className="flex justify-between mt-6">
          <button
            type="button"
            onClick={onBack}
            className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors cursor-pointer"
            disabled={isSubmitting}
          >
            Back
          </button>

          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-3 bg-gold text-white font-medium rounded-lg hover:bg-opacity-90 transition-colors disabled:opacity-70 cursor-pointer disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Processing..." : "Proceed to Payment"}
          </button>
        </div>
      </form>
    </div>
  )
}
ContactForm.propTypes = {
  contactDetails: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    referralCode: PropTypes.string
  }).isRequired,
  setContactDetails: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    referralCode: PropTypes.string
  }).isRequired,
  setErrors: PropTypes.func.isRequired,
  timer: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired
}


export default ContactForm


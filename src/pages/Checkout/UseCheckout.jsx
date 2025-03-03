"use client"

import { useState } from "react"

function useCheckout() {
  // Initialize state with default values, not from localStorage
  const [ticketCounts, setTicketCounts] = useState({
    earlyBirdCount: 0,
    regularCount: 0,
    vipSoloCount: 0,
    vipTable5Count: 0,
    vipTable7Count: 0,
    vipTable10Count: 0,
  })

  const [contactDetails, setContactDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    referralCode: "",
  })

  const [errors, setErrors] = useState({})
  const [discountAmount, setDiscountAmount] = useState(0)

  return {
    ticketCounts,
    setTicketCounts,
    contactDetails,
    setContactDetails,
    errors,
    setErrors,
<<<<<<< HEAD
    totalWithDiscount,
    setTotalWithDiscount,
    discountAmount,
    setDiscountAmount,
  };
}

export default useCheckout;
=======
    discountAmount,
    setDiscountAmount,
  }
}

export default useCheckout

>>>>>>> 98fa7df4e6d2970f27f1b5715e067d72bbee1227

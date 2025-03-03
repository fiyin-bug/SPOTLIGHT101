<<<<<<< HEAD
import { useState } from 'react';

function useCheckout() {
=======
"use client"

import { useState } from "react"

function useCheckout() {
  // Initialize state with default values, not from localStorage
>>>>>>> 98fa7df4e6d2970f27f1b5715e067d72bbee1227
  const [ticketCounts, setTicketCounts] = useState({
    earlyBirdCount: 0,
    regularCount: 0,
    vipSoloCount: 0,
    vipTable5Count: 0,
    vipTable7Count: 0,
    vipTable10Count: 0,
<<<<<<< HEAD
  });

  const [contactDetails, setContactDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    referralCode: '',
  });

  const [errors, setErrors] = useState({});
  const [totalWithDiscount, setTotalWithDiscount] = useState(0);
  const [discountAmount, setDiscountAmount] = useState(0);

  return {
    ticketCounts,
    setTicketCounts: (key) => (value) => setTicketCounts(prev => ({ ...prev, [key]: typeof value === 'function' ? value(prev[key]) : value })),
=======
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
>>>>>>> 98fa7df4e6d2970f27f1b5715e067d72bbee1227
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

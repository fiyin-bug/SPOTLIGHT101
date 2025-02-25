import { useState } from 'react';

function useCheckoutState() {
  const [ticketCounts, setTicketCounts] = useState({
    earlyBirdCount: 0,
    regularCount: 0,
    vipSoloCount: 0,
    vipTable5Count: 0,
    vipTable7Count: 0,
    vipTable10Count: 0,
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
    contactDetails,
    setContactDetails,
    errors,
    setErrors,
    totalWithDiscount,
    setTotalWithDiscount,
    discountAmount,
    setDiscountAmount,
  };
}

export default useCheckoutState;
import { useState, useEffect } from 'react';
import axiosInstance from './utils/axiosInstance';

function useTicketPrices() {
  const [ticketPrices, setTicketPrices] = useState({
    earlyBird: 5500,
    regular: 20000,
    vipSolo: 50000,
    vipTable5: 500000,
    vipTable7: 1000000,
    vipTable10: 2000000,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTicketDetails = async () => {
      try {
        const response = await axiosInstance.get('https://spotlight-znvr.onrender.com/api/tickets');
        setTicketPrices({
          earlyBird: response.data.earlyBirdPrice || 5500,
          regular: response.data.regularPrice || 20000,
          vipSolo: response.data.vipSoloPrice || 50000,
          vipTable5: response.data.vipTable5Price || 500000,
          vipTable7: response.data.vipTable7Price || 1000000,
          vipTable10: response.data.vipTable10Price || 2000000,
        });
      } catch (error) {
        console.error('Error fetching ticket details:', error);
        alert('Failed to fetch ticket details. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    fetchTicketDetails();
  }, []);

  return { ticketPrices, loading };
}

export default useTicketPrices;
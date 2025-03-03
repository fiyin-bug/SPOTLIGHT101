<<<<<<< HEAD
import { useState, useEffect } from 'react';
// import axiosInstance from './utils/axiosInstance';

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
=======
"use client"

import { useState, useEffect } from "react"

// Mock ticket prices - in a real app, you would fetch these from an API
const mockPrices = {
  earlyBird: 10000,
  regular: 20000,
  vipSolo: 50000,
  vipTable5: 250000,
  vipTable7: 350000,
  vipTable10: 500000,
}

function useTicketPrices() {
  const [ticketPrices, setTicketPrices] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchTicketPrices = async () => {
      setLoading(true)
      try {
        // In a real app, you would fetch from an API
        // const response = await fetch('/api/ticket-prices');
        // const data = await response.json();

        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 500))

        // Use mock data for now
        setTicketPrices(mockPrices)
        setLoading(false)
      } catch (err) {
        console.error("Failed to fetch ticket prices:", err)
        setError("Failed to fetch ticket prices. Please try again later.")
        setLoading(false)

        // Fallback to cached prices if available
        const cachedPrices = localStorage.getItem("ticketPrices")
        if (cachedPrices) {
          try {
            setTicketPrices(JSON.parse(cachedPrices))
          } catch (parseError) {
            console.error("Failed to parse cached prices:", parseError)
          }
        }
      }
    }

    fetchTicketPrices()
  }, [])

  // Cache prices when they're successfully fetched
  useEffect(() => {
    if (Object.keys(ticketPrices).length > 0) {
      localStorage.setItem("ticketPrices", JSON.stringify(ticketPrices))
    }
  }, [ticketPrices])

  return { ticketPrices, loading, error }
}

export default useTicketPrices

>>>>>>> 98fa7df4e6d2970f27f1b5715e067d72bbee1227

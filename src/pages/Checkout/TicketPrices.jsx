
import { useState, useEffect } from "react"

// Mock ticket prices - in a real app, you would fetch these from an API
const mockPrices = {
  earlyBird: 10800,
  regular: 20000,
  vipSolo: 50000,
  vipTable5: 500000,
  vipTable7: 1000000,
  vipTable10: 2000000,
}

function TicketPrices() {
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

export default TicketPrices


import { Plus, Minus, ArrowRight } from "lucide-react"
import PropTypes from 'prop-types'

function TicketSelector({ ticketPrices, ticketCounts, setTicketCounts, onContinue }) {
  const formatPrice = (price) => price.toLocaleString("en-NG")

  const handleIncrement = (type) => {
    setTicketCounts({
      ...ticketCounts,
      [type]: ticketCounts[type] + 1,
    })
  }

  const handleDecrement = (type) => {
    if (ticketCounts[type] > 0) {
      setTicketCounts({
        ...ticketCounts,
        [type]: ticketCounts[type] - 1,
      })
    }
  }

  const totalTickets = Object.values(ticketCounts).reduce((sum, count) => sum + count, 0)

  const ticketTypes = [
    { id: "earlyBirdCount", name: "Early Bird Ticket", price: ticketPrices.earlyBird },
    { id: "regularCount", name: "Regular Ticket", price: ticketPrices.regular },
    { id: "vipSoloCount", name: "VIP Solo", price: ticketPrices.vipSolo },
    { id: "vipTable5Count", name: "VIP Table of 5", price: ticketPrices.vipTable5 },
    { id: "vipTable7Count", name: "VIP Table of 7", price: ticketPrices.vipTable7 },
    { id: "vipTable10Count", name: "VIP Table of 10", price: ticketPrices.vipTable10 },
  ]

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold text-white mb-6">Select Your Tickets</h2>

      <div className="space-y-4">
        {ticketTypes.map((ticket) => (
          <div
            key={ticket.id}
            className="bg-gray-900 p-4 rounded-lg border border-gray-800 hover:border-gold transition-colors"
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-medium text-white">
                  {ticket.name}
                  {ticket.id === "earlyBirdCount" && (
                    <span className="ml-2 text-sm text-red-500 font-semibold">LIMITED TICKETS LEFT</span>
                  )}
                </h3>
                <p className="text-gold font-bold">₦{formatPrice(ticket.price)}</p>
              </div>

              <div className="flex items-center space-x-3">
                <button
                  onClick={() => handleDecrement(ticket.id)}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors"
                  aria-label={`Decrease ${ticket.name} quantity`}
                >
                  <Minus className="h-4 w-4" />
                </button>

                <span className="w-8 text-center text-white font-medium">{ticketCounts[ticket.id]}</span>

                <button
                  onClick={() => handleIncrement(ticket.id)}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-gold text-black hover:bg-opacity-90 transition-colors"
                  aria-label={`Increase ${ticket.name} quantity`}
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-between">
        <button
          onClick={() => window.history.back()}
          className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors cursor-pointer"
        >
          Back
        </button>

        <button
          onClick={onContinue}
          disabled={totalTickets === 0}
          className="flex items-center px-6 py-3 bg-gold text-white font-medium rounded-lg hover:bg-opacity-90 transition-colors disabled:opacity-70 cursor-pointer disabled:cursor-not-allowed"
        >
          Continue
          <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </div>
    </div>
  )
}

TicketSelector.propTypes = {
  ticketPrices: PropTypes.shape({
    earlyBird: PropTypes.number.isRequired,
    regular: PropTypes.number.isRequired,
    vipSolo: PropTypes.number.isRequired,
    vipTable5: PropTypes.number.isRequired,
    vipTable7: PropTypes.number.isRequired,
    vipTable10: PropTypes.number.isRequired
  }).isRequired,
  ticketCounts: PropTypes.object.isRequired,
  setTicketCounts: PropTypes.func.isRequired,
  onContinue: PropTypes.func.isRequired
}

export default TicketSelector;
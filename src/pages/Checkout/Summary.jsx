<<<<<<< HEAD
import React from 'react';

function Summary({ ticketCounts, ticketPrices, subtotal, discountAmount, totalWithDiscount }) {
  const formatPrice = (price) => price.toLocaleString('en-NG', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  return (
    <div className="w-full lg:flex-1 bg-black p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl text-[#fbfaf1] mb-2 sm:mb-4">Summary</h2>
      <p className="m-1 sm:m-2 text-base sm:text-lg text-[#fefdf9]"><strong className="text-[#eae9e4]">Spotlight Events</strong></p>
      <p className="m-1 sm:m-2 text-base sm:text-lg text-[#fefdf9]">Early Bird Ticket: {ticketCounts.earlyBirdCount}</p>
      <p className="m-1 sm:m-2 text-base sm:text-lg text-[#fefdf9]">Regular Ticket: {ticketCounts.regularCount}</p>
      <p className="m-1 sm:m-2 text-base sm:text-lg text-[#fefdf9]">VIP Solo: {ticketCounts.vipSoloCount}</p>
      <p className="m-1 sm:m-2 text-base sm:text-lg text-[#fefdf9]">VIP Table of 5: {ticketCounts.vipTable5Count}</p>
      <p className="m-1 sm:m-2 text-base sm:text-lg text-[#fefdf9]">VIP Table of 7: {ticketCounts.vipTable7Count}</p>
      <p className="m-1 sm:m-2 text-base sm:text-lg text-[#fefdf9]">VIP Table of 10: {ticketCounts.vipTable10Count}</p>
      {/* Add other ticket types */}
      <p className="m-1 sm:m-2 text-base sm:text-lg text-[#fefdf9]">Subtotal: ₦{formatPrice(subtotal)}</p>
      {discountAmount > 0 && <p className="m-1 sm:m-2 text-base sm:text-lg text-[#fefdf9]">Discount (5%): -₦{formatPrice(discountAmount)}</p>}
      <p className="m-1 sm:m-2 text-base sm:text-lg text-[#fefdf9]"><strong className="text-[#eae9e4]">Total: ₦{formatPrice(totalWithDiscount > 0 ? totalWithDiscount : subtotal)}</strong></p>
    </div>
  );
}

export default Summary;
=======
"use client"

import { useMemo } from "react"
import { TicketIcon, Check } from "lucide-react"
import PropTypes from 'prop-types'

function Summary({ ticketCounts, ticketPrices, discountAmount }) {
  const formatPrice = (price) => price.toLocaleString("en-NG", { minimumFractionDigits: 2, maximumFractionDigits: 2 })

  const subtotal = useMemo(() => {
    return Object.keys(ticketCounts).reduce(
      (sum, key) => sum + ticketCounts[key] * (ticketPrices[key.replace("Count", "")] || 0),
      0,
    )
  }, [ticketCounts, ticketPrices])

  const totalWithDiscount = subtotal - discountAmount

  // Calculate total number of tickets
  const totalTickets = Object.values(ticketCounts).reduce((sum, count) => sum + count, 0)

  return (
    <div className="bg-black p-6 rounded-lg border border-gold">
      <h2 className="text-xl font-bold text-white mb-4 flex items-center">
        <TicketIcon className="h-5 w-5 mr-2 text-gold" />
        Order Summary
      </h2>

      <div className="divide-y divide-gray-800">
        {Object.keys(ticketCounts).map((key) => {
          if (ticketCounts[key] <= 0) return null

          const ticketType = key.replace("Count", "")
          const price = ticketPrices[ticketType] || 0
          const total = ticketCounts[key] * price

          return (
            <div key={key} className="py-3 flex justify-between">
              <div>
                <p className="text-white">
                  {ticketCounts[key]} x{" "}
                  {ticketType.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
                </p>
                <p className="text-sm text-gray-400">₦{formatPrice(price)} each</p>
              </div>
              <p className="text-white font-medium">₦{formatPrice(total)}</p>
            </div>
          )
        })}

        <div className="py-3">
          <div className="flex justify-between mb-2">
            <p className="text-gray-300">Subtotal</p>
            <p className="text-white">₦{formatPrice(subtotal)}</p>
          </div>

          {discountAmount > 0 && (
            <div className="flex justify-between mb-2 text-green-400">
              <p className="flex items-center">
                <Check className="h-4 w-4 mr-1" />
                Discount (10%)
              </p>
              <p>-₦{formatPrice(discountAmount)}</p>
            </div>
          )}

          <div className="flex justify-between font-bold">
            <p className="text-white">Total</p>
            <p className="text-gold">₦{formatPrice(totalWithDiscount)}</p>
          </div>
        </div>
      </div>

      {totalTickets > 0 && (
        <div className="mt-4 p-3 bg-gold bg-opacity-10 rounded border border-gold">
          <p className="text-sm text-white">
            You have selected {totalTickets} ticket{totalTickets !== 1 ? "s" : ""}. Complete your purchase to secure
            your spot at the concert.
          </p>
        </div>
      )}
    </div>
  )
}
Summary.propTypes = {
  ticketCounts: PropTypes.object.isRequired,
  ticketPrices: PropTypes.object.isRequired,
  discountAmount: PropTypes.number.isRequired,
}


export default Summary

>>>>>>> 98fa7df4e6d2970f27f1b5715e067d72bbee1227

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";
import { TicketIcon } from "lucide-react";


const TicketDetails = () => {
  const { ticketId } = useParams();
  const [ticket, setTicket] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTicketDetails = async () => {
      console.log("Fetching ticket for ID:", ticketId); // Log ticketId
      try {
        const response = await axiosInstance.get(`https://spotlight-znvr.onrender.com/api/tickets/${ticketId}`);
        console.log("GET Response:", response.data); // Log full response
        setTicket(response.data.ticket);
      } catch (err) {
        console.error("Error fetching ticket details:", err.response?.status, err.response?.data || err.message);
        setError("Failed to fetch ticket details. Please check your ticket ID.");
      } finally {
        setLoading(false);
      }
    };
    fetchTicketDetails();
  }, [ticketId]);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <p className="text-gold text-lg">Loading ticket details...</p>
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <p className="text-red-400 text-lg">{error}</p>
      </div>
    );

  const ticketTypes = [
    { key: "earlyBird", label: "Early Bird" },
    { key: "regular", label: "Regular" },
    { key: "vipSolo", label: "VIP Solo" },
    { key: "vipTable5", label: "VIP Table 5" },
    { key: "vipTable7", label: "VIP Table 7" },
    { key: "vipTable10", label: "VIP Table 10" },
  ];

  return (
    <div className="min-h-screen bg-black flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-2xl bg-black p-6 rounded-lg border border-gold">
        <h1 className="text-2xl font-bold text-white mb-6 flex items-center">
          <TicketIcon className="h-6 w-6 mr-2 text-gold" />
          Ticket Details
        </h1>

        <div className="bg-gray-900 p-4 rounded-md mb-6">
          <h2 className="text-lg font-semibold text-gold mb-3">Attendee Information</h2>
          <div className="space-y-2">
            <p className="text-white">
              <span className="text-gray-400">Event:</span> {ticket.eventName}
            </p>
            <p className="text-white">
              <span className="text-gray-400">Name:</span> {ticket.firstName} {ticket.lastName}
            </p>
            <p className="text-white">
              <span className="text-gray-400">Email:</span> {ticket.userEmail}
            </p>
            <p className="text-white">
              <span className="text-gray-400">Phone:</span> {ticket.phone}
            </p>
            <p className="text-white">
              <span className="text-gray-400">Referral Code:</span> {ticket.referralCode || "N/A"}
            </p>
          </div>
        </div>

        <div className="bg-gray-900 p-4 rounded-md mb-6">
          <h2 className="text-lg font-semibold text-gold mb-3">Ticket Breakdown</h2>
          <div className="divide-y divide-gray-800">
            {ticketTypes.map(({ key, label }) =>
              ticket.tickets[key] > 0 ? (
                <div key={key} className="py-2 flex justify-between">
                  <p className="text-white">{ticket.tickets[key]} x {label}</p>
                </div>
              ) : null
            )}
            <div className="pt-4 mt-4 border-t border-gray-700">
              <div className="flex justify-between text-white">
                <p>Total Tickets:</p>
                <p>{ticket.totalTickets}</p>
              </div>
              <div className="flex justify-between font-bold text-lg mt-2">
                <p className="text-white">Total Price:</p>
                <p className="text-gold">₦{ticket.totalPrice.toLocaleString("en-NG")}</p>
              </div>
            </div>
          </div>
        </div>

        {ticket.qrCode && (
          <div className="bg-gray-900 p-4 rounded-md text-center">
            <h2 className="text-lg font-semibold text-gold mb-3">Your QR Code</h2>
            <div className="inline-block p-3 bg-white rounded-md">
              <div dangerouslySetInnerHTML={{ __html: ticket.qrCode }} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TicketDetails;
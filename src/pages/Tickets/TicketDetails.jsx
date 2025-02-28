import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import spotlightBanner from '../../assets/images/spotlight-banner.png';
import { Calendar, Clock, MapPin } from 'lucide-react';

const TicketDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleGetTicket = () => {
    navigate('/checkout');
  };

  return (
    <div className="bg-black  font-sans text-white max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Ticket Info Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start flex-wrap gap-6 mb-6">
        {/* Left Section: Image and Button */}
        <div className="w-full lg:w-auto">
          <img
            src={spotlightBanner}
            alt="Spotlight Event"
            className="w-full max-w-[300px] sm:max-w-[400px] h-auto rounded-lg mb-4 mx-auto lg:mx-0"
          />
          <button
            className="relative block w-full max-w-[150px] mx-auto px-4 py-2 sm:px-5 sm:py-3 bg-transparent text-white border-2 border-gold rounded text-sm sm:text-base font-bold hover:bg-gold hover:text-black transition-all duration-1000 overflow-hidden group"
            onClick={handleGetTicket}
          >
            GET TICKET
            <span className="absolute inset-0 -left-10 skew-x-[45deg] bg-purple-500 w-0 h-full z-[-1] group-hover:w-[160%] transition-all duration-1000"></span>
          </button>
        </div>

        {/* Right Section: Event Details */}
        <div className="w-full lg:w-auto text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">SPOTLIGHT CONCERTS</h2>
          <div className="flex items-center justify-center lg:justify-start mb-2 text-sm sm:text-base">
            <Calendar className="text-white mr-2 h-5 w-5" />
            <span>Friday, April 18th 2025</span>
          </div>
          <div className="flex items-center justify-center lg:justify-start mb-2 text-sm sm:text-base">
            <Clock className="text-white mr-2 h-5 w-5" />
            <span>4:00 PM - 12:00 AM</span>
          </div>
          <div className="flex items-center justify-center lg:justify-start text-sm sm:text-base">
            <MapPin className="text-white mr-2 h-5 w-5" />
            <span>Lagos Marriott Hotel Ikeja</span>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-t border-gray-700 mb-6" />

      {/* Event Description */}
      <div className="mb-6">
        <h3 className="text-xl sm:text-2xl text-gold mb-2">About this Event</h3>
        <p className="text-sm sm:text-base text-white">
          The Spotlight Concert is an annual musical experience that celebrates and supports emerging and established Nigerian artists, providing them with the platform to showcase their talent to a diverse audience. In the past, we have had notable artists like Asake, Seyi Vibez, Rexxie, Idowest, and Mohbad (of blessed memory) grace our stage.
        </p>
      </div>

      {/* Divider */}
      <hr className="border-t border-gray-700 mb-6" />

      {/* Directions */}
      <div>
        <h3 className="text-xl sm:text-2xl text-gold mb-2">Directions</h3>
        <div className="w-full h-[250px] sm:h-[300px] lg:h-[400px] rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.500011118691!2d3.346845775065096!3d6.584595222450217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b921776d4cd3f%3A0x82bfa6a8a3177ddf!2sLagos%20Marriott%20Hotel%20Ikeja!5e0!3m2!1sen!2sgh!4v1739764116296!5m2!1sen!2sgh"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lagos Marriott Hotel Ikeja"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default TicketDetails;
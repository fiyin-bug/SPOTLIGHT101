import { Instagram, Youtube, Mail, Phone } from "lucide-react";
import { Routes } from "../Links/routes";
import Logo from "../assets/icons/spot.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Instagram,
      href: "https://www.instagram.com/spotlightconcert",
      label: "Instagram",
    },
    {
      icon: Youtube,
      href: "https://m.youtube.com/channel/UCULK59kxjq1jpcP6Y2u3jCg",
      label: "Youtube",
    },
  ];

  return (
    <footer className="bg-black text-white py-12">
      <div className="container lg:mx-auto px-8 md:px-6 lg:px-16 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info Section */}
          <div className="space-y-4">
            <img
              src={Logo || "/placeholder.svg"}
              alt="Company Logo"
              width={96}
              height={96}
              className="h-16 w-auto md:h-20 lg:h-24"
            />
            <p className="text-gray-300 mt-4">
              Experience the magic of live performances at Spotlight Concert.
              Where every moment becomes a memory.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone size={18} className="text-[#c5ac5a]" />
                <a href="tel:+2349012518521">+2349012518521</a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={18} className="text-[#c5ac5a]" />
                <a
                  href="asanbemusic@gmail.com"
                  className="hover:text-[#c5ac5a] transition-colors"
                >
                  asanbemusic@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {Routes.map((route, index) => (
                <li key={index}>
                  <a
                    href={route.href}
                    className="hover:text-[#c5ac5a] transition-colors flex items-center space-x-2"
                  >
                    <span className="">{route.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Upcoming Events Section */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Upcoming Events</h4>
            <div className="space-y-4">
              {[
                {
                  title: "Spotlight The Prestige Experience",
                  date: "April 18th, 2025 | 4:00 PM -12:00 AM",
                  featuring: "Featuring Global Talents",
                },
                {
                  title: "The Sixth Edition",
                  date: "Unavilable",
                  featuring: "Feaaturing Global Talents",
                },
              ].map((event, index) => (
                <div key={index} className="group cursor-pointer">
                  <h5 className="text-[#c5ac5a] group-hover:text-white transition-colors font-medium">
                    {event.title}
                  </h5>
                  <p className="text-sm text-gray-400">{event.date}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    {event.featuring}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Social Links Section */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Connect With Us</h4>
            <div className="space-y-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 hover:text-[#c5ac5a] transition-colors group"
                >
                  <link.icon
                    size={24}
                    className="group-hover:scale-110 transition-transform"
                  />
                  <span className="text-gray-300 group-hover:text-[#c5ac5a]">
                    {link.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} Spotlight Concert. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Facebook, Twitter, Instagram, Youtube, Mail, Phone } from 'lucide-react';
import Logo from "../assets/icons/spot.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Youtube, href: "https://youtube.com", label: "Youtube" },
  ];

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4 md:px-18 sm:px-8 w-full">
        <div className=" flex justify-between items-center gap-8">
          {/* Company Info Section */}
          <div className="space-y-4">
            <img
              src={Logo}
              alt="Company Logo"
              className="h-16 md:h-20 lg:h-24"
            />
            <p className="text-gray-300 mt-4">
              Experience the magic of live performances at Spotlight Concert. Where every moment becomes a memory.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone size={18} className="text-[#c5ac5a]" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={18} className="text-[#c5ac5a]" />
                <a href="mailto:info@spotlightconcert.com" className="hover:text-[#c5ac5a] transition-colors">
                  info@spotlightconcert.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-6">
              <li>
                <a href="/" className="hover:text-[#c5ac5a] transition-colors flex items-center space-x-2">
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-[#c5ac5a] transition-colors flex items-center space-x-2">
                  <span>About Us</span>
                </a>
              </li>
              <li>
                <a href="/events" className="hover:text-[#c5ac5a] transition-colors flex items-center space-x-2">
                  <span>Upcoming Events</span>
                </a>
              </li>
              <li>
                <a href="/gallery" className="hover:text-[#c5ac5a] transition-colors flex items-center space-x-2">
                  <span>Photo Gallery</span>
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-[#c5ac5a] transition-colors flex items-center space-x-2">
                  <span>Contact Us</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Upcoming Events Section */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Upcoming Events</h4>
            <div className="space-y-4">
              <div className="group cursor-pointer">
                <h5 className="text-[#c5ac5a] group-hover:text-white transition-colors font-medium">Rock Revolution Night</h5>
                <p className="text-sm text-gray-400">March 15, 2025 | 7:00 PM</p>
                <p className="text-xs text-gray-500 mt-1">Featuring The Electric Waves</p>
              </div>
              <div className="group cursor-pointer">
                <h5 className="text-[#c5ac5a] group-hover:text-white transition-colors font-medium">Spring Music Festival</h5>
                <p className="text-sm text-gray-400">April 5-7, 2025 | All Day</p>
                <p className="text-xs text-gray-500 mt-1">3 Days of Non-Stop Music</p>
              </div>
              <div className="group cursor-pointer">
                <h5 className="text-[#c5ac5a] group-hover:text-white transition-colors font-medium">Acoustic Unplugged</h5>
                <p className="text-sm text-gray-400">April 20, 2025 | 8:30 PM</p>
                <p className="text-xs text-gray-500 mt-1">With Sarah Mitchell</p>
              </div>
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
                  <link.icon size={24} className="group-hover:scale-110 transition-transform" />
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
import React from "react";
import { Linkedin, Instagram, ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-white via-gray-50 to-gray-100 font-[Poppins] pt-16 pb-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Column 1: Branding */}
          <div className="flex flex-col space-y-6">
            <div>
              <img 
                src="https://ghc53p2bgg.ufs.sh/f/47CofKs94FnTI3LXexAi9tm1GlkdxoZwpsugDFHvWrN3KfbU" 
                alt="Wirely Logo" 
                className="h-20 object-contain" 
              />
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Connect with certified professionals instantly. Comprehensive support tailored to your unique needs.
            </p>
            <div className="flex space-x-4 pt-2">
              {/* Social Icons with elegant hover effects */}
              <a 
                href="https://www.instagram.com/wirely.in/" 
                className="w-9 h-9 rounded-full flex items-center justify-center bg-white border border-gray-200 shadow-sm hover:shadow-md hover:border-[#fbc800] text-gray-600 hover:text-[#fbc800] transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://wa.me/919896364142" 
                className="w-9 h-9 rounded-full flex items-center justify-center bg-white border border-gray-200 shadow-sm hover:shadow-md hover:border-[#fbc800] text-gray-600 hover:text-[#fbc800] transition-all duration-300"
              >
                <FaWhatsapp className="w-4 h-4" />
              </a>
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=help.wirely@gmail.com&su=Support" 
                className="w-9 h-9 rounded-full flex items-center justify-center bg-white border border-gray-200 shadow-sm hover:shadow-md hover:border-[#fbc800] text-gray-600 hover:text-[#fbc800] transition-all duration-300"
              >
                <Mail className="w-4 h-4" />
              </a>
              
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div className="flex flex-col space-y-5">
            <h3 className="text-gray-800 font-semibold text-lg">Quick Links</h3>
            <div className="w-12 h-0.5 bg-[#fbc800]"></div>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-gray-600 hover:text-[#fbc800] text-sm transition-colors duration-300 flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2 opacity-70" />
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-600 hover:text-[#fbc800] text-sm transition-colors duration-300 flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2 opacity-70" />
                  About Us
                </a>
              </li>
              
              <li>
                <a href="/contact" className="text-gray-600 hover:text-[#fbc800] text-sm transition-colors duration-300 flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2 opacity-70" />
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Column 3: Services */}
          <div className="flex flex-col space-y-5">
            <h3 className="text-gray-800 font-semibold text-lg">Our Services</h3>
            <div className="w-12 h-0.5 bg-[#fbc800]"></div>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-gray-600 hover:text-[#fbc800] text-sm transition-colors duration-300 flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2 opacity-70" />
                  IT Support
                </a>
              </li>
              <li>
                <a href="/" className="text-gray-600 hover:text-[#fbc800] text-sm transition-colors duration-300 flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2 opacity-70" />
                  Hardware Solutions
                </a>
              </li>
              <li>
                <a href="/" className="text-gray-600 hover:text-[#fbc800] text-sm transition-colors duration-300 flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2 opacity-70" />
                  Software Management
                </a>
              </li>
              <li>
                <a href="/" className="text-gray-600 hover:text-[#fbc800] text-sm transition-colors duration-300 flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2 opacity-70" />
                  Network Setup
                </a>
              </li>
              <li>
                <a href="/" className="text-gray-600 hover:text-[#fbc800] text-sm transition-colors duration-300 flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2 opacity-70" />
                  Security Solutions
                </a>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Contact */}
          <div className="flex flex-col space-y-5">
            <h3 className="text-gray-800 font-semibold text-lg">Contact Us</h3>
            <div className="w-12 h-0.5 bg-[#fbc800]"></div>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="mt-1">
                  <MapPin className="w-5 h-5 text-[#fbc800]" />
                </div>
                <span className="text-gray-600 text-sm">
                  Banur, Punjab, India
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#fbc800]" />
                <a href="tel:+919896364142" className="text-gray-600 hover:text-[#fbc800] text-sm transition-colors duration-300">
                  +91 98963 64142
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#fbc800]" />
                <a href="mailto:info@wirely.in" className="text-gray-600 hover:text-[#fbc800] text-sm transition-colors duration-300">
                  help.wirely@gmail.com
                </a>
              </li>
            </ul>
            
            {/* Newsletter Subscription */}
            {/* <div className="mt-2 pt-4">
              <form className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-4 py-2.5 text-sm rounded-lg border border-gray-200 focus:border-[#fbc800] focus:outline-none focus:ring-1 focus:ring-[#fbc800] transition-all"
                />
                <button 
                  type="submit" 
                  className="px-4 py-2.5 bg-[#fbc800] hover:bg-[#e9bb00] text-white rounded-lg text-sm transition-colors duration-300 whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div> */}
          </div>
        </div>
        
        {/* Footer Divider with Elegant Style */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-gray-100 px-6 flex">
              <div className="w-2 h-2 rounded-full bg-[#fbc800] mx-1 opacity-70"></div>
              <div className="w-2 h-2 rounded-full bg-[#fbc800] mx-1"></div>
              <div className="w-2 h-2 rounded-full bg-[#fbc800] mx-1 opacity-70"></div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} <span className="text-[#fbc800]">Wirely</span>. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy" className="text-gray-500 hover:text-[#fbc800] text-xs transition-colors">Privacy Policy</a>
            <a href="/terms" className="text-gray-500 hover:text-[#fbc800] text-xs transition-colors">Terms of Service</a>
            <a href="/cookies" className="text-gray-500 hover:text-[#fbc800] text-xs transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
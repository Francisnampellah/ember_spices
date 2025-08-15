import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#134E4A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Restaurant Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-playfair font-bold mb-4">Ember & Spice</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Experience bold Indian fusion flavors in Dar es Salaam. Rated 4.9 stars with a moody, vibey atmosphere. 
              We offer dine-in, takeout, delivery, and curbside pickup with exceptional food quality and service.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/emberandspice.tz" className="bg-[#0F766E] p-3 hover:bg-[#14B8A6] transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-[#0F766E] p-3 hover:bg-[#14B8A6] transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-[#0F766E] p-3 hover:bg-[#14B8A6] transition-colors duration-300">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin size={16} className="mr-3 text-[#F59E0B]" />
                <span className="text-gray-300">
                  Mwai Kibaki Road, Below Ashley furniture, Migombani St, Dar es Salaam 25522
                </span>
              </div>
              <div className="flex items-center">
                <Phone size={16} className="mr-3 text-[#F59E0B]" />
                <a href="tel:+255675999555" className="text-gray-300 hover:text-white transition-colors duration-300">
                  +255 675 999 555
                </a>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="mr-3 text-[#F59E0B]" />
                <a href="mailto:info@emberandspice.com" className="text-gray-300 hover:text-white transition-colors duration-300">
                  info@emberandspice.com
                </a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Hours</h4>
            <div className="space-y-2 text-gray-300">
              <div className="flex justify-between">
                <span>Every Day</span>
                <span>11:00 AM - 11:00 PM</span>
              </div>
            </div>
            
            {/* Services */}
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <div className="space-y-2 text-gray-300 text-sm">
                <div>🍽️ Dine-in</div>
                <div>📦 Takeout</div>
                <div>🚚 Delivery</div>
                <div>🚗 Curbside Pickup</div>
                <div>🍷 Full Bar (Beer & Wine)</div>
                <div>♿ Wheelchair Accessible</div>
                <div>🅿️ Free Parking</div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="border-t border-[#0F766E] mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap gap-6 mb-4 md:mb-0">
              <Link href="/" className="text-gray-300 hover:text-white transition-colors duration-300">
                Home
              </Link>
              <Link href="/menu" className="text-gray-300 hover:text-white transition-colors duration-300">
                Menu
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-white transition-colors duration-300">
                About
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-white transition-colors duration-300">
                Contact
              </Link>
              <Link href="/reservations" className="text-gray-300 hover:text-white transition-colors duration-300">
                Reservations
              </Link>
            </div>
            <div className="text-gray-300 text-sm">
              © 2024 Ember & Spice. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Phone, Mail } from 'lucide-react';

export default function ReservationsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-[#F0FDFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-playfair font-bold text-[#134E4A] mb-6">
              Make a Reservation
            </h1>
            <p className="text-xl text-[#6B7280] max-w-3xl mx-auto leading-relaxed">
              Join us for an exceptional dining experience. Reserve your table today and let us create a memorable evening for you.
            </p>
          </div>
        </div>
      </section>

      {/* Reservation Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-playfair font-bold text-[#134E4A] mb-8">
                Book Your Table
              </h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#134E4A] mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#0F766E] transition-colors duration-300"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#134E4A] mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#0F766E] transition-colors duration-300"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#134E4A] mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#0F766E] transition-colors duration-300"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#134E4A] mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#0F766E] transition-colors duration-300"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#134E4A] mb-2">
                      Date *
                    </label>
                    <input
                      type="date"
                      required
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#0F766E] transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#134E4A] mb-2">
                      Time *
                    </label>
                    <select
                      required
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#0F766E] transition-colors duration-300"
                    >
                      <option value="">Select time</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="13:00">1:00 PM</option>
                      <option value="14:00">2:00 PM</option>
                      <option value="18:00">6:00 PM</option>
                      <option value="19:00">7:00 PM</option>
                      <option value="20:00">8:00 PM</option>
                      <option value="21:00">9:00 PM</option>
                      <option value="22:00">10:00 PM</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#134E4A] mb-2">
                      Party Size *
                    </label>
                    <select
                      required
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#0F766E] transition-colors duration-300"
                    >
                      <option value="">Select size</option>
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="5">5 Guests</option>
                      <option value="6">6 Guests</option>
                      <option value="7">7 Guests</option>
                      <option value="8">8 Guests</option>
                      <option value="9+">9+ Guests</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#134E4A] mb-2">
                    Special Requests
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#0F766E] transition-colors duration-300 resize-none"
                    placeholder="Any special requests or dietary requirements?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0F766E] text-white py-4 font-medium hover:bg-[#14B8A6] transition-all duration-300 transform hover:scale-105 text-lg"
                >
                  Confirm Reservation
                </button>
              </form>

              <p className="text-xs text-[#6B7280] mt-4">
                * This is a demo form. In production, this would integrate with Tock or OpenTable for real reservations.
              </p>
            </div>

            {/* Information */}
            <div>
              <h2 className="text-3xl font-playfair font-bold text-[#134E4A] mb-8">
                Reservation Information
              </h2>
              
              <div className="space-y-6">
                <div className="bg-[#F0FDFA] p-6">
                  <h3 className="text-xl font-playfair font-semibold text-[#134E4A] mb-4">
                    Hours of Operation
                  </h3>
                  <div className="space-y-2 text-[#6B7280]">
                    <div className="flex justify-between">
                      <span>Every Day</span>
                      <span>11:00 AM - 11:00 PM</span>
                    </div>
                  </div>
                </div>

                <div className="bg-[#F0FDFA] p-6">
                  <h3 className="text-xl font-playfair font-semibold text-[#134E4A] mb-4">
                    Reservation Policies
                  </h3>
                  <ul className="space-y-2 text-[#6B7280] text-sm">
                    <li>• Reservations are held for 15 minutes past the scheduled time</li>
                    <li>• Cancellations must be made 24 hours in advance</li>
                    <li>• Large parties (8+) require 48 hours notice</li>
                    <li>• Dress code: Smart casual</li>
                  </ul>
                </div>

                <div className="bg-[#F0FDFA] p-6">
                  <h3 className="text-xl font-playfair font-semibold text-[#134E4A] mb-4">
                    Contact Information
                  </h3>
                  <div className="space-y-3 text-[#6B7280]">
                    <div className="flex items-center">
                      <Phone size={16} className="mr-3 text-[#0F766E]" />
                      <span>+255 675 999 555</span>
                    </div>
                    <div className="flex items-center">
                      <Mail size={16} className="mr-3 text-[#0F766E]" />
                      <span>info@emberandspice.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

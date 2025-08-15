import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-[#F0FDFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-playfair font-bold text-[#134E4A] mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-[#6B7280] max-w-3xl mx-auto leading-relaxed">
              Get in touch with us for reservations, questions, or just to say hello. We're here to serve you the best Indian fusion cuisine in Dar es Salaam.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-playfair font-bold text-[#134E4A] mb-8">
                Get in Touch
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#0F766E] p-3 mr-4">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#134E4A] mb-2">Address</h3>
                    <p className="text-[#6B7280]">
                      Mwai Kibaki Road<br />
                      Below Ashley furniture, Migombani St<br />
                      Dar es Salaam 25522, Tanzania
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#0F766E] p-3 mr-4">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#134E4A] mb-2">Phone</h3>
                    <a href="tel:+255675999555" className="text-[#6B7280] hover:text-[#0F766E] transition-colors duration-300">
                      +255 675 999 555
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#0F766E] p-3 mr-4">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#134E4A] mb-2">Email</h3>
                    <a href="mailto:info@emberandspice.com" className="text-[#6B7280] hover:text-[#0F766E] transition-colors duration-300">
                      info@emberandspice.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#0F766E] p-3 mr-4">
                    <Clock className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#134E4A] mb-2">Hours</h3>
                    <div className="text-[#6B7280] space-y-1">
                      <div className="flex justify-between">
                        <span>Every Day</span>
                        <span>11:00 AM - 11:00 PM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Services */}
              <div className="mt-8">
                <h3 className="font-semibold text-[#134E4A] mb-4">Our Services</h3>
                <div className="grid grid-cols-2 gap-3 text-sm text-[#6B7280]">
                  <div>🍽️ Dine-in</div>
                  <div>📦 Takeout</div>
                  <div>🚚 Delivery</div>
                  <div>🚗 Curbside Pickup</div>
                  <div>🍷 Full Bar</div>
                  <div>♿ Wheelchair Accessible</div>
                  <div>🅿️ Free Parking</div>
                  <div>⭐ 4.9 Rating</div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h3 className="font-semibold text-[#134E4A] mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-[#0F766E] p-3 text-white hover:bg-[#14B8A6] transition-colors duration-300">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="bg-[#0F766E] p-3 text-white hover:bg-[#14B8A6] transition-colors duration-300">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="bg-[#0F766E] p-3 text-white hover:bg-[#14B8A6] transition-colors duration-300">
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Map */}
            <div>
              <h2 className="text-3xl font-playfair font-bold text-[#134E4A] mb-8">
                Find Us
              </h2>
              <div className="h-96 overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.5!2d39.26374460528937!3d-6.771347579642905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNDYnMTInMDAuMCJTIDM5wrAxNicwMC4wIkU!5e0!3m2!1sen!2stz!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ember & Spice Restaurant Location"
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm text-[#6B7280]">
                  Mwai Kibaki Road, Below Ashley furniture
                </p>
                <p className="text-sm text-[#6B7280]">
                  Migombani St, Dar es Salaam, Tanzania
                </p>
                <a 
                  href="https://maps.google.com/?q=-6.771347579642905,39.26374460528937" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-[#0F766E] hover:text-[#14B8A6] transition-colors duration-300 text-sm font-medium"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation Widget */}
      <section className="py-20 bg-[#F0FDFA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-[#134E4A] mb-6">
            Ready to Experience Our Cuisine?
          </h2>
          <p className="text-lg text-[#6B7280] mb-8 max-w-2xl mx-auto">
            Ready to experience bold Indian fusion flavors? Reserve your table today and let us create a memorable dining experience for you.
          </p>
          
          <Link 
            href="/reservations" 
            className="inline-block bg-[#0F766E] text-white px-8 py-4 font-medium hover:bg-[#14B8A6] transition-all duration-300 transform hover:scale-105 text-lg"
          >
            Make a Reservation
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

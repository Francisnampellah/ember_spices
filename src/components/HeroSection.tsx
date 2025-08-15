import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.jpg"
          alt="Restaurant interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-gray-900/70 via-gray-800/40 to-gray-700/30"></div> 
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-screen">
          {/* Left Side - Text Content */}
          <div className="text-white">
            {/* Breadcrumbs */}
            <div className="text-sm text-gray-300 mb-6">
              RESTAURANTS &gt; INDIAN FUSION
            </div>
            
            {/* Main Headline */}
            <h1 className="text-5xl lg:text-7xl font-playfair font-bold mb-6 leading-tight">
              EMBER & SPICE
            </h1>
            
            {/* Sub-headline */}
            <p className="text-xl lg:text-2xl mb-8 text-gray-200 max-w-lg leading-relaxed">
              Experience bold Indian fusion flavors in Dar es Salaam. Moody, vibey atmosphere with exceptional food quality and service.
            </p>
            
            {/* Rating Badge */}
            <div className="flex items-center mb-8">
              <div className="bg-[#F59E0B] text-white px-4 py-2 font-semibold">
                ⭐ 4.9 Rating
              </div>
            </div>
            
            {/* Call to Action Button */}
            <Link 
              href="/reservations" 
              className="inline-block bg-white text-red-900 px-8 py-4 font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 text-lg"
            >
              MAKE RESERVATION
            </Link>
          </div>


        </div>
      </div>

      {/* Service Options - Bottom */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-wrap justify-center gap-6 text-sm text-white/80">
          <span>🍽️ Dine-in</span>
          <span>📦 Takeout</span>
          <span>🚚 Delivery</span>
          <span>🚗 Curbside Pickup</span>
        </div>
      </div> */}

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
        <ChevronDown size={24} className="text-white/60 animate-bounce" />
      </div>
    </section>
  );
}

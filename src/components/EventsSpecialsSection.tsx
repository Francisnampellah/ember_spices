import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, Star, Users } from 'lucide-react';

const events = [
  {
    id: 1,
    title: "Weekend Brunch Special",
    description: "Join us every Saturday and Sunday for our signature brunch featuring bottomless mimosas and live music.",
    date: "Every Weekend",
    time: "11:00 AM - 3:00 PM",
    price: "TZS 35,000",
    image: "/m1.jpg",
    badge: "Popular"
  },
  {
    id: 2,
    title: "Wine & Dine Evening",
    description: "Experience our curated wine pairing menu with expert sommelier guidance and premium wine selection.",
    date: "Every Friday",
    time: "7:00 PM - 10:00 PM",
    price: "TZS 45,000",
    image: "/m2.jpg",
    badge: "Premium"
  },
  {
    id: 3,
    title: "Chef's Table Experience",
    description: "An intimate dining experience with our head chef, featuring exclusive dishes and behind-the-scenes insights.",
    date: "Monthly",
    time: "6:30 PM - 9:30 PM",
    price: "TZS 55,000",
    image: "/m3.jpg",
    badge: "Exclusive"
  }
];

const specials = [
  {
    id: 1,
    title: "Happy Hour",
    description: "50% off on all cocktails and appetizers",
    time: "4:00 PM - 6:00 PM",
    days: "Monday - Friday",
    discount: "50% OFF"
  },
  {
    id: 2,
    title: "Lunch Special",
    description: "Complete meal with soup, main course, and dessert",
    time: "12:00 PM - 2:00 PM",
    days: "Every Day",
    discount: "25% OFF"
  },
  {
    id: 3,
    title: "Family Package",
    description: "Perfect for families with kids menu and special pricing",
    time: "All Day",
    days: "Weekends",
    discount: "30% OFF"
  }
];

export default function EventsSpecialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-[#134E4A] mb-4">
            Events & Specials
          </h2>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
            Discover our exciting events and exclusive specials designed to enhance your dining experience
          </p>
        </div>

        {/* Events Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-playfair font-bold text-[#0F766E] mb-12 text-center">
            Upcoming Events
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <div key={event.id} className="bg-[#F0FDFA] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-110"
                  />
                  {/* Badge */}
                  <div className="absolute top-4 right-4 bg-[#F59E0B] text-white px-3 py-1 text-sm font-semibold">
                    {event.badge}
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h4 className="text-xl font-playfair font-bold text-[#134E4A] mb-3">
                    {event.title}
                  </h4>
                  <p className="text-[#6B7280] text-sm leading-relaxed mb-4">
                    {event.description}
                  </p>
                  
                  {/* Event Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-[#6B7280]">
                      <Calendar size={16} className="mr-2 text-[#0F766E]" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-sm text-[#6B7280]">
                      <Clock size={16} className="mr-2 text-[#0F766E]" />
                      <span>{event.time}</span>
                    </div>
                  </div>
                  
                  {/* Price */}
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-[#0F766E]">
                      {event.price}
                    </span>
                    <Link 
                      href="/reservations" 
                      className="bg-[#0F766E] text-white px-4 py-2 text-sm font-medium hover:bg-[#14B8A6] transition-all duration-300"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Specials Section */}
        <div>
          <h3 className="text-3xl font-playfair font-bold text-[#0F766E] mb-12 text-center">
            Daily Specials
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specials.map((special) => (
              <div key={special.id} className="bg-gradient-to-br from-[#F0FDFA] to-[#FEF3C7] p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                {/* Discount Badge */}
                <div className="bg-[#F59E0B] text-white px-4 py-2 text-lg font-bold mb-4 inline-block">
                  {special.discount}
                </div>
                
                <h4 className="text-xl font-playfair font-bold text-[#134E4A] mb-3">
                  {special.title}
                </h4>
                <p className="text-[#6B7280] text-sm leading-relaxed mb-4">
                  {special.description}
                </p>
                
                {/* Time Details */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center justify-center text-sm text-[#6B7280]">
                    <Clock size={16} className="mr-2 text-[#0F766E]" />
                    <span>{special.time}</span>
                  </div>
                  <div className="flex items-center justify-center text-sm text-[#6B7280]">
                    <Calendar size={16} className="mr-2 text-[#0F766E]" />
                    <span>{special.days}</span>
                  </div>
                </div>
                
                <Link 
                  href="/menu" 
                  className="bg-[#0F766E] text-white px-6 py-3 font-medium hover:bg-[#14B8A6] transition-all duration-300 inline-block"
                >
                  View Menu
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-[#6B7280] mb-6">
            Don't miss out on our exclusive events and special offers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/reservations" 
              className="bg-[#0F766E] text-white px-8 py-4 font-medium hover:bg-[#14B8A6] transition-all duration-300 transform hover:scale-105 text-lg"
            >
              Book an Event
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-[#0F766E] text-[#0F766E] px-8 py-4 font-medium hover:bg-[#0F766E] hover:text-white transition-all duration-300 text-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

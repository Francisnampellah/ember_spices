import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { menuItems } from '@/components/MenuSection';

export default function MenuPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-[#F0FDFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-playfair font-bold text-[#134E4A] mb-6">
              Our Menu
            </h1>
            <p className="text-xl text-[#6B7280] max-w-3xl mx-auto leading-relaxed">
              Explore our exquisite selection of Indian fusion dishes, crafted with passion and the finest ingredients.
            </p>
          </div>
        </div>
      </section>

      {/* Menu Sections */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Appetizers */}
          <div className="mb-20">
            <h2 className="text-3xl font-playfair font-bold text-[#0F766E] mb-12 text-center">
              Appetizers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {menuItems.appetizers.map((item, index) => (
                <Link key={index} href={`/menu/${item.id}`} className="block group">
                  <div className="bg-white overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer">
                    {/* Image Container */}
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="text-white text-sm font-medium bg-[#0F766E]/80 px-3 py-1 inline-block">
                            View Details
                          </div>
                        </div>
                      </div>
                      {/* Price Badge */}
                      <div className="absolute top-4 right-4 bg-[#0F766E] text-white px-3 py-1 text-sm font-semibold shadow-lg">
                        {item.price}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-playfair font-bold text-[#134E4A] mb-3 group-hover:text-[#0F766E] transition-colors duration-300">
                        {item.name}
                      </h3>
                      <p className="text-[#6B7280] text-sm leading-relaxed mb-4">
                        {item.description}
                      </p>
                      
                      {/* Allergen Tags */}
                      <div className="flex flex-wrap gap-2">
                        {item.allergens.map((allergen, idx) => (
                          <span key={idx} className="bg-red-50 text-red-700 px-2 py-1 text-xs font-medium">
                            {allergen}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Main Courses */}
          <div className="mb-20">
            <h2 className="text-3xl font-playfair font-bold text-[#0F766E] mb-12 text-center">
              Main Courses
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {menuItems.mains.map((item, index) => (
                <Link key={index} href={`/menu/${item.id}`} className="block group">
                  <div className="bg-white overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer">
                    {/* Image Container */}
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="text-white text-sm font-medium bg-[#0F766E]/80 px-3 py-1 inline-block">
                            View Details
                          </div>
                        </div>
                      </div>
                      {/* Price Badge */}
                      <div className="absolute top-4 right-4 bg-[#0F766E] text-white px-3 py-1 text-sm font-semibold shadow-lg">
                        {item.price}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-playfair font-bold text-[#134E4A] mb-3 group-hover:text-[#0F766E] transition-colors duration-300">
                        {item.name}
                      </h3>
                      <p className="text-[#6B7280] text-sm leading-relaxed mb-4">
                        {item.description}
                      </p>
                      
                      {/* Allergen Tags */}
                      <div className="flex flex-wrap gap-2">
                        {item.allergens.map((allergen, idx) => (
                          <span key={idx} className="bg-red-50 text-red-700 px-2 py-1 text-xs font-medium">
                            {allergen}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Soups & Beverages */}
          <div className="mb-20">
            <h2 className="text-3xl font-playfair font-bold text-[#0F766E] mb-12 text-center">
              Soups & Beverages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[...menuItems.soups, ...menuItems.beverages].map((item, index) => (
                <Link key={index} href={`/menu/${item.id}`} className="block group">
                  <div className="bg-white overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer">
                    {/* Image Container */}
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="text-white text-sm font-medium bg-[#0F766E]/80 px-3 py-1 inline-block">
                            View Details
                          </div>
                        </div>
                      </div>
                      {/* Price Badge */}
                      <div className="absolute top-4 right-4 bg-[#0F766E] text-white px-3 py-1 text-sm font-semibold shadow-lg">
                        {item.price}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-playfair font-bold text-[#134E4A] mb-3 group-hover:text-[#0F766E] transition-colors duration-300">
                        {item.name}
                      </h3>
                      <p className="text-[#6B7280] text-sm leading-relaxed mb-4">
                        {item.description}
                      </p>
                      
                      {/* Allergen Tags */}
                      <div className="flex flex-wrap gap-2">
                        {item.allergens.map((allergen, idx) => (
                          <span key={idx} className="bg-red-50 text-red-700 px-2 py-1 text-xs font-medium">
                            {allergen}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#F0FDFA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-[#134E4A] mb-6">
            Ready to Experience Our Cuisine?
          </h2>
          <p className="text-lg text-[#6B7280] mb-8 max-w-2xl mx-auto">
            Join us for an exceptional dining experience. Reserve your table today and let us create a memorable evening for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/reservations" 
              className="bg-[#0F766E] text-white px-8 py-4 font-medium hover:bg-[#14B8A6] transition-all duration-300 transform hover:scale-105 text-lg"
            >
              Make Reservation
            </a>
            <a 
              href="/contact" 
              className="border-2 border-[#0F766E] text-[#0F766E] px-8 py-4 font-medium hover:bg-[#0F766E] hover:text-white transition-all duration-300 text-lg"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

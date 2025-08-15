import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Clock, Users } from 'lucide-react';
import { menuItems } from '@/components/MenuSection';

export default async function MenuItemPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  // Flatten all menu items to search by ID
  const allMenuItems = [
    ...menuItems.appetizers,
    ...menuItems.mains,
    ...menuItems.soups,
    ...menuItems.beverages
  ];
  
  const menuItem = allMenuItems.find(item => item.id === id);

  if (!menuItem) {
    return (
      <main className="min-h-screen">
        <Navigation />
        <div className="pt-20 pb-16 bg-[#F0FDFA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-playfair font-bold text-[#134E4A] mb-4">
              Menu Item Not Found
            </h1>
            <p className="text-lg text-[#6B7280] mb-8">
              The menu item you&apos;re looking for doesn&apos;t exist.
            </p>
            <Link href="/menu" className="bg-[#0F766E] text-white px-6 py-3 font-medium hover:bg-[#14B8A6] transition-colors duration-300">
              Back to Menu
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-[#F0FDFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Link href="/menu" className="flex items-center text-[#0F766E] hover:text-[#14B8A6] transition-colors duration-300">
              <ArrowLeft size={20} className="mr-2" />
              Back to Menu
            </Link>
          </div>
          <div className="text-center">
            <span className="inline-block bg-[#0F766E] text-white px-4 py-2 text-sm font-medium mb-4">
              {menuItem.category}
            </span>
            <h1 className="text-4xl lg:text-6xl font-playfair font-bold text-[#134E4A] mb-4">
              {menuItem.name}
            </h1>
            <p className="text-xl text-[#6B7280] max-w-3xl mx-auto leading-relaxed">
              {menuItem.description}
            </p>
          </div>
        </div>
      </section>

      {/* Menu Item Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image */}
            <div className="relative h-96 lg:h-[500px] overflow-hidden shadow-lg">
              <Image
                src={menuItem.image}
                alt={menuItem.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Details */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-playfair font-bold text-[#134E4A]">
                  {menuItem.name}
                </h2>
                <span className="text-3xl font-playfair font-bold text-[#0F766E]">
                  {menuItem.price}
                </span>
              </div>

              <p className="text-lg text-[#6B7280] leading-relaxed mb-8">
                {menuItem.details}
              </p>

              {/* Quick Info */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center">
                  <Clock size={20} className="text-[#0F766E] mr-3" />
                  <div>
                    <p className="text-sm text-[#6B7280]">Prep Time</p>
                    <p className="font-semibold text-[#134E4A]">{menuItem.prepTime}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users size={20} className="text-[#0F766E] mr-3" />
                  <div>
                    <p className="text-sm text-[#6B7280]">Serving Size</p>
                    <p className="font-semibold text-[#134E4A]">{menuItem.servingSize}</p>
                  </div>
                </div>
              </div>

              {/* Ingredients */}
              <div className="mb-8">
                <h3 className="text-xl font-playfair font-semibold text-[#134E4A] mb-4">
                  Ingredients
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {menuItem.ingredients.map((ingredient, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-[#0F766E] mr-3"></div>
                      <span className="text-[#6B7280]">{ingredient}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Allergens */}
              <div className="mb-8">
                <h3 className="text-xl font-playfair font-semibold text-[#134E4A] mb-4">
                  Allergens
                </h3>
                <div className="flex flex-wrap gap-2">
                  {menuItem.allergens.map((allergen, index) => (
                    <span key={index} className="bg-red-100 text-red-800 px-3 py-1 text-sm font-medium">
                      {allergen}
                    </span>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/reservations"
                  className="bg-[#0F766E] text-white px-8 py-4 font-medium hover:bg-[#14B8A6] transition-all duration-300 transform hover:scale-105 text-center"
                >
                  Reserve Table
                </Link>
                <Link
                  href="/menu"
                  className="border-2 border-[#0F766E] text-[#0F766E] px-8 py-4 font-medium hover:bg-[#0F766E] hover:text-white transition-all duration-300 text-center"
                >
                  View Full Menu
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

import Image from 'next/image';
import Link from 'next/link';

export const menuItems = {
  appetizers: [
    {
      id: "beef-kababs",
      name: "Beef Kababs",
      description: "Crispy, juicy beef kababs with home-style comfort food feel",
      price: "TZS 15,000",
      image: "/m1.jpg", 
      details: "Our signature beef kababs are perfectly seasoned and grilled to perfection. Crispy on the outside, juicy on the inside, delivering authentic home-style comfort with every bite.",
      ingredients: ["Premium beef", "Indian spices", "Onions", "Cilantro", "Ginger", "Garlic"],
      allergens: ["None"],
      category: "Appetizer",
      prepTime: "15 minutes",
      servingSize: "4 pieces"
    },
    {
      id: "kabab-loaded-fries",
      name: "Kabab Loaded Fries",
      description: "Flavor bomb with pickled onions - the star of any meal",
      price: "TZS 18,000",
      image: "/m2.jpg",
      details: "A sensational combination of crispy fries topped with tender kabab pieces and tangy pickled onions. This dish is a true flavor bomb that elevates any dining experience.",
      ingredients: ["Crispy fries", "Kabab pieces", "Pickled onions", "Special sauce", "Fresh herbs"],
      allergens: ["None"],
      category: "Appetizer",
      prepTime: "12 minutes",
      servingSize: "1 serving"
    },
    {
      id: "alcove-special-paneer",
      name: "Alcove Special Paneer",
      description: "Iconic crispy noodles with paneer in special sauce",
      price: "TZS 16,000",
      image: "/m3.jpg",
      details: "Our signature paneer dish featuring crispy noodles and tender paneer cubes in our special house sauce. A vegetarian delight that's become an iconic favorite.",
      ingredients: ["Paneer", "Crispy noodles", "Special sauce", "Bell peppers", "Spring onions"],
      allergens: ["Dairy"],
      category: "Appetizer",
      prepTime: "18 minutes",
      servingSize: "1 serving"
    }
  ],
  mains: [
    {
      id: "spicy-chicken-shawarma",
      name: "Spicy Chicken Shawarma",
      description: "Saucy, crunchy, and flavorful chicken shawarma",
      price: "TZS 22,000",
      image: "/m4.jpg",
      details: "Tender chicken marinated in aromatic spices, wrapped in fresh flatbread with crunchy vegetables and our signature spicy sauce. A perfect fusion of Middle Eastern and Indian flavors.",
      ingredients: ["Chicken breast", "Flatbread", "Spicy sauce", "Cucumber", "Tomatoes", "Onions"],
      allergens: ["Gluten"],
      category: "Main Course",
      prepTime: "20 minutes",
      servingSize: "1 serving"
    },
    {
      id: "gajjar-prawns-masala-fries",
      name: "Gajjar Prawns + Masala Fries",
      description: "Spicy and crispy prawns with masala fries",
      price: "TZS 28,000",
      image: "/m5.jpg",
      details: "Fresh prawns cooked in aromatic spices served with crispy masala fries. The perfect combination of seafood excellence and Indian spice mastery.",
      ingredients: ["Fresh prawns", "Masala fries", "Indian spices", "Ginger", "Garlic", "Curry leaves"],
      allergens: ["Shellfish"],
      category: "Main Course",
      prepTime: "25 minutes",
      servingSize: "1 serving"
    },
    {
      id: "hot-honey-chicken-burger",
      name: "Hot Honey Chicken Burger",
      description: "Crispy chicken with perfect balance of honey and heat",
      price: "TZS 25,000",
      image: "/m6.jpg",
      details: "Crispy chicken breast glazed with our signature hot honey sauce, served in a soft bun with fresh lettuce and special sauce. The perfect balance of sweet and spicy.",
      ingredients: ["Chicken breast", "Hot honey sauce", "Burger bun", "Lettuce", "Special sauce"],
      allergens: ["Gluten"],
      category: "Main Course",
      prepTime: "22 minutes",
      servingSize: "1 serving"
    }
  ],
  soups: [
    {
      id: "mixed-seafood-soup",
      name: "Mixed Seafood Soup",
      description: "Comforting, flavour-packed soup with fresh seafood",
      price: "TZS 20,000",
      image: "/m7.jpg",
      details: "A comforting and flavour-packed soup featuring fresh seafood in a rich, aromatic broth. Perfect for warming up on any day.",
      ingredients: ["Fresh seafood", "Aromatic broth", "Herbs", "Spices", "Vegetables"],
      allergens: ["Shellfish"],
      category: "Soup",
      prepTime: "30 minutes",
      servingSize: "1 serving"
    }
  ],
  beverages: [
    {
      id: "aromatic-chai",
      name: "Aromatic Chai",
      description: "Warm and aromatic traditional Indian tea",
      price: "TZS 3,000",
      image: "/m1.jpg",
      details: "Our signature aromatic chai is brewed with premium tea leaves and traditional Indian spices. Warm, comforting, and the perfect accompaniment to any meal.",
      ingredients: ["Premium tea leaves", "Cardamom", "Cinnamon", "Ginger", "Milk", "Sugar"],
      allergens: ["Dairy"],
      category: "Beverage",
      prepTime: "8 minutes",
      servingSize: "1 cup"
    }
  ]
};

export default function MenuSection() {
  return (
    <section className="py-20 bg-[#F0FDFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-[#134E4A] mb-4">
            Our Menu
          </h2>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
            Discover our carefully curated selection of Indian fusion dishes, crafted with bold flavors and exceptional quality
          </p>
        </div>

        {/* Appetizers */}
        <div className="mb-16">
          <h3 className="text-2xl font-playfair font-bold text-[#0F766E] mb-8 text-center">
            Appetizers
          </h3>
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
                    <h4 className="text-xl font-playfair font-bold text-[#134E4A] mb-3 group-hover:text-[#0F766E] transition-colors duration-300">
                      {item.name}
                    </h4>
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
        <div className="mb-16">
          <h3 className="text-2xl font-playfair font-bold text-[#0F766E] mb-8 text-center">
            Main Courses
          </h3>
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
                    <h4 className="text-xl font-playfair font-bold text-[#134E4A] mb-3 group-hover:text-[#0F766E] transition-colors duration-300">
                      {item.name}
                    </h4>
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
        <div>
          <h3 className="text-2xl font-playfair font-bold text-[#0F766E] mb-8 text-center">
            Soups & Beverages
          </h3>
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
                    <h4 className="text-xl font-playfair font-bold text-[#134E4A] mb-3 group-hover:text-[#0F766E] transition-colors duration-300">
                      {item.name}
                    </h4>
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
  );
}

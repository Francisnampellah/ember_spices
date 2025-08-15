import Image from 'next/image';

const galleryImages = [
  {
    src: "/g1.jpg",
    alt: "Restaurant Interior",
    title: "Elegant Dining Room",
    size: "small"
  },
  {
    src: "/g2.jpg",
    alt: "Chef Preparing Food",
    title: "Culinary Excellence",
    size: "small"
  },
  {
    src: "/g3.jpg",
    alt: "Gourmet Dish",
    title: "Signature Dishes",
    size: "small"
  },
  {
    src: "/g4.jpg",
    alt: "Fresh Ingredients",
    title: "Fresh Ingredients",
    size: "small"
  },
  {
    src: "/g5.jpg",
    alt: "Wine Selection",
    title: "Fine Wine Collection",
    size: "large"
  }
];

export default function GallerySection() {
  const smallImages = galleryImages.filter(img => img.size === "small");
  const largeImage = galleryImages.find(img => img.size === "large");

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-[#134E4A] mb-4">
            Gallery
          </h2>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
            Take a visual journey through our restaurant and discover the artistry behind every dish
          </p>
        </div>

        {/* Gallery Grid - Layout similar to reference image */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[600px]">
          {/* Left side - 2x2 grid of small images */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-6">
            {smallImages.map((image, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden shadow-lg cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              >
                <div className="relative h-full w-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-playfair font-semibold text-lg">
                        {image.title}
                      </h3>
                      <div className="w-12 h-0.5 bg-[#F59E0B] mt-2 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right side - One large image */}
          {largeImage && (
            <div className="group relative overflow-hidden shadow-lg cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="relative h-full w-full">
                <Image
                  src={largeImage.src}
                  alt={largeImage.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-playfair font-semibold text-xl">
                      {largeImage.title}
                    </h3>
                    <div className="w-12 h-0.5 bg-[#F59E0B] mt-2 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-[#6B7280] mb-6">
            Experience the ambiance and culinary artistry in person
          </p>
          <button className="bg-[#0F766E] text-white px-8 py-3 font-medium hover:bg-[#14B8A6] transition-all duration-300 transform hover:scale-105">
            View Full Gallery
          </button>
        </div>
      </div>
    </section>
  );
}

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { Award, Users, Heart } from 'lucide-react';

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Chef Sarah Martinez",
      role: "Executive Chef",
      bio: "With over 15 years of culinary experience, Chef Sarah brings her passion for Indian fusion cuisine and innovative techniques to every dish.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Michael Thompson",
      role: "Sous Chef",
      bio: "Michael's expertise in Indian spices and dedication to perfection ensures every plate meets our high standards.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Emily Rodriguez",
      role: "Pastry Chef",
      bio: "Emily's artistic approach to Indian desserts creates memorable endings to every dining experience.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-[#F0FDFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-playfair font-bold text-[#134E4A] mb-6">
              Our Story
            </h1>
            <p className="text-xl text-[#6B7280] max-w-3xl mx-auto leading-relaxed">
              A passion for bold Indian fusion flavors and warm hospitality drives everything we do at Ember & Spice
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-[#134E4A] mb-6">
                A Culinary Journey in Dar es Salaam
              </h2>
              <div className="space-y-4 text-[#6B7280] leading-relaxed">
                <p>
                  Ember & Spice was born from a vision to bring bold Indian fusion flavors to the heart of Dar es Salaam. 
                  Our founder envisioned a restaurant where traditional Indian spices meet modern culinary innovation, 
                  creating dishes that are both familiar and excitingly new.
                </p>
                <p>
                  Located on Mwai Kibaki Road, we&apos;ve become a beloved destination for food lovers seeking exceptional 
                  quality and service. Our 4.9-star rating reflects our commitment to excellence in every aspect of 
                  the dining experience.
                </p>
                <p>
                  We believe that great food is about more than just taste—it&apos;s about creating a moody, vibey atmosphere 
                  where every guest feels welcome. From our signature beef kababs to our iconic Alcove Special Paneer, 
                  every dish tells a story of passion and culinary mastery.
                </p>
              </div>
            </div>
            <div className="relative h-96 lg:h-[500px]">
              <Image
                src="/m1.jpg"
                alt="Indian fusion cuisine"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-[#F0FDFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-[#134E4A] mb-4">
              Our Values
            </h2>
            <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-[#0F766E] w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Heart className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-playfair font-semibold text-[#134E4A] mb-4">
                Bold Flavors
              </h3>
              <p className="text-[#6B7280]">
                We pour our hearts into every dish, creating bold, authentic flavors that leave lasting impressions.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#0F766E] w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-playfair font-semibold text-[#134E4A] mb-4">
                Excellence
              </h3>
              <p className="text-[#6B7280]">
                We strive for perfection in every detail, from ingredient selection to service delivery.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#0F766E] w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-playfair font-semibold text-[#134E4A] mb-4">
                Community
              </h3>
              <p className="text-[#6B7280]">
                We believe in building lasting relationships with our guests, suppliers, and team members.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-[#134E4A] mb-4">
              What Our Guests Say
            </h2>
            <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
              Don&apos;t just take our word for it - hear from our valued guests
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#F0FDFA] p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex mr-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#F59E0B] text-xl">⭐</span>
                  ))}
                </div>
              </div>
              <p className="text-[#134E4A] mb-6 italic leading-relaxed">
                &ldquo;Loved everything about this place, been to lots of Indian restaurant in Dar es salam but this one just outplay all the restaurant when it comes to quality of food and services.&rdquo;
              </p>
              <div className="text-sm text-[#6B7280]">
                - Satisfied Customer
              </div>
            </div>

            <div className="bg-[#F0FDFA] p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex mr-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#F59E0B] text-xl">⭐</span>
                  ))}
                </div>
              </div>
              <p className="text-[#134E4A] mb-6 italic leading-relaxed">
                &ldquo;Excellent Indian restaurant with great food quality and service. The beef kababs are crispy, juicy, and have that perfect home-style comfort food feel.&rdquo;
              </p>
              <div className="text-sm text-[#6B7280]">
                - Happy Guest
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-[#F0FDFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-[#134E4A] mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
              The talented individuals who make Ember & Spice extraordinary
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-playfair font-semibold text-[#134E4A] mb-2">
                  {member.name}
                </h3>
                <p className="text-[#0F766E] font-medium mb-4">
                  {member.role}
                </p>
                <p className="text-[#6B7280] leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-[#134E4A] mb-6">
            Join Us for an Unforgettable Experience
          </h2>
          <p className="text-lg text-[#6B7280] mb-8 max-w-2xl mx-auto">
            Experience the passion, excellence, and community that makes Ember & Spice special. 
            Reserve your table today and become part of our story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/reservations" 
              className="bg-[#0F766E] text-white px-8 py-4 font-medium hover:bg-[#14B8A6] transition-all duration-300 transform hover:scale-105 text-lg"
            >
              Make Reservation
            </Link>
            <Link 
              href="/menu" 
              className="border-2 border-[#0F766E] text-[#0F766E] px-8 py-4 font-medium hover:bg-[#0F766E] hover:text-white transition-all duration-300 text-lg"
            >
              View Menu
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

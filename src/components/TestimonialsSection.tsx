import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Food Critic, The Times",
    content: "Amber & Spice delivers an exceptional dining experience that transcends the ordinary. The attention to detail in every dish is remarkable.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Michael Chen",
    role: "Local Business Owner",
    content: "The perfect blend of sophisticated flavors and warm hospitality. This has become our go-to spot for special occasions.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Emily Rodriguez",
    role: "Food Blogger",
    content: "From the first bite to the last, every dish tells a story. The seasonal menu keeps me coming back for new discoveries.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  }
];

const pressMentions = [
  {
    publication: "Food & Wine Magazine",
    title: "Best New Restaurants 2024",
    excerpt: "Amber & Spice makes our list of must-visit dining destinations..."
  },
  {
    publication: "The New York Times",
    title: "Where to Eat This Weekend",
    excerpt: "A sophisticated take on contemporary American cuisine..."
  },
  {
    publication: "Eater",
    title: "Restaurant of the Month",
    excerpt: "Chef's innovative approach to seasonal ingredients..."
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonials */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-[#134E4A] mb-4">
              What Our Guests Say
            </h2>
            <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
              Don't just take our word for it - hear from our valued guests and critics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-[#F0FDFA] p-8 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="flex mr-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={20} className="text-[#F59E0B] fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-[#134E4A] mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 overflow-hidden mr-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#134E4A]">{testimonial.name}</h4>
                    <p className="text-sm text-[#6B7280]">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Press Mentions */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-playfair font-bold text-[#0F766E] mb-4">
              Press & Recognition
            </h3>
            <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
              Featured in leading publications and culinary guides
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pressMentions.map((mention, index) => (
              <div key={index} className="text-center p-6 border border-[#0F766E]/20 hover:shadow-lg transition-shadow duration-300">
                <h4 className="font-playfair font-semibold text-[#0F766E] mb-2">
                  {mention.publication}
                </h4>
                <h5 className="font-semibold text-[#134E4A] mb-3">
                  {mention.title}
                </h5>
                <p className="text-[#6B7280] text-sm leading-relaxed">
                  {mention.excerpt}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

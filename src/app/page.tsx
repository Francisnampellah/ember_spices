import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import MenuSection from '@/components/MenuSection';
import EventsSpecialsSection from '@/components/EventsSpecialsSection';
import GallerySection from '@/components/GallerySection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <MenuSection />
      <EventsSpecialsSection />
      <GallerySection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}

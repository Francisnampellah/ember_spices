'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isHomePage && !isScrolled
        ? 'bg-transparent' 
        : 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/20'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link 
            href="/" 
            className={`text-2xl font-playfair font-bold transition-colors duration-300 ${
              isHomePage && !isScrolled
                ? 'text-white hover:text-[#F59E0B]' 
                : 'text-[#134E4A] hover:text-[#0F766E]'
            }`}
          >
            Ember & Spice
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link 
              href="/" 
              className={`font-medium transition-colors duration-300 ${
                isHomePage && !isScrolled
                  ? 'text-white hover:text-[#F59E0B]' 
                  : 'text-[#134E4A] hover:text-[#0F766E]'
              }`}
            >
              Home
            </Link>
            <Link 
              href="/menu" 
              className={`font-medium transition-colors duration-300 ${
                isHomePage && !isScrolled
                  ? 'text-white hover:text-[#F59E0B]' 
                  : 'text-[#134E4A] hover:text-[#0F766E]'
              }`}
            >
              Menu
            </Link>
            <Link 
              href="/about" 
              className={`font-medium transition-colors duration-300 ${
                isHomePage && !isScrolled
                  ? 'text-white hover:text-[#F59E0B]' 
                  : 'text-[#134E4A] hover:text-[#0F766E]'
              }`}
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className={`font-medium transition-colors duration-300 ${
                isHomePage && !isScrolled
                  ? 'text-white hover:text-[#F59E0B]' 
                  : 'text-[#134E4A] hover:text-[#0F766E]'
              }`}
            >
              Contact
            </Link>
            <Link 
              href="/reservations" 
              className={`px-6 py-2 font-medium transition-all duration-300 transform hover:scale-105 ${
                isHomePage && !isScrolled
                  ? 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border border-white/30' 
                  : 'bg-[#0F766E] text-white hover:bg-[#14B8A6]'
              }`}
            >
              Reserve
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden transition-colors duration-300 ${
              isHomePage && !isScrolled
                ? 'text-white hover:text-[#F59E0B]' 
                : 'text-[#134E4A] hover:text-[#0F766E]'
            }`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mobile-menu bg-white/95 backdrop-blur-md shadow-lg border border-gray-200/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                href="/" 
                className="block px-3 py-2 text-[#134E4A] hover:text-[#0F766E] hover:bg-[#F0FDFA] transition-all duration-300 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/menu" 
                className="block px-3 py-2 text-[#134E4A] hover:text-[#0F766E] hover:bg-[#F0FDFA] transition-all duration-300 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Menu
              </Link>
              <Link 
                href="/about" 
                className="block px-3 py-2 text-[#134E4A] hover:text-[#0F766E] hover:bg-[#F0FDFA] transition-all duration-300 font-medium"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className="block px-3 py-2 text-[#134E4A] hover:text-[#0F766E] hover:bg-[#F0FDFA] transition-all duration-300 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link 
                href="/reservations" 
                className="block px-3 py-2 bg-[#0F766E] text-white hover:bg-[#14B8A6] transition-all duration-300 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Reserve
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

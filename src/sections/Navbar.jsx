import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import Button from '../components/Button';
import Container from '../components/Container';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Paket', href: '#pricing' },
  { name: 'Testimonial', href: '#testimonial' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-3' : 'bg-transparent py-5'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <a href="#home" aria-label="SiteKita Home" className="text-2xl font-heading font-bold text-slate-900">
              Site<span className="text-indigo-600">kita</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-600 hover:text-indigo-600 font-medium transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            <Button variant="primary">Konsultasi Gratis</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-600 hover:text-indigo-600 focus:outline-none"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass-card border-t border-slate-100 shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-3 text-slate-600 hover:text-indigo-600 hover:bg-slate-50 font-medium rounded-md"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4">
              <Button variant="primary" className="w-full">Konsultasi Gratis</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

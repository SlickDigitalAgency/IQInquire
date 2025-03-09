import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <MessageSquare className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">InquireIQ</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="#features" className="text-text-muted hover:text-text transition-colors">
              Features
            </Link>
            <Link to="#pricing" className="text-text-muted hover:text-text transition-colors">
              Pricing
            </Link>
            <Link to="#contact" className="text-text-muted hover:text-text transition-colors">
              Contact
            </Link>
            <button className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-full transition-colors">
              Get Started
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-text-muted hover:text-text"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-background-light"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="#features"
              className="block px-3 py-2 text-text-muted hover:text-text transition-colors"
            >
              Features
            </Link>
            <Link
              to="#pricing"
              className="block px-3 py-2 text-text-muted hover:text-text transition-colors"
            >
              Pricing
            </Link>
            <Link
              to="#contact"
              className="block px-3 py-2 text-text-muted hover:text-text transition-colors"
            >
              Contact
            </Link>
            <button className="w-full text-center bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-full transition-colors">
              Get Started
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Button from './Button';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Bootcamp', href: '/bootcamp' },
  { label: 'Comunidad', href: '/comunidad' },
  { label: 'Business Center', href: '/business-center' },
  { label: 'Doble Agente', href: '/doble-agente' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
           <img 
             src="/logo_ff.png" 
             alt="Future Founders Logo" 
             className="w-10 h-10 object-contain"
             onError={(e) => {
               // Fallback if image fails to load
               e.currentTarget.style.display = 'none';
               e.currentTarget.nextElementSibling?.classList.remove('hidden');
             }}
           />
           {/* Fallback visual if image missing */}
           <div className="hidden w-10 h-10 bg-ff-blue text-ff-yellow items-center justify-center font-display font-bold text-xl rounded-sm">
             FF
           </div>
           
           <span className={`font-heading font-bold text-xl tracking-tight uppercase ${isScrolled ? 'text-neutral-900' : 'text-white'}`}>
             Future Founders
           </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link 
              key={item.href} 
              to={item.href}
              className={`text-sm font-bold uppercase tracking-wide transition-colors hover:text-ff-yellow ${
                isScrolled ? 'text-neutral-800' : 'text-neutral-100'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link to="/bootcamp">
            <Button size="sm" variant={isScrolled ? 'primary' : 'white'} className="ml-4">
              Aplicar
            </Button>
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
             <X className={isScrolled ? 'text-black' : 'text-white'} />
          ) : (
             <Menu className={isScrolled ? 'text-black' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-neutral-900 border-t border-neutral-800 p-6 flex flex-col gap-4 md:hidden min-h-screen">
          {navItems.map((item) => (
            <Link 
              key={item.href} 
              to={item.href}
              className="text-white text-2xl font-display font-bold uppercase py-4 border-b border-neutral-800 hover:text-ff-yellow transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-8">
            <Link to="/bootcamp">
              <Button fullWidth size="lg">Aplicar Ahora</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
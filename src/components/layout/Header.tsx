
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Donate Food', path: '/provider' },
    { name: 'Request Food', path: '/receiver' },
    { name: 'Volunteer', path: '/volunteers' },
    { name: 'NGOs', path: '/ngos' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-bumblebee-black/95 backdrop-blur-md py-2 shadow-lg' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="/logo-placeholder.svg" 
            alt="Aahara Logo" 
            className="h-10 w-10"
          />
          <span className="text-2xl font-playfair font-bold text-bumblebee-yellow">
            Aahara
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-medium transition-colors hover:text-bumblebee-yellow ${
                location.pathname === link.path 
                  ? 'text-bumblebee-yellow' 
                  : 'text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/login" 
            className="btn-primary ml-4"
          >
            Login
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white hover:text-bumblebee-yellow transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X size={28} />
          ) : (
            <Menu size={28} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-bumblebee-black/95 backdrop-blur-md shadow-lg py-4 animate-fade-in">
          <nav className="container mx-auto px-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-medium p-2 transition-colors hover:bg-bumblebee-black/50 rounded ${
                  location.pathname === link.path 
                    ? 'text-bumblebee-yellow' 
                    : 'text-white'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/login" 
              className="btn-primary mt-2 text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Login
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

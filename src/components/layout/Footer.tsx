
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-bumblebee-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <img src="/logo-placeholder.svg" alt="Aahara Logo" className="h-10 w-10" />
              <span className="text-2xl font-playfair font-bold text-bumblebee-yellow">Aahara</span>
            </Link>
            <p className="text-gray-300 mt-4">
              Bridging hunger and hope through community-driven food rescue and donation network.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-300 hover:text-bumblebee-yellow transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-bumblebee-yellow transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-bumblebee-yellow transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-bumblebee-yellow transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-playfair font-bold text-bumblebee-yellow">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/provider" className="text-gray-300 hover:text-bumblebee-yellow transition-colors">
                  Donate Food
                </Link>
              </li>
              <li>
                <Link to="/receiver" className="text-gray-300 hover:text-bumblebee-yellow transition-colors">
                  Request Food
                </Link>
              </li>
              <li>
                <Link to="/volunteers" className="text-gray-300 hover:text-bumblebee-yellow transition-colors">
                  Join as Volunteer
                </Link>
              </li>
              <li>
                <Link to="/ngos" className="text-gray-300 hover:text-bumblebee-yellow transition-colors">
                  NGO Registration
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-bumblebee-yellow transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-xl font-playfair font-bold text-bumblebee-yellow">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-bumblebee-yellow transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-bumblebee-yellow transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="text-gray-300 hover:text-bumblebee-yellow transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-playfair font-bold text-bumblebee-yellow">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="text-bumblebee-yellow mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-300">
                  123 Food Street, Hunger Square, Bengaluru, 560001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-bumblebee-yellow flex-shrink-0" size={18} />
                <a href="tel:+918899776655" className="text-gray-300 hover:text-bumblebee-yellow transition-colors">
                  +91 88997 76655
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-bumblebee-yellow flex-shrink-0" size={18} />
                <a href="mailto:info@aahara.org" className="text-gray-300 hover:text-bumblebee-yellow transition-colors">
                  info@aahara.org
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Aahara. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Made with ❤️ for a hunger-free world
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

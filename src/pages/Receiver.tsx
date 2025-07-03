
import { useRef } from 'react';
import { Phone, MapPin, Check, Info } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { Link } from 'react-router-dom';

const Receiver = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const optionsRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  
  const headerInView = useIntersectionObserver({
    ref: headerRef,
    triggerOnce: true,
  });

  const optionsInView = useIntersectionObserver({
    ref: optionsRef,
    triggerOnce: true,
  });
  
  const formInView = useIntersectionObserver({
    ref: formRef,
    triggerOnce: true,
    threshold: 0.3,
  });

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-b from-transparent via-bumblebee-black/70 to-bumblebee-black z-0"
          style={{
            backgroundImage: `url('/lovable-uploads/2c9b17d6-631a-4fed-8910-87c5bb018208.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-bumblebee-black/20 via-transparent to-bumblebee-black/30 opacity-80"></div>
          <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-bumblebee-yellow/10 to-transparent opacity-50"></div>
          <div className="absolute inset-0 honeycomb-bg opacity-10"></div>
        </div>
        
        <div 
          ref={headerRef}
          className={`container mx-auto px-4 py-16 pt-32 z-10 text-center transition-all duration-700 transform ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-white mb-6 leading-tight">
            <span className="block">Request a</span>
            <span className="text-bumblebee-yellow block mt-2">Meal</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-10 font-light">
            Everyone deserves access to nutritious food. Request assistance for yourself
            or someone in need through our simple process.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={scrollToForm}
              className="btn-primary animate-fade-in" 
              style={{ animationDelay: '0.2s' }}
            >
              Request Food
            </button>
            <Link to="/login" className="btn-outline animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Receiver Login
            </Link>
          </div>
        </div>
      </section>
      
      {/* Two options section */}
      <div className="py-16 bg-bumblebee-yellow">
        <div className="container mx-auto px-4">
          <h2 
            ref={optionsRef}
            className={`text-3xl font-playfair font-bold text-center mb-12 text-bumblebee-black transition-all duration-700 ${
              optionsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            How to Request Food
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Option 1 */}
            <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-bumblebee-yellow/20 rounded-full flex items-center justify-center mb-6">
                <Phone className="text-bumblebee-gold" size={24} />
              </div>
              <h3 className="text-xl font-playfair font-bold mb-4 text-bumblebee-black">
                Call or SMS Our AI Assistant
              </h3>
              <p className="text-gray-600 mb-6">
                For quick assistance, especially if you have limited internet access, simply:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <Check className="text-green-500 flex-shrink-0" size={18} />
                  <span>Call or SMS <strong className="text-bumblebee-black">+91 8899-AAHARA</strong></span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-green-500 flex-shrink-0" size={18} />
                  <span>Our AI assistant will guide you through the process</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-green-500 flex-shrink-0" size={18} />
                  <span>Available in multiple languages</span>
                </li>
              </ul>
              <div className="bg-bumblebee-yellow/20 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Info className="text-bumblebee-gold flex-shrink-0 mt-1" size={18} />
                  <p className="text-sm text-gray-600">
                    This option is especially helpful for those with limited tech access or in urgent need.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Option 2 */}
            <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-bumblebee-yellow/20 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-bumblebee-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-playfair font-bold mb-4 text-bumblebee-black">
                Fill Out the Form Below
              </h3>
              <p className="text-gray-600 mb-6">
                Complete our online form with your details:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <Check className="text-green-500 flex-shrink-0" size={18} />
                  <span>Enter your contact information</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-green-500 flex-shrink-0" size={18} />
                  <span>Provide your location for delivery</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-green-500 flex-shrink-0" size={18} />
                  <span>Specify number of people and food requirements</span>
                </li>
              </ul>
              <div className="bg-bumblebee-yellow/20 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Info className="text-bumblebee-gold flex-shrink-0 mt-1" size={18} />
                  <p className="text-sm text-gray-600">
                    Our matching algorithm will connect you with the nearest available food donation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Form section */}
      <div className="py-16 bg-bumblebee-yellow">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-playfair font-bold text-center mb-8 text-bumblebee-black">
              Request Form
            </h2>
            
            <form 
              ref={formRef}
              className={`bg-white rounded-xl shadow-lg p-8 transition-all duration-700 ${
                formInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-bumblebee-yellow"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Your contact number"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-bumblebee-yellow"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="location" className="block text-gray-700 font-medium mb-2">
                  Delivery Location
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="location"
                    placeholder="Enter your address for delivery"
                    className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-bumblebee-yellow"
                    required
                  />
                  <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                </div>
                <div className="mt-2 flex items-center gap-2 text-sm text-gray-600">
                  <button
                    type="button"
                    className="text-bumblebee-gold hover:underline"
                  >
                    Use my current location
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="people" className="block text-gray-700 font-medium mb-2">
                    Number of People
                  </label>
                  <input
                    type="number"
                    id="people"
                    placeholder="How many people need food"
                    min="1"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-bumblebee-yellow"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="frequency" className="block text-gray-700 font-medium mb-2">
                    Frequency
                  </label>
                  <select
                    id="frequency"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-bumblebee-yellow"
                    required
                  >
                    <option value="" disabled selected>Select frequency</option>
                    <option value="onetime">One-time request</option>
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-6">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-5 h-5 text-bumblebee-yellow rounded focus:ring-bumblebee-yellow" />
                  <span className="text-gray-700">I can pick up food if delivery is not available</span>
                </label>
              </div>
              
              <div className="mb-8">
                <label htmlFor="notes" className="block text-gray-700 font-medium mb-2">
                  Special Requirements (Optional)
                </label>
                <textarea
                  id="notes"
                  rows={3}
                  placeholder="Any dietary restrictions, allergies, or special needs..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-bumblebee-yellow"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full py-4 bg-bumblebee-yellow text-bumblebee-black font-bold rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                Submit Request
              </button>
              
              <p className="text-center text-sm text-gray-500 mt-4">
                We respect your privacy. Your information will only be used to facilitate food delivery.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Receiver;

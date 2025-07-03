
import { useState, useRef } from 'react';
import { Upload, MapPin, Calendar } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { Link } from 'react-router-dom';

const Provider = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  
  const headerInView = useIntersectionObserver({
    ref: headerRef,
    triggerOnce: true,
  });

  const stepsInView = useIntersectionObserver({
    ref: stepsRef,
    triggerOnce: true,
  });
  
  const formInView = useIntersectionObserver({
    ref: formRef,
    triggerOnce: true,
    threshold: 0.3,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
  };

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
            backgroundImage: `url('https://images.unsplash.com/photo-1488459716781-31db52582fe9?q=80&w=2070&auto=format&fit=crop')`,
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
            <span className="block">Become a Food</span>
            <span className="text-bumblebee-yellow block mt-2">Provider</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-10 font-light">
            Share your surplus food with those in need. Your contribution can make a meaningful 
            difference in someone's life today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={scrollToForm}
              className="btn-primary animate-fade-in" 
              style={{ animationDelay: '0.2s' }}
            >
              Register Donation
            </button>
            <Link to="/login" className="btn-outline animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Provider Login
            </Link>
          </div>
        </div>
      </section>
      
      {/* Steps section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 
            ref={stepsRef}
            className={`text-3xl font-playfair font-bold text-center mb-12 transition-all duration-700 ${
              stepsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            How it Works
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-bumblebee-yellow/30 transform -translate-x-1/2"></div>
              
              {/* Steps */}
              <div className="space-y-12 md:space-y-0">
                {/* Step 1 */}
                <div className="md:flex items-center">
                  <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                    <h3 className="text-xl font-playfair font-bold text-bumblebee-gold mb-3">
                      1. Register
                    </h3>
                    <p className="text-gray-600">
                      Create an account to become a food provider. It only takes a minute to get started.
                    </p>
                  </div>
                  <div className="md:w-12 mx-auto md:mx-0 flex justify-center">
                    <div className="w-12 h-12 rounded-full bg-bumblebee-yellow flex items-center justify-center text-white font-bold relative z-10">
                      1
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-12 hidden md:block"></div>
                </div>
                
                {/* Step 2 */}
                <div className="md:flex items-center">
                  <div className="md:w-1/2 md:pr-12 hidden md:block"></div>
                  <div className="md:w-12 mx-auto md:mx-0 flex justify-center">
                    <div className="w-12 h-12 rounded-full bg-bumblebee-yellow flex items-center justify-center text-white font-bold relative z-10">
                      2
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0 md:text-left">
                    <h3 className="text-xl font-playfair font-bold text-bumblebee-gold mb-3">
                      2. Log Surplus Food
                    </h3>
                    <p className="text-gray-600">
                      Tell us about your surplus food - type, quantity, when it will be available, and for how long.
                    </p>
                  </div>
                </div>
                
                {/* Step 3 */}
                <div className="md:flex items-center">
                  <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                    <h3 className="text-xl font-playfair font-bold text-bumblebee-gold mb-3">
                      3. Get Matched
                    </h3>
                    <p className="text-gray-600">
                      Our AI system matches your donation with nearby recipients. A volunteer will be assigned for pickup.
                    </p>
                  </div>
                  <div className="md:w-12 mx-auto md:mx-0 flex justify-center">
                    <div className="w-12 h-12 rounded-full bg-bumblebee-yellow flex items-center justify-center text-white font-bold relative z-10">
                      3
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-12 hidden md:block"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Form section */}
      <div className="py-16 bg-bumblebee-cream/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-playfair font-bold text-center mb-8">
              Register Your Donation
            </h2>
            
            <form 
              ref={formRef}
              onSubmit={handleSubmit}
              className={`bg-white rounded-xl shadow-lg p-8 transition-all duration-700 ${
                formInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              {formSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-10 w-10 text-green-600" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-playfair font-bold mb-3 text-bumblebee-black">
                    Thank You!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Your donation has been registered. You'll receive a confirmation email shortly.
                  </p>
                </div>
              ) : (
                <>
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
                      <label htmlFor="organization" className="block text-gray-700 font-medium mb-2">
                        Organization (Optional)
                      </label>
                      <input
                        type="text"
                        id="organization"
                        placeholder="Restaurant, Event, etc."
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-bumblebee-yellow"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        placeholder="Your email address"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-bumblebee-yellow"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="foodType" className="block text-gray-700 font-medium mb-2">
                      Food Details
                    </label>
                    <input
                      type="text"
                      id="foodType"
                      placeholder="Type of food (e.g., Cooked meals, Bread, Vegetables)"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-bumblebee-yellow mb-3"
                      required
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="number"
                        id="quantity"
                        placeholder="Quantity (servings/kg)"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-bumblebee-yellow"
                        required
                      />
                      <div className="relative">
                        <input
                          type="text"
                          id="expiry"
                          placeholder="Expiry/Best Before"
                          className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-bumblebee-yellow"
                          required
                        />
                        <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="image" className="block text-gray-700 font-medium mb-2">
                      Upload Image (Optional)
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:bg-gray-50 transition cursor-pointer">
                      <Upload className="mx-auto mb-3 text-gray-400" size={32} />
                      <p className="text-gray-500 mb-1">Drag and drop an image, or click to browse</p>
                      <p className="text-xs text-gray-400">Max file size: 5MB</p>
                      <input type="file" id="image" accept="image/*" className="hidden" />
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <label htmlFor="location" className="block text-gray-700 font-medium mb-2">
                      Pickup Location
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="location"
                        placeholder="Enter address for pickup"
                        className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-bumblebee-yellow"
                        required
                      />
                      <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      We'll use this address to match you with nearby recipients and volunteers.
                    </p>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full py-4 bg-bumblebee-yellow text-bumblebee-black font-bold rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                  >
                    Register Donation
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Provider;

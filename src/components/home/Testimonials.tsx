
import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

// Define the testimonial type
interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  text: string;
}

// Sample testimonials data
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Food Donor, Restaurant Owner",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=1470&auto=format&fit=crop",
    text: "Aahara has transformed the way we handle excess food. Instead of wastage, we're now able to contribute to those in need efficiently. The process is seamless, and the impact reports give us a sense of fulfillment."
  },
  {
    id: 2,
    name: "Vikram Reddy",
    role: "Volunteer Coordinator",
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=1374&auto=format&fit=crop",
    text: "Being part of the Aahara volunteer network has been incredibly rewarding. The platform makes it easy to coordinate pickups and deliveries, and knowing we're directly helping fight hunger in our community is a powerful motivator."
  },
  {
    id: 3,
    name: "Lakshmi Iyer",
    role: "NGO Partner",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1376&auto=format&fit=crop",
    text: "The real-time coordination and AI matching system has increased our efficiency by 40%. We can now reach more beneficiaries with fresher food, and the transparent reporting helps us maintain accountability to our donors."
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    
    return () => clearInterval(interval);
  }, [currentIndex, isAnimating]);

  // Intersection observer for animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const sectionElement = sectionRef.current;
    if (sectionElement) {
      observer.observe(sectionElement);
    }
    
    return () => {
      if (sectionElement) {
        observer.unobserve(sectionElement);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-24 bg-white relative transition-all duration-700 transform opacity-0 translate-y-10"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
            Voices of <span className="text-bumblebee-gold">Impact</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from the people who are making a difference through Aahara, from donors and 
            volunteers to NGOs and beneficiaries.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Quote icon */}
          <div className="absolute -top-10 -left-10 text-bumblebee-yellow/20">
            <Quote size={80} />
          </div>
          
          {/* Testimonial slide */}
          <div 
            className={`bg-bumblebee-cream/30 rounded-xl p-8 md:p-12 shadow-lg transition-all duration-500 ${
              isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
            }`}
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3 flex-shrink-0">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name}
                  className="w-32 h-32 object-cover rounded-full mx-auto border-4 border-bumblebee-yellow shadow-lg"
                />
              </div>
              
              <div className="md:w-2/3">
                <p className="text-lg italic mb-6">{testimonials[currentIndex].text}</p>
                <div>
                  <h4 className="text-xl font-playfair font-bold text-bumblebee-black">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-bumblebee-gold">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation arrows */}
          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={prevSlide}
              className="p-2 rounded-full bg-bumblebee-yellow/10 hover:bg-bumblebee-yellow/30 transition-colors"
              disabled={isAnimating}
            >
              <ChevronLeft size={24} className="text-bumblebee-gold" />
            </button>
            
            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => {
                    if (!isAnimating && index !== currentIndex) {
                      setIsAnimating(true);
                      setCurrentIndex(index);
                      setTimeout(() => setIsAnimating(false), 500);
                    }
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex 
                      ? 'bg-bumblebee-yellow w-6' 
                      : 'bg-bumblebee-gold/30'
                  }`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextSlide}
              className="p-2 rounded-full bg-bumblebee-yellow/10 hover:bg-bumblebee-yellow/30 transition-colors"
              disabled={isAnimating}
            >
              <ChevronRight size={24} className="text-bumblebee-gold" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

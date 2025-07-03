
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  const ctaRef = useRef<HTMLDivElement>(null);
  
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
    
    const ctaElement = ctaRef.current;
    if (ctaElement) {
      observer.observe(ctaElement);
    }
    
    return () => {
      if (ctaElement) {
        observer.unobserve(ctaElement);
      }
    };
  }, []);

  return (
    <section 
      ref={ctaRef}
      className="py-20 transition-all duration-700 transform opacity-0 translate-y-10"
      style={{
        backgroundImage: 'linear-gradient(135deg, #F4C542 0%, #DFAF2B 100%)',
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-6">
          Ready to Make a Difference?
        </h2>
        <p className="text-xl text-bumblebee-black/80 max-w-2xl mx-auto mb-10">
          Join our community today and be part of the solution to food waste and hunger.
          Every donation, volunteer hour, and collaboration counts!
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link 
            to="/provider" 
            className="px-8 py-4 bg-bumblebee-black text-white font-bold rounded-lg hover:bg-bumblebee-black/80 transform hover:-translate-y-1 transition-all duration-300"
          >
            Donate Food
          </Link>
          <Link 
            to="/volunteers" 
            className="px-8 py-4 bg-white text-bumblebee-black font-bold rounded-lg hover:bg-white/90 transform hover:-translate-y-1 transition-all duration-300"
          >
            Become a Volunteer
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

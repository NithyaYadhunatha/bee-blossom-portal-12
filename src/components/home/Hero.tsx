
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
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
    
    const heroElement = heroRef.current;
    if (heroElement) {
      observer.observe(heroElement);
    }
    
    return () => {
      if (heroElement) {
        observer.unobserve(heroElement);
      }
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Enhanced Gradient */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Top-to-bottom gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>
        {/* Multiple Gradient Overlays for Depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bumblebee-black/70 to-bumblebee-black"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-bumblebee-black/20 via-transparent to-bumblebee-black/30 opacity-80"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-bumblebee-yellow/10 to-transparent opacity-50"></div>
        <div className="absolute inset-0 honeycomb-bg opacity-10"></div>
      </div>
      
      {/* Content */}
      <div 
        ref={heroRef}
        className="container mx-auto px-4 py-16 pt-32 z-10 text-center transition-all duration-700 transform opacity-0 translate-y-10"
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-white mb-6 leading-tight">
          <span className="block">Aahara</span>
          <span className="text-bumblebee-yellow block mt-2">Bridging Hunger and Hope</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-10 font-light">
          A platform connecting food donors, volunteers, and those in need to create a sustainable ecosystem of food rescue and distribution.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
          <Link to="/auth/donor/login" className="btn-primary animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Donate Food
          </Link>
          <Link to="/auth/receiver/login" className="btn-primary animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Request Food
          </Link>
          <Link to="/auth/volunteer/login" className="btn-primary animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Volunteer
          </Link>
          <Link to="/auth/ngo/login" className="btn-primary animate-fade-in" style={{ animationDelay: '0.5s' }}>
            NGO Register
          </Link>
          <Link to="/auth/admin/login" className="btn-primary animate-fade-in" style={{ animationDelay: '0.6s' }}>
            Admin Login
          </Link>
        </div>
        
        <div className="mt-16 animate-bounce">
          <ArrowDown className="mx-auto text-white/70 cursor-pointer" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;

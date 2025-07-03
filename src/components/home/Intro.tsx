
import { useEffect, useRef } from 'react';

const Intro = () => {
  const introRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const introElement = introRef.current;
    if (introElement) {
      observer.observe(introElement);
    }
    
    return () => {
      if (introElement) {
        observer.unobserve(introElement);
      }
    };
  }, []);

  return (
    <section 
      ref={introRef}
      className="py-20 transition-all duration-700 transform opacity-0 translate-y-10"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
            About <span className="text-bumblebee-gold">Aahara</span>
          </h2>
          
          <p className="text-lg text-gray-700 mb-8 font-dancing text-xl">
            "In a world that produces enough food to feed everyone, hunger persists due to inefficient distribution.
            Aahara is our solution to bridge this gap."
          </p>
          
          <div className="text-gray-600 space-y-4">
            <p>
              Aahara, meaning 'food' in Sanskrit, is a community-driven platform that connects food donors with those in need. 
              Our mission is to reduce food waste while tackling hunger through technology and human compassion.
            </p>
            <p>
              Using AI-powered matching, real-time coordination, and a dedicated volunteer network, we ensure that excess 
              food from restaurants, events, and individuals reaches those who need it most – efficiently and with dignity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;


import { useEffect, useRef } from 'react';
import { Brain, Clock, Users, Building } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const FeatureCard = ({ title, description, icon, delay }: FeatureCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              if (cardRef.current) {
                cardRef.current.classList.add('opacity-100', 'translate-y-0');
                cardRef.current.classList.remove('opacity-0', 'translate-y-10');
              }
            }, delay);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const cardElement = cardRef.current;
    if (cardElement) {
      observer.observe(cardElement);
    }
    
    return () => {
      if (cardElement) {
        observer.unobserve(cardElement);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={cardRef}
      className="glass-morph rounded-xl p-6 transition-all duration-500 transform opacity-0 translate-y-10 hover:-translate-y-2 hover:shadow-lg"
    >
      <div className="bg-bumblebee-yellow/20 w-16 h-16 rounded-full flex items-center justify-center mb-4 text-bumblebee-yellow">
        {icon}
      </div>
      <h3 className="text-xl font-playfair font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0');
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
      className="py-20 bg-bumblebee-cream/50 relative transition-opacity duration-700 opacity-0"
    >
      <div className="absolute inset-0 honeycomb-bg opacity-10"></div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
            How <span className="text-bumblebee-gold">Aahara</span> Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our platform uses cutting-edge technology to connect food donors with those in need, 
            creating an efficient ecosystem for food rescue and distribution.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard 
            title="AI-Powered Matching" 
            description="Our intelligent system matches food donations with nearby recipients based on quantity, type, and urgency."
            icon={<Brain size={32} />}
            delay={100}
          />
          <FeatureCard 
            title="Real-Time Coordination" 
            description="Instant notifications and real-time tracking ensure food reaches recipients while it's still fresh."
            icon={<Clock size={32} />}
            delay={200}
          />
          <FeatureCard 
            title="Volunteer Network" 
            description="A dedicated network of verified volunteers to facilitate pickup and delivery of food donations."
            icon={<Users size={32} />}
            delay={300}
          />
          <FeatureCard 
            title="NGO Collaboration" 
            description="Seamless integration with partner NGOs to maximize impact and reach vulnerable communities."
            icon={<Building size={32} />}
            delay={400}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;

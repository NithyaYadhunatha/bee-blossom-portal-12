
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface CounterProps {
  end: number;
  duration: number;
  suffix?: string;
  title: string;
}

const Counter = ({ end, duration, suffix = '', title }: CounterProps) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  
  useEffect(() => {
    if (inView) {
      let start = 0;
      const increment = end / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        setCount(Math.floor(start));
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [inView, end, duration]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-bumblebee-yellow mb-2 font-playfair">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-lg text-gray-600">{title}</div>
    </div>
  );
};

const Stats = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
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
      className="py-16 bg-bumblebee-black text-white transition-all duration-700 transform opacity-0 translate-y-10"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Counter end={250000} duration={2000} suffix="+" title="Meals Delivered" />
          <Counter end={5000} duration={2000} suffix="+" title="Active Volunteers" />
          <Counter end={120} duration={2000} suffix="+" title="Partner NGOs" />
          <Counter end={35} duration={2000} suffix="+" title="Cities Covered" />
        </div>
      </div>
    </section>
  );
};

export default Stats;

import { useRef } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Clock, Users, Award, CheckCircle, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import VolunteerApplicationForm from '@/components/forms/VolunteerApplicationForm';

const Volunteers = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const rolesRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const applicationRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  
  const headerInView = useIntersectionObserver({
    ref: headerRef,
    triggerOnce: true,
  });

  const benefitsInView = useIntersectionObserver({
    ref: benefitsRef,
    triggerOnce: true,
  });

  const rolesInView = useIntersectionObserver({
    ref: rolesRef,
    triggerOnce: true,
  });

  const processInView = useIntersectionObserver({
    ref: processRef,
    triggerOnce: true,
  });

  const applicationInView = useIntersectionObserver({
    ref: applicationRef,
    triggerOnce: true,
  });

  const ctaInView = useIntersectionObserver({
    ref: ctaRef,
    triggerOnce: true,
  });

  const scrollToApplication = () => {
    applicationRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const benefits = [
    {
      icon: Heart,
      title: "Make a Real Impact",
      description: "Directly help reduce food waste and fight hunger in your community"
    },
    {
      icon: Users,
      title: "Build Connections",
      description: "Meet like-minded people and build lasting friendships through service"
    },
    {
      icon: Award,
      title: "Gain Experience",
      description: "Develop valuable skills in logistics, communication, and community service"
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      description: "Choose volunteer opportunities that fit your availability and lifestyle"
    }
  ];

  const roles = [
    {
      title: "Food Collection Volunteer",
      description: "Pick up donated food from restaurants, events, and businesses",
      commitment: "2-4 hours per week"
    },
    {
      title: "Distribution Helper",
      description: "Assist in sorting and distributing food to those in need",
      commitment: "3-5 hours per week"
    },
    {
      title: "Community Coordinator",
      description: "Help coordinate between donors, volunteers, and recipients",
      commitment: "5-8 hours per week"
    },
    {
      title: "Event Volunteer",
      description: "Support special events and community outreach programs",
      commitment: "Flexible, event-based"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Apply Online",
      description: "Fill out our simple volunteer application form"
    },
    {
      number: "02",
      title: "Background Check",
      description: "Complete a quick background verification process"
    },
    {
      number: "03",
      title: "Orientation",
      description: "Attend our volunteer orientation and training session"
    },
    {
      number: "04",
      title: "Start Volunteering",
      description: "Begin making a difference in your community"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-b from-transparent via-bumblebee-black/70 to-bumblebee-black z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=2073&auto=format&fit=crop')`,
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
            <span className="block">Join as a</span>
            <span className="text-bumblebee-yellow block mt-2">Volunteer</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-10 font-light">
            Be the vital link in our food rescue chain. Volunteers are the heart of our operation,
            connecting donors with recipients and making real change happen.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={scrollToApplication}
              className="btn-primary animate-fade-in" 
              style={{ animationDelay: '0.2s' }}
            >
              Apply to Volunteer
            </button>
            <Link to="/login" className="btn-outline animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Volunteer Login
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div 
            ref={benefitsRef}
            className={`text-center mb-16 transition-all duration-700 ${
              benefitsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              Why <span className="text-bumblebee-yellow">Volunteer</span> with Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join a community of changemakers and experience the joy of making a real difference
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card 
                key={benefit.title}
                className={`glass-card card-hover transition-all duration-700 ${
                  benefitsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <benefit.icon className="w-12 h-12 text-bumblebee-yellow mx-auto mb-4" />
                  <h3 className="text-xl font-playfair font-bold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Roles Section */}
      <section className="py-20 bg-bumblebee-cream">
        <div className="container mx-auto px-4">
          <div 
            ref={rolesRef}
            className={`text-center mb-16 transition-all duration-700 ${
              rolesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              Volunteer <span className="text-bumblebee-yellow">Opportunities</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find the perfect role that matches your interests, skills, and schedule
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {roles.map((role, index) => (
              <Card 
                key={role.title}
                className={`glass-card card-hover transition-all duration-700 ${
                  rolesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <h3 className="text-2xl font-playfair font-bold mb-4 text-bumblebee-black">{role.title}</h3>
                  <p className="text-gray-600 mb-4">{role.description}</p>
                  <div className="flex items-center text-bumblebee-gold">
                    <Clock className="w-5 h-5 mr-2" />
                    <span className="font-medium">{role.commitment}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div 
            ref={processRef}
            className={`text-center mb-16 transition-all duration-700 ${
              processInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              How to <span className="text-bumblebee-yellow">Get Started</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our volunteer community in just four simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div 
                key={step.number}
                className={`text-center transition-all duration-700 ${
                  processInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-bumblebee-yellow text-bumblebee-black rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {step.number}
                </div>
                <h3 className="text-xl font-playfair font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div 
            ref={applicationRef}
            className={`text-center mb-16 transition-all duration-700 ${
              applicationInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              Apply to <span className="text-bumblebee-yellow">Volunteer</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to make a difference? Fill out our application form below
            </p>
          </div>

          <div 
            className={`max-w-4xl mx-auto transition-all duration-700 ${
              applicationInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <VolunteerApplicationForm />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-bumblebee-black text-white">
        <div className="container mx-auto px-4 text-center">
          <div 
            ref={ctaRef}
            className={`transition-all duration-700 ${
              ctaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              Ready to Make a <span className="text-bumblebee-yellow">Difference</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
              Join thousands of volunteers who are already making an impact in their communities.
              Your time, no matter how much, can help fight hunger and reduce food waste.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={scrollToApplication}
                className="btn-primary"
              >
                Start Your Application
              </button>
              <Link to="/login" className="btn-outline border-white text-white hover:bg-white hover:text-bumblebee-black">
                Existing Volunteer Login
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Volunteers;

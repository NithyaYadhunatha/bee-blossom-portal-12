import { useRef } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { Building2, Users, Network, TrendingUp, Shield, Globe, HandHeart, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import NGOApplicationForm from '@/components/forms/NGOApplicationForm';

const NGOs = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const requirementsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
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

  const requirementsInView = useIntersectionObserver({
    ref: requirementsRef,
    triggerOnce: true,
  });

  const servicesInView = useIntersectionObserver({
    ref: servicesRef,
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
  });

  const scrollToApplication = () => {
    applicationRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const benefits = [
    {
      icon: Network,
      title: "Expanded Network",
      description: "Connect with donors, volunteers, and other NGOs in our ecosystem"
    },
    {
      icon: TrendingUp,
      title: "Increased Impact",
      description: "Leverage our platform to reach more beneficiaries and scale your operations"
    },
    {
      icon: Shield,
      title: "Technology Support",
      description: "Access our advanced logistics and management tools at no cost"
    },
    {
      icon: Globe,
      title: "Community Reach",
      description: "Tap into our network of volunteers and community partnerships"
    }
  ];

  const requirements = [
    {
      icon: Building2,
      title: "Registered Organization",
      description: "Valid NGO registration with proper documentation"
    },
    {
      icon: HandHeart,
      title: "Food Security Focus",
      description: "Primary mission aligned with hunger relief and food security"
    },
    {
      icon: Users,
      title: "Community Presence",
      description: "Active presence in your local community with established beneficiaries"
    },
    {
      icon: CheckCircle,
      title: "Transparent Operations",
      description: "Commitment to transparency and regular impact reporting"
    }
  ];

  const services = [
    {
      title: "Food Distribution Management",
      description: "Streamlined system for managing food collection, sorting, and distribution to your beneficiaries"
    },
    {
      title: "Volunteer Coordination",
      description: "Access to our volunteer network and tools for efficient volunteer management"
    },
    {
      title: "Impact Tracking",
      description: "Comprehensive analytics and reporting tools to measure and showcase your impact"
    },
    {
      title: "Donor Relationships",
      description: "Direct connections with food donors including restaurants, hotels, and corporate partners"
    },
    {
      title: "Training & Support",
      description: "Ongoing training programs for your staff and volunteers on best practices"
    },
    {
      title: "Resource Sharing",
      description: "Collaborative platform for sharing resources, knowledge, and best practices with other NGOs"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Submit Application",
      description: "Complete our comprehensive NGO partnership application"
    },
    {
      number: "02",
      title: "Documentation Review",
      description: "Our team reviews your organization's credentials and mission alignment"
    },
    {
      number: "03",
      title: "Partnership Agreement",
      description: "Sign partnership agreement and complete onboarding process"
    },
    {
      number: "04",
      title: "Platform Access",
      description: "Get access to our platform and begin expanding your impact"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-b from-transparent via-bumblebee-black/70 to-bumblebee-black z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop')`,
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
            <span className="block">Partner as an</span>
            <span className="text-bumblebee-yellow block mt-2">NGO</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-10 font-light">
            Join our network of NGO partners to expand your impact in fighting hunger
            while leveraging our technology platform and community resources.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={scrollToApplication}
              className="btn-primary animate-fade-in" 
              style={{ animationDelay: '0.2s' }}
            >
              Apply for Partnership
            </button>
            <Link to="/login" className="btn-outline animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Partner Login
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
              Partnership <span className="text-bumblebee-yellow">Benefits</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Amplify your impact and streamline your operations through our comprehensive platform
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

      {/* Services We Provide */}
      <section className="py-20 bg-bumblebee-cream">
        <div className="container mx-auto px-4">
          <div 
            ref={servicesRef}
            className={`text-center mb-16 transition-all duration-700 ${
              servicesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              What We <span className="text-bumblebee-yellow">Provide</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive tools and resources to enhance your organization's capabilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={service.title}
                className={`glass-card card-hover transition-all duration-700 ${
                  servicesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <h3 className="text-xl font-playfair font-bold mb-4 text-bumblebee-black">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div 
            ref={requirementsRef}
            className={`text-center mb-16 transition-all duration-700 ${
              requirementsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              Partnership <span className="text-bumblebee-yellow">Requirements</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We partner with organizations that share our mission and values
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {requirements.map((requirement, index) => (
              <Card 
                key={requirement.title}
                className={`glass-card card-hover transition-all duration-700 ${
                  requirementsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <requirement.icon className="w-12 h-12 text-bumblebee-yellow mx-auto mb-4" />
                  <h3 className="text-xl font-playfair font-bold mb-3">{requirement.title}</h3>
                  <p className="text-gray-600">{requirement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-bumblebee-cream">
        <div className="container mx-auto px-4">
          <div 
            ref={processRef}
            className={`text-center mb-16 transition-all duration-700 ${
              processInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              Partnership <span className="text-bumblebee-yellow">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple steps to join our network of changemaking organizations
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
              Partnership <span className="text-bumblebee-yellow">Application</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our network of partner organizations working to end hunger
            </p>
          </div>

          <div 
            className={`max-w-4xl mx-auto transition-all duration-700 ${
              applicationInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <NGOApplicationForm />
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
              Ready to <span className="text-bumblebee-yellow">Expand</span> Your Impact?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
              Join our alliance of NGOs working together to create a hunger-free world.
              Together, we can achieve more than any organization can alone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={scrollToApplication}
                className="btn-primary"
              >
                Submit Partnership Application
              </button>
              <Link to="/login" className="btn-outline border-white text-white hover:bg-white hover:text-bumblebee-black">
                Partner Portal Login
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NGOs;

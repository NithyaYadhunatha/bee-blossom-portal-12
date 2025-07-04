
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock, Heart, History, Phone } from 'lucide-react';

const DonorDashboard = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);
  
  const headerInView = useIntersectionObserver({
    ref: headerRef,
    triggerOnce: true,
  });

  const actionsInView = useIntersectionObserver({
    ref: actionsRef,
    triggerOnce: true,
  });

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1556909114-4e4b4e5a3e7c?q=80&w=2070&auto=format&fit=crop')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Top-to-bottom gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>
          {/* Additional overlays for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bumblebee-black/70 to-bumblebee-black"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-bumblebee-black/20 via-transparent to-bumblebee-black/30 opacity-80"></div>
          <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-bumblebee-yellow/10 to-transparent opacity-50"></div>
          <div className="absolute inset-0 honeycomb-bg opacity-10"></div>
        </div>
        
        <div 
          ref={headerRef}
          className={`container mx-auto px-4 py-16 z-10 text-center transition-all duration-700 transform ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-4 leading-tight">
            Thank you for <span className="text-bumblebee-yellow">feeding hope</span> today!
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto font-light">
            Your generosity creates a ripple effect of kindness in our community
          </p>
        </div>
      </section>

      {/* Dashboard Actions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div 
            ref={actionsRef}
            className={`transition-all duration-700 ${
              actionsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Donate Food Card */}
              <Card className="glass-card card-hover">
                <CardContent className="p-8 text-center">
                  <Heart className="w-16 h-16 text-bumblebee-yellow mx-auto mb-6" />
                  <h3 className="text-2xl font-playfair font-bold mb-4">Donate Leftover Food</h3>
                  <p className="text-gray-600 mb-6">
                    Ready to share your surplus food? Let's get it to those who need it most.
                  </p>
                  <Link 
                    to="/provider" 
                    className="btn-primary w-full"
                  >
                    Start New Donation
                  </Link>
                </CardContent>
              </Card>

              {/* Schedule Pickup Card */}
              <Card className="glass-card card-hover">
                <CardContent className="p-8 text-center">
                  <Calendar className="w-16 h-16 text-bumblebee-gold mx-auto mb-6" />
                  <h3 className="text-2xl font-playfair font-bold mb-4">Schedule a Pickup</h3>
                  <p className="text-gray-600 mb-6">
                    Set a convenient time for our volunteers to collect your donation.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-gray-700">
                      <Clock className="w-5 h-5" />
                      <span>Next Available: Today 2:00 PM</span>
                    </div>
                    <button className="btn-secondary w-full">
                      Schedule Pickup
                    </button>
                  </div>
                </CardContent>
              </Card>

              {/* Past Donations Card */}
              <Card className="glass-card card-hover">
                <CardContent className="p-8 text-center">
                  <History className="w-16 h-16 text-bumblebee-orange mx-auto mb-6" />
                  <h3 className="text-2xl font-playfair font-bold mb-4">View Past Donations</h3>
                  <p className="text-gray-600 mb-6">
                    Track your impact and see how your donations have helped the community.
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="text-sm text-gray-600">This Month:</div>
                    <div className="text-2xl font-bold text-bumblebee-gold">12 Donations</div>
                    <div className="text-sm text-gray-600">~240 meals provided</div>
                  </div>
                  <button className="btn-outline w-full">
                    View History
                  </button>
                </CardContent>
              </Card>
            </div>

            {/* Support Section */}
            <div className="mt-16 max-w-2xl mx-auto">
              <Card className="glass-card">
                <CardContent className="p-8 text-center">
                  <Phone className="w-12 h-12 text-bumblebee-yellow mx-auto mb-4" />
                  <h3 className="text-xl font-playfair font-bold mb-3">Need Help?</h3>
                  <p className="text-gray-600 mb-4">
                    Our support team is here to help you make the most impact with your donations.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="btn-outline">
                      Contact Support
                    </button>
                    <button className="btn-outline">
                      Donation Guide
                    </button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DonorDashboard;

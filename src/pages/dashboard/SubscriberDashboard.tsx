
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock, Phone, History } from 'lucide-react';

const SubscriberDashboard = () => {
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

  const mockRequests = [
    {
      id: 1,
      date: "2024-01-15",
      status: "Delivered",
      meals: 2,
      location: "Downtown Center"
    },
    {
      id: 2,
      date: "2024-01-12",
      status: "In Progress",
      meals: 3,
      location: "Community Kitchen"
    },
    {
      id: 3,
      date: "2024-01-08",
      status: "Delivered",
      meals: 1,
      location: "Food Bank"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
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
            Hi there, how can we <span className="text-bumblebee-yellow">help you today?</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto font-light">
            Access your meal requests and track your food assistance
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
              {/* Request Meal Card */}
              <Card className="glass-card card-hover">
                <CardContent className="p-8 text-center">
                  <Calendar className="w-16 h-16 text-bumblebee-yellow mx-auto mb-6" />
                  <h3 className="text-2xl font-playfair font-bold mb-4">Request a Meal</h3>
                  <p className="text-gray-600 mb-6">
                    Need food assistance? Submit a new request for meals or groceries.
                  </p>
                  <Link 
                    to="/receiver" 
                    className="btn-primary w-full"
                  >
                    Request a Meal
                  </Link>
                </CardContent>
              </Card>

              {/* Delivery Status Card */}
              <Card className="glass-card card-hover">
                <CardContent className="p-8 text-center">
                  <Clock className="w-16 h-16 text-bumblebee-gold mx-auto mb-6" />
                  <h3 className="text-2xl font-playfair font-bold mb-4">Current Delivery Status</h3>
                  <p className="text-gray-600 mb-6">
                    Track your current food request and estimated delivery time.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Status:</span>
                      <span className="font-bold text-green-600">Food on the way</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">ETA:</span>
                      <span className="font-bold text-bumblebee-gold">30 minutes</span>
                    </div>
                  </div>
                  <button className="btn-outline w-full">
                    Track Delivery
                  </button>
                </CardContent>
              </Card>
            </div>

            {/* My Requests Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-playfair font-bold text-center mb-8">
                My <span className="text-bumblebee-yellow">Request History</span>
              </h2>
              
              <div className="max-w-4xl mx-auto">
                <Card className="glass-card">
                  <CardContent className="p-6">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-3 px-4 font-bold">Date</th>
                            <th className="text-left py-3 px-4 font-bold">Status</th>
                            <th className="text-left py-3 px-4 font-bold">Meals</th>
                            <th className="text-left py-3 px-4 font-bold">Location</th>
                          </tr>
                        </thead>
                        <tbody>
                          {mockRequests.map((request) => (
                            <tr key={request.id} className="border-b hover:bg-gray-50">
                              <td className="py-3 px-4">{request.date}</td>
                              <td className="py-3 px-4">
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                  request.status === 'Delivered' 
                                    ? 'bg-green-100 text-green-800' 
                                    : 'bg-yellow-100 text-yellow-800'
                                }`}>
                                  {request.status}
                                </span>
                              </td>
                              <td className="py-3 px-4">{request.meals}</td>
                              <td className="py-3 px-4">{request.location}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Support Section */}
            <div className="max-w-2xl mx-auto">
              <Card className="glass-card">
                <CardContent className="p-8 text-center">
                  <Phone className="w-12 h-12 text-bumblebee-yellow mx-auto mb-4" />
                  <h3 className="text-xl font-playfair font-bold mb-3">Need Urgent Help?</h3>
                  <p className="text-gray-600 mb-4">
                    Our volunteer helpline is available 24/7 for emergency food assistance.
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="text-lg font-bold text-bumblebee-gold">1-800-FOOD-HELP</div>
                    <div className="text-sm text-gray-600">Available 24/7</div>
                  </div>
                  <button className="btn-outline">
                    Contact Support
                  </button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SubscriberDashboard;

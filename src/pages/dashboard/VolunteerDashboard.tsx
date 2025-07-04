
import { useRef, useState } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Clock, CheckCircle, Truck, Heart, History } from 'lucide-react';

const VolunteerDashboard = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);
  const [isAvailable, setIsAvailable] = useState(false);
  
  const headerInView = useIntersectionObserver({
    ref: headerRef,
    triggerOnce: true,
  });

  const actionsInView = useIntersectionObserver({
    ref: actionsRef,
    triggerOnce: true,
  });

  const mockPickups = [
    {
      id: 1,
      restaurant: "Bella Italia Restaurant",
      address: "123 Main St, Downtown",
      time: "2:30 PM",
      distance: "0.8 miles",
      items: "Pasta, Bread, Salad"
    },
    {
      id: 2,
      restaurant: "Green Garden Cafe",
      address: "456 Oak Ave, Midtown",
      time: "4:00 PM",
      distance: "1.2 miles",
      items: "Sandwiches, Soup, Fruit"
    },
    {
      id: 3,
      restaurant: "Corner Bakery",
      address: "789 Pine St, Uptown",
      time: "5:15 PM",
      distance: "2.1 miles",
      items: "Pastries, Bread, Coffee"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=2073&auto=format&fit=crop')`,
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
            Let's <span className="text-bumblebee-yellow">rescue some food</span> today!
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto font-light">
            Your dedication makes the connection between surplus and need possible
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
            {/* Availability Toggle */}
            <div className="max-w-md mx-auto mb-12">
              <Card className="glass-card">
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center gap-4">
                    <span className="font-medium">Currently:</span>
                    <button
                      onClick={() => setIsAvailable(!isAvailable)}
                      className={`px-6 py-2 rounded-full font-bold transition-all duration-300 ${
                        isAvailable 
                          ? 'bg-green-500 text-white' 
                          : 'bg-gray-300 text-gray-700 hover:bg-bumblebee-yellow hover:text-bumblebee-black'
                      }`}
                    >
                      {isAvailable ? 'Available' : 'Unavailable'}
                    </button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Pickup Requests */}
            <div className="mb-12">
              <h2 className="text-3xl font-playfair font-bold text-center mb-8">
                Pickup Requests <span className="text-bumblebee-yellow">Near You</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockPickups.map((pickup) => (
                  <Card key={pickup.id} className="glass-card card-hover">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="font-bold text-lg mb-1">{pickup.restaurant}</h3>
                          <div className="flex items-center text-gray-600 text-sm mb-2">
                            <MapPin className="w-4 h-4 mr-1" />
                            {pickup.address}
                          </div>
                          <div className="flex items-center text-gray-600 text-sm">
                            <Clock className="w-4 h-4 mr-1" />
                            {pickup.time} • {pickup.distance}
                          </div>
                        </div>
                      </div>
                      <div className="mb-4">
                        <p className="text-sm text-gray-600 mb-2">Items available:</p>
                        <p className="text-sm font-medium">{pickup.items}</p>
                      </div>
                      <button className="btn-primary w-full">
                        Accept Pickup
                      </button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Action Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Current Tasks */}
              <Card className="glass-card card-hover">
                <CardContent className="p-8 text-center">
                  <Truck className="w-16 h-16 text-bumblebee-yellow mx-auto mb-6" />
                  <h3 className="text-2xl font-playfair font-bold mb-4">Current Delivery Tasks</h3>
                  <p className="text-gray-600 mb-6">
                    View and manage your active pickup and delivery assignments.
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Active Tasks:</span>
                      <span className="font-bold text-bumblebee-gold">2</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Completed Today:</span>
                      <span className="font-bold text-green-600">5</span>
                    </div>
                  </div>
                  <button className="btn-secondary w-full">
                    View All Tasks
                  </button>
                </CardContent>
              </Card>

              {/* Delivery History */}
              <Card className="glass-card card-hover">
                <CardContent className="p-8 text-center">
                  <History className="w-16 h-16 text-bumblebee-orange mx-auto mb-6" />
                  <h3 className="text-2xl font-playfair font-bold mb-4">Delivery History</h3>
                  <p className="text-gray-600 mb-6">
                    Track your volunteer impact and see the difference you've made.
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="text-sm text-gray-600">This Month:</div>
                    <div className="text-2xl font-bold text-bumblebee-gold">47 Deliveries</div>
                    <div className="text-sm text-gray-600">~940 meals delivered</div>
                  </div>
                  <button className="btn-outline w-full">
                    View History
                  </button>
                </CardContent>
              </Card>
            </div>

            {/* Achievement Section */}
            <div className="mt-16 max-w-2xl mx-auto">
              <Card className="glass-card">
                <CardContent className="p-8 text-center">
                  <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-playfair font-bold mb-3">Volunteer Impact</h3>
                  <p className="text-gray-600 mb-4">
                    Thank you for being a food rescue hero! Your efforts have made a real difference.
                  </p>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-bumblebee-gold">127</div>
                      <div className="text-sm text-gray-600">Total Pickups</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-bumblebee-gold">2,540</div>
                      <div className="text-sm text-gray-600">Meals Delivered</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-bumblebee-gold">85%</div>
                      <div className="text-sm text-gray-600">Success Rate</div>
                    </div>
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

export default VolunteerDashboard;

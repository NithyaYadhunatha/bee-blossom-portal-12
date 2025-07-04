
import { useRef } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { Building, MapPin, Users, Phone } from 'lucide-react';

const NGODashboard = () => {
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

  const mockContributions = [
    { id: 1, date: "2024-01-15", type: "Food Distribution", quantity: "200 meals", location: "Downtown Center" },
    { id: 2, date: "2024-01-12", type: "Grocery Package", quantity: "50 packages", location: "Community Kitchen" },
    { id: 3, date: "2024-01-08", type: "Emergency Relief", quantity: "100 meals", location: "Shelter Home" }
  ];

  const mockPickupRequests = [
    { id: 1, restaurant: "Italian Bistro", location: "Main St", quantity: "15 meals", time: "3:00 PM" },
    { id: 2, restaurant: "Corner Cafe", location: "Oak Ave", quantity: "8 meals", time: "4:30 PM" },
    { id: 3, restaurant: "Green Garden", location: "Pine St", quantity: "12 meals", time: "5:15 PM" }
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
            Welcome, <span className="text-bumblebee-yellow">Community Partners</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto font-light">
            Manage your organization's food distribution efforts and volunteer coordination
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
            {/* Contributions Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-playfair font-bold text-center mb-8">
                Your <span className="text-bumblebee-yellow">Contributions</span>
              </h2>
              
              <div className="max-w-6xl mx-auto">
                <Card className="glass-card">
                  <CardContent className="p-6">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-3 px-4 font-bold">Date</th>
                            <th className="text-left py-3 px-4 font-bold">Type</th>
                            <th className="text-left py-3 px-4 font-bold">Quantity</th>
                            <th className="text-left py-3 px-4 font-bold">Location</th>
                          </tr>
                        </thead>
                        <tbody>
                          {mockContributions.map((contribution) => (
                            <tr key={contribution.id} className="border-b hover:bg-gray-50">
                              <td className="py-3 px-4">{contribution.date}</td>
                              <td className="py-3 px-4">{contribution.type}</td>
                              <td className="py-3 px-4 font-medium text-bumblebee-gold">{contribution.quantity}</td>
                              <td className="py-3 px-4">{contribution.location}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Pickup Requests Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-playfair font-bold text-center mb-8">
                Nearby <span className="text-bumblebee-yellow">Pickup Requests</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {mockPickupRequests.map((request) => (
                  <Card key={request.id} className="glass-card card-hover">
                    <CardContent className="p-6">
                      <div className="mb-4">
                        <h3 className="font-bold text-lg mb-2">{request.restaurant}</h3>
                        <div className="flex items-center text-gray-600 text-sm mb-2">
                          <MapPin className="w-4 h-4 mr-1" />
                          {request.location}
                        </div>
                        <div className="text-sm text-gray-600 mb-2">
                          Quantity: <span className="font-medium text-bumblebee-gold">{request.quantity}</span>
                        </div>
                        <div className="text-sm text-gray-600">
                          Time: <span className="font-medium">{request.time}</span>
                        </div>
                      </div>
                      <button className="btn-primary w-full">
                        Assign Volunteer
                      </button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Update Availability & Contact */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Update Availability Form */}
              <Card className="glass-card">
                <CardContent className="p-8">
                  <Building className="w-12 h-12 text-bumblebee-yellow mb-4" />
                  <h3 className="text-xl font-playfair font-bold mb-4">Update Availability</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Contact Person</label>
                      <input 
                        type="text" 
                        placeholder="Enter contact name"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bumblebee-yellow focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Available Time</label>
                      <input 
                        type="text" 
                        placeholder="e.g., 9 AM - 6 PM"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bumblebee-yellow focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Service Area</label>
                      <input 
                        type="text" 
                        placeholder="Enter service areas"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bumblebee-yellow focus:border-transparent"
                      />
                    </div>
                    <button className="btn-primary w-full">
                      Update Information
                    </button>
                  </div>
                </CardContent>
              </Card>

              {/* Volunteer Coordination */}
              <Card className="glass-card">
                <CardContent className="p-8">
                  <Users className="w-12 h-12 text-bumblebee-gold mb-4" />
                  <h3 className="text-xl font-playfair font-bold mb-4">Volunteer Coordination</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="font-medium">Active Volunteers</span>
                      <span className="text-bumblebee-gold font-bold">12</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="font-medium">Pending Assignments</span>
                      <span className="text-bumblebee-gold font-bold">3</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="font-medium">Completed Today</span>
                      <span className="text-green-600 font-bold">8</span>
                    </div>
                    <div className="pt-4">
                      <div className="flex items-center gap-2 text-gray-600 mb-2">
                        <Phone className="w-4 h-4" />
                        <span className="text-sm">Coordination Hotline:</span>
                      </div>
                      <div className="text-lg font-bold text-bumblebee-gold">1-800-VOLUNTEER</div>
                    </div>
                    <button className="btn-outline w-full">
                      Contact Volunteers
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

export default NGODashboard;

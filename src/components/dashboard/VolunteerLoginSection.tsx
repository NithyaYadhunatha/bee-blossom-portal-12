
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Clock, Truck, AlertCircle } from 'lucide-react';

const VolunteerLoginSection = () => {
  const [isAvailable, setIsAvailable] = useState(false);

  const pickupRequests = [
    {
      id: 1,
      restaurant: 'Bella Vista Restaurant',
      address: '123 Main St, Downtown',
      meals: '30 servings',
      time: '2:30 PM - 3:00 PM',
      distance: '1.2 miles'
    },
    {
      id: 2,
      restaurant: 'Corner Bakery',
      address: '456 Oak Ave, Midtown',
      meals: '15 pastries',
      time: '4:00 PM - 4:30 PM',
      distance: '2.1 miles'
    },
    {
      id: 3,
      restaurant: 'Garden Fresh Cafe',
      address: '789 Pine Rd, Uptown',
      meals: '20 servings',
      time: '5:00 PM - 5:30 PM',
      distance: '0.8 miles'
    }
  ];

  const myDeliveries = [
    {
      id: 1,
      from: 'Sunrise Deli',
      to: 'Community Center',
      status: 'In Progress',
      time: '1:00 PM'
    },
    {
      id: 2,
      from: 'Pizza Palace',
      to: 'Hope Shelter',
      status: 'Completed',
      time: '11:30 AM'
    }
  ];

  const handleAcceptPickup = (requestId: number) => {
    alert(`Pickup request #${requestId} accepted! You'll receive pickup details shortly.`);
  };

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Welcome Banner */}
        <div className="mb-12 text-center">
          <div className="bg-gradient-to-r from-bumblebee-yellow to-bumblebee-gold rounded-xl p-8 text-white shadow-lg">
            <h2 className="text-3xl font-playfair font-bold mb-2">Welcome, Volunteer Hero! 🚚</h2>
            <p className="text-lg opacity-90">Ready for your next food rescue mission?</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Availability Toggle */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-bumblebee-black">
                <span>⚡</span>
                Availability Status
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center ${
                  isAvailable ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'
                }`}>
                  <Truck size={24} />
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  {isAvailable ? 'You are available for pickups' : 'Mark yourself available'}
                </p>
                <Button 
                  onClick={() => setIsAvailable(!isAvailable)}
                  className={`w-full font-semibold ${
                    isAvailable 
                      ? 'bg-red-500 hover:bg-red-600 text-white' 
                      : 'bg-bumblebee-yellow hover:bg-bumblebee-gold text-bumblebee-black'
                  }`}
                >
                  {isAvailable ? 'Mark Unavailable' : 'Mark Available Today'}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Quick Contact */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-bumblebee-black">
                <AlertCircle className="w-5 h-5" />
                Need Help?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-4">
                  Report issues or contact our NGO coordinator
                </p>
                <div className="space-y-2">
                  <Button 
                    variant="outline" 
                    className="w-full border-bumblebee-yellow text-bumblebee-black hover:bg-bumblebee-yellow"
                  >
                    Report Issue
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full border-bumblebee-yellow text-bumblebee-black hover:bg-bumblebee-yellow"
                  >
                    Contact Coordinator
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* My Stats */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-bumblebee-black">
                <span>📈</span>
                Your Impact
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-center">
                <div>
                  <p className="text-2xl font-bold text-bumblebee-gold">47</p>
                  <p className="text-sm text-gray-600">Meals Rescued</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-bumblebee-gold">12</p>
                  <p className="text-sm text-gray-600">Deliveries This Month</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-bumblebee-gold">4.9</p>
                  <p className="text-sm text-gray-600">Rating ⭐</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Pickup Requests */}
        <Card className="glass-card mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-bumblebee-black">
              <MapPin className="w-5 h-5" />
              Pickup Requests Near You
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {pickupRequests.map((request) => (
                <div key={request.id} className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-bumblebee-black">{request.restaurant}</h4>
                      <p className="text-sm text-gray-600 flex items-center gap-1">
                        <MapPin size={14} />
                        {request.address} • {request.distance}
                      </p>
                      <p className="text-sm text-gray-600 flex items-center gap-1">
                        <Clock size={14} />
                        {request.time} • {request.meals}
                      </p>
                    </div>
                    <Button 
                      onClick={() => handleAcceptPickup(request.id)}
                      className="bg-bumblebee-yellow hover:bg-bumblebee-gold text-bumblebee-black font-semibold"
                    >
                      Accept Pickup
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* My Deliveries */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-bumblebee-black">
              <Truck className="w-5 h-5" />
              My Deliveries
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {myDeliveries.map((delivery) => (
                <div key={delivery.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div>
                    <p className="font-semibold text-bumblebee-black">
                      {delivery.from} → {delivery.to}
                    </p>
                    <p className="text-sm text-gray-600">{delivery.time}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    delivery.status === 'Completed' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {delivery.status}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default VolunteerLoginSection;

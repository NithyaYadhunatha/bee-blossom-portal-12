
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, Phone, ChevronDown, ChevronUp } from 'lucide-react';

const DonorLoginSection = () => {
  const [showHistory, setShowHistory] = useState(false);
  const [isAvailable, setIsAvailable] = useState(false);

  const pastDonations = [
    { id: 1, date: '2024-07-01', items: 'Fresh sandwiches & salads', quantity: '25 servings', status: 'Delivered' },
    { id: 2, date: '2024-06-28', items: 'Cooked rice & curry', quantity: '40 servings', status: 'Delivered' },
    { id: 3, date: '2024-06-25', items: 'Bread & pastries', quantity: '15 items', status: 'Delivered' }
  ];

  const scrollToForm = () => {
    const formElement = document.querySelector('form');
    formElement?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSchedulePickup = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Pickup scheduled successfully! You will receive a confirmation email shortly.');
  };

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Welcome Banner */}
        <div className="mb-12 text-center">
          <div className="bg-gradient-to-r from-bumblebee-yellow to-bumblebee-gold rounded-xl p-8 text-white shadow-lg">
            <h2 className="text-3xl font-playfair font-bold mb-2">Welcome back, Restaurant Partner! 🍽️</h2>
            <p className="text-lg opacity-90">Thank you for feeding hope in our community</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Quick Actions */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-bumblebee-black">
                <span>🚀</span>
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button 
                onClick={scrollToForm}
                className="w-full bg-bumblebee-yellow hover:bg-bumblebee-gold text-bumblebee-black font-semibold"
              >
                Quick Donate Food
              </Button>
              <div className="text-center text-sm text-gray-600">
                Need help with pickup? Contact our volunteers at{' '}
                <span className="font-semibold text-bumblebee-gold">+1 (555) 123-4567</span>
              </div>
            </CardContent>
          </Card>

          {/* Schedule Pickup */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-bumblebee-black">
                <Calendar className="w-5 h-5" />
                Schedule Pickup
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSchedulePickup} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <input
                      type="date"
                      className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-bumblebee-yellow"
                      required
                    />
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                  </div>
                  <div className="relative">
                    <input
                      type="time"
                      className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-bumblebee-yellow"
                      required
                    />
                    <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                  </div>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Pickup address"
                    className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-bumblebee-yellow"
                    required
                  />
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                </div>
                <div className="relative">
                  <input
                    type="tel"
                    placeholder="Contact number"
                    className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-bumblebee-yellow"
                    required
                  />
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-bumblebee-yellow hover:bg-bumblebee-gold text-bumblebee-black font-semibold"
                >
                  Schedule Pickup
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Donation History */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle 
              className="flex items-center justify-between cursor-pointer text-bumblebee-black"
              onClick={() => setShowHistory(!showHistory)}
            >
              <span className="flex items-center gap-2">
                <span>📊</span>
                Donation History
              </span>
              {showHistory ? <ChevronUp /> : <ChevronDown />}
            </CardTitle>
          </CardHeader>
          {showHistory && (
            <CardContent>
              <div className="space-y-4">
                {pastDonations.map((donation) => (
                  <div key={donation.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div>
                      <p className="font-semibold text-bumblebee-black">{donation.items}</p>
                      <p className="text-sm text-gray-600">{donation.quantity} • {donation.date}</p>
                    </div>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                      {donation.status}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          )}
        </Card>
      </div>
    </div>
  );
};

export default DonorLoginSection;

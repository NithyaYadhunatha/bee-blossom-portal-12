
import { Card, CardContent } from '@/components/ui/card';
import { Clock, MapPin, Phone } from 'lucide-react';

const SubscriberLoginSection = () => {
  const previousRequests = [
    { id: 1, date: '2024-01-15', status: 'Delivered', meals: 3 },
    { id: 2, date: '2024-01-10', status: 'In Progress', meals: 2 },
    { id: 3, date: '2024-01-05', status: 'Delivered', meals: 4 }
  ];

  const scrollToForm = () => {
    const formElement = document.querySelector('form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Welcome Message */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-playfair font-bold mb-4">
            Welcome back, <span className="text-bumblebee-yellow">User</span>
          </h2>
          <button 
            onClick={scrollToForm}
            className="btn-primary"
          >
            Request a Meal
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Previous Requests */}
          <Card className="glass-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-playfair font-bold mb-6 text-bumblebee-black">
                My Previous Requests
              </h3>
              <div className="space-y-4">
                {previousRequests.map((request) => (
                  <div key={request.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium">{request.date}</p>
                      <p className="text-sm text-gray-600">{request.meals} meals</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      request.status === 'Delivered' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {request.status}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Delivery Status */}
          <Card className="glass-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-playfair font-bold mb-6 text-bumblebee-black">
                Current Delivery Status
              </h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
                  <Clock className="text-blue-600" size={24} />
                  <div>
                    <p className="font-medium">Status: In Progress</p>
                    <p className="text-sm text-gray-600">Estimated delivery: 2:30 PM</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg">
                  <MapPin className="text-green-600" size={24} />
                  <div>
                    <p className="font-medium">Pickup Location</p>
                    <p className="text-sm text-gray-600">Downtown Community Kitchen</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Support Card */}
        <div className="mt-12">
          <Card className="glass-card max-w-2xl mx-auto">
            <CardContent className="p-8 text-center">
              <Phone className="w-12 h-12 text-bumblebee-yellow mx-auto mb-4" />
              <h3 className="text-xl font-playfair font-bold mb-4">Need urgent help?</h3>
              <p className="text-gray-600 mb-4">
                Contact our emergency helpline for immediate assistance
              </p>
              <p className="text-2xl font-bold text-bumblebee-black">
                +91 8899-AAHARA
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SubscriberLoginSection;

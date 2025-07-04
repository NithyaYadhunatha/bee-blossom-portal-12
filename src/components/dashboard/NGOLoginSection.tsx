
import { Card, CardContent } from '@/components/ui/card';
import { Users, MapPin, Clock, Contact } from 'lucide-react';

const NGOLoginSection = () => {
  const contributions = [
    { date: '2024-01-15', type: 'Meal Distribution', quantity: '50 meals', location: 'Community Center A' },
    { date: '2024-01-12', type: 'Food Rescue', quantity: '30 meals', location: 'Local Restaurant' },
    { date: '2024-01-10', type: 'Emergency Relief', quantity: '75 meals', location: 'Shelter Home' }
  ];

  const pickupRequests = [
    { id: 1, location: 'Hotel ABC, Downtown', quantity: '40 meals', time: '2:00 PM', priority: 'High' },
    { id: 2, location: 'Restaurant XYZ, Mall Road', quantity: '25 meals', time: '3:30 PM', priority: 'Medium' },
    { id: 3, location: 'Catering Service, Business District', quantity: '60 meals', time: '4:00 PM', priority: 'High' }
  ];

  const volunteers = [
    { name: 'John Doe', contact: '+91 98765-43210', area: 'North Zone', status: 'Available' },
    { name: 'Jane Smith', contact: '+91 87654-32109', area: 'South Zone', status: 'On Delivery' },
    { name: 'Mike Johnson', contact: '+91 76543-21098', area: 'East Zone', status: 'Available' }
  ];

  return (
    <div className="py-16 bg-bumblebee-cream">
      <div className="container mx-auto px-4">
        {/* Welcome Message */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-playfair font-bold mb-4">
            Welcome, <span className="text-bumblebee-yellow">Hope Foundation</span>
          </h2>
        </div>

        {/* Contributions Summary */}
        <div className="mb-12">
          <Card className="glass-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-playfair font-bold mb-6 text-bumblebee-black">
                Recent Contributions
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 font-medium">Date</th>
                      <th className="text-left py-3 font-medium">Type</th>
                      <th className="text-left py-3 font-medium">Quantity</th>
                      <th className="text-left py-3 font-medium">Location</th>
                    </tr>
                  </thead>
                  <tbody>
                    {contributions.map((contribution, index) => (
                      <tr key={index} className="border-b border-gray-100">
                        <td className="py-3">{contribution.date}</td>
                        <td className="py-3">{contribution.type}</td>
                        <td className="py-3">{contribution.quantity}</td>
                        <td className="py-3">{contribution.location}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Nearby Pickup Requests */}
        <div className="mb-12">
          <Card className="glass-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-playfair font-bold mb-6 text-bumblebee-black">
                Nearby Pickup Requests
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {pickupRequests.map((request) => (
                  <div key={request.id} className="p-6 bg-white rounded-lg shadow-sm border">
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className="text-bumblebee-yellow" size={20} />
                      <h4 className="font-medium">{request.location}</h4>
                    </div>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2">
                        <Users size={16} className="text-gray-500" />
                        <span className="text-sm">{request.quantity}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={16} className="text-gray-500" />
                        <span className="text-sm">{request.time}</span>
                      </div>
                      <span className={`inline-block px-2 py-1 rounded-full text-xs ${
                        request.priority === 'High' 
                          ? 'bg-red-100 text-red-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {request.priority} Priority
                      </span>
                    </div>
                    <button className="w-full bg-bumblebee-yellow text-bumblebee-black py-2 px-4 rounded-lg hover:shadow-lg transition-all duration-300">
                      Assign Volunteer
                    </button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Update NGO Availability */}
          <Card className="glass-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-playfair font-bold mb-6 text-bumblebee-black">
                Update Availability
              </h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Contact Person</label>
                  <input
                    type="text"
                    placeholder="Enter contact person name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-bumblebee-yellow"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="Enter phone number"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-bumblebee-yellow"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Available Time</label>
                  <input
                    type="text"
                    placeholder="e.g., 9 AM - 6 PM"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-bumblebee-yellow"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Service Area</label>
                  <input
                    type="text"
                    placeholder="Enter service area"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-bumblebee-yellow"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-bumblebee-yellow text-bumblebee-black font-bold rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  Update Information
                </button>
              </form>
            </CardContent>
          </Card>

          {/* Volunteer Coordination */}
          <Card className="glass-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-playfair font-bold mb-6 text-bumblebee-black">
                Volunteer Coordination
              </h3>
              <div className="space-y-4">
                {volunteers.map((volunteer, index) => (
                  <div key={index} className="p-4 bg-white rounded-lg shadow-sm border">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">{volunteer.name}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        volunteer.status === 'Available' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {volunteer.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Contact size={14} />
                        <span>{volunteer.contact}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        <span>{volunteer.area}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default NGOLoginSection;

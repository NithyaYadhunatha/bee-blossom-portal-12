
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Users, User, Mail, Phone, MapPin, ArrowLeft } from 'lucide-react';

const ReceiverRegister = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    householdSize: '',
    specialRequirements: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Receiver registration:', formData);
    // Redirect to receiver dashboard
    window.location.href = '/receiver';
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-bumblebee-cream to-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <Users className="w-16 h-16 text-bumblebee-yellow mx-auto mb-4" />
          <h1 className="text-3xl font-playfair font-bold text-bumblebee-black mb-2">
            Meal Subscriber Registration
          </h1>
          <p className="text-gray-600">Register to receive meal assistance and food support</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="glass-card">
            <CardContent className="p-8">
              <h2 className="text-2xl font-playfair font-bold mb-6 text-center">Registration Form</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    <User className="inline w-4 h-4 mr-2" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    placeholder="Your full name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-bumblebee-yellow"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      <Mail className="inline w-4 h-4 mr-2" />
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-bumblebee-yellow"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                      <Phone className="inline w-4 h-4 mr-2" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      placeholder="Your contact number"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-bumblebee-yellow"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="address" className="block text-gray-700 font-medium mb-2">
                    <MapPin className="inline w-4 h-4 mr-2" />
                    Address
                  </label>
                  <textarea
                    id="address"
                    value={formData.address}
                    onChange={(e) => handleChange('address', e.target.value)}
                    rows={2}
                    placeholder="Your full address"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-bumblebee-yellow"
                    required
                  ></textarea>
                </div>

                <div>
                  <label htmlFor="householdSize" className="block text-gray-700 font-medium mb-2">
                    Household Size
                  </label>
                  <select
                    id="householdSize"
                    value={formData.householdSize}
                    onChange={(e) => handleChange('householdSize', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-bumblebee-yellow"
                    required
                  >
                    <option value="">Select household size</option>
                    <option value="1">1 person</option>
                    <option value="2-3">2-3 people</option>
                    <option value="4-5">4-5 people</option>
                    <option value="6+">6+ people</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="specialRequirements" className="block text-gray-700 font-medium mb-2">
                    Special Dietary Requirements (Optional)
                  </label>
                  <textarea
                    id="specialRequirements"
                    value={formData.specialRequirements}
                    onChange={(e) => handleChange('specialRequirements', e.target.value)}
                    rows={3}
                    placeholder="Any allergies, dietary restrictions, or special needs..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-bumblebee-yellow"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-bumblebee-yellow text-bumblebee-black font-bold rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                >
                  Register for Meal Assistance
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-gray-600">
                  Already registered?{' '}
                  <Link to="/auth/receiver/login" className="text-bumblebee-yellow font-semibold hover:underline">
                    Login here
                  </Link>
                </p>
              </div>

              <div className="mt-6 text-center">
                <Link to="/" className="text-gray-500 hover:text-bumblebee-black flex items-center justify-center">
                  <ArrowLeft className="mr-2 w-4 h-4" />
                  Back to Home
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ReceiverRegister;

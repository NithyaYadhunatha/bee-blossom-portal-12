
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, User, Mail, Phone, ArrowLeft } from 'lucide-react';

const AdminRegister = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    justification: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Admin registration request:', formData);
    setFormSubmitted(true);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (formSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-bumblebee-black to-gray-900 flex items-center justify-center p-4">
        <Card className="bg-white/95 backdrop-blur-sm max-w-md w-full">
          <CardContent className="p-12 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-10 w-10 text-green-600" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-playfair font-bold mb-3 text-bumblebee-black">
              Access Request Submitted!
            </h3>
            <p className="text-gray-600 mb-6">
              Your admin access request has been submitted for review. You'll receive an email within 24-48 hours.
            </p>
            <Link to="/" className="text-bumblebee-yellow hover:underline">
              Return to Home
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-bumblebee-black to-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <Shield className="w-16 h-16 text-bumblebee-yellow mx-auto mb-4" />
          <h1 className="text-3xl font-playfair font-bold text-white mb-2">
            Admin Access Request
          </h1>
          <p className="text-gray-300">Request administrative access to the Aahara platform</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="bg-white/95 backdrop-blur-sm">
            <CardContent className="p-8">
              <h2 className="text-2xl font-playfair font-bold mb-6 text-center">Access Request Form</h2>
              
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
                  <label htmlFor="role" className="block text-gray-700 font-medium mb-2">
                    Requested Admin Role
                  </label>
                  <select
                    id="role"
                    value={formData.role}
                    onChange={(e) => handleChange('role', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-bumblebee-yellow"
                    required
                  >
                    <option value="">Select admin role</option>
                    <option value="super-admin">Super Administrator</option>
                    <option value="operations">Operations Manager</option>
                    <option value="volunteer-coordinator">Volunteer Coordinator</option>
                    <option value="ngo-liaison">NGO Liaison</option>
                    <option value="data-analyst">Data Analyst</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="justification" className="block text-gray-700 font-medium mb-2">
                    Justification for Admin Access
                  </label>
                  <textarea
                    id="justification"
                    value={formData.justification}
                    onChange={(e) => handleChange('justification', e.target.value)}
                    rows={4}
                    placeholder="Explain why you need admin access and your relevant experience..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-bumblebee-yellow"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-bumblebee-yellow text-bumblebee-black font-bold rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                >
                  Request Admin Access
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-gray-600">
                  Already have access?{' '}
                  <Link to="/auth/admin/login" className="text-bumblebee-yellow font-semibold hover:underline">
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

export default AdminRegister;

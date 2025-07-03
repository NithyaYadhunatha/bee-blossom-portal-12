
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Lock, Shield, ArrowRight } from 'lucide-react';

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Admin login:', formData);
    // TODO: Add admin dashboard route
    alert('Admin dashboard coming soon!');
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-bumblebee-black to-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Shield className="w-16 h-16 text-bumblebee-yellow mx-auto mb-4" />
          <h1 className="text-3xl font-playfair font-bold text-white mb-2">
            Admin Login
          </h1>
          <p className="text-gray-300">Secure access to administration panel</p>
        </div>

        <Card className="bg-white/95 backdrop-blur-sm">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  <Mail className="inline w-4 h-4 mr-2" />
                  Admin Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  placeholder="admin@aahara.org"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-bumblebee-yellow"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                  <Lock className="inline w-4 h-4 mr-2" />
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={formData.password}
                  onChange={(e) => handleChange('password', e.target.value)}
                  placeholder="Enter admin password"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-bumblebee-yellow"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-bumblebee-yellow text-bumblebee-black font-bold rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
              >
                Access Admin Panel
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Need admin access?{' '}
                <Link to="/auth/admin/register" className="text-bumblebee-yellow font-semibold hover:underline">
                  Request access
                </Link>
              </p>
            </div>

            <div className="mt-6 text-center">
              <Link to="/" className="text-gray-500 hover:text-bumblebee-black">
                ← Back to Home
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminLogin;

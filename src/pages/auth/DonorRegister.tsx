
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Building2, ArrowLeft } from 'lucide-react';

const DonorRegister = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-bumblebee-cream to-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-playfair font-bold text-bumblebee-black mb-2">
            Register as Food Donor
          </h1>
          <p className="text-gray-600">Join our community of food donors and make a difference</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="glass-card">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <Building2 className="w-16 h-16 text-bumblebee-yellow mx-auto mb-4" />
                <h2 className="text-2xl font-playfair font-bold mb-4">Donor Registration Form</h2>
                <p className="text-gray-600 mb-6">
                  Fill out the form below to register as a food donor. This form will help us understand
                  your donation capacity and connect you with recipients in your area.
                </p>
              </div>

              {/* Form would go here - placeholder for now */}
              <div className="bg-bumblebee-cream/30 rounded-lg p-8 text-center">
                <p className="text-gray-700 mb-4">
                  This will integrate with the existing donor registration form from the Provider page.
                </p>
                <div className="flex gap-4 justify-center">
                  <Link
                    to="/provider"
                    className="px-6 py-3 bg-bumblebee-yellow text-bumblebee-black font-bold rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                  >
                    Go to Full Registration Form
                  </Link>
                  <Link
                    to="/auth/donor/login"
                    className="px-6 py-3 border-2 border-bumblebee-yellow text-bumblebee-black font-bold rounded-lg hover:bg-bumblebee-yellow transition-all duration-300"
                  >
                    Already Registered? Login
                  </Link>
                </div>
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

export default DonorRegister;

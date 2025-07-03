
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Building2, Heart, Users, User, Shield, ArrowRight } from 'lucide-react';

const LoginSelector = () => {
  const loginOptions = [
    {
      title: 'Food Donor',
      description: 'Login to manage your food donations',
      icon: Building2,
      loginPath: '/auth/donor/login',
      registerPath: '/auth/donor/register',
      bgColor: 'bg-gradient-to-br from-bumblebee-yellow/20 to-bumblebee-gold/20',
      iconColor: 'text-bumblebee-gold'
    },
    {
      title: 'Volunteer',
      description: 'Access your volunteer dashboard',
      icon: Heart,
      loginPath: '/auth/volunteer/login',
      registerPath: '/auth/volunteer/register',
      bgColor: 'bg-gradient-to-br from-red-100 to-pink-100',
      iconColor: 'text-red-600'
    },
    {
      title: 'NGO Partner',
      description: 'Manage your organization partnership',
      icon: Building2,
      loginPath: '/auth/ngo/login',
      registerPath: '/auth/ngo/register',
      bgColor: 'bg-gradient-to-br from-blue-100 to-indigo-100',
      iconColor: 'text-blue-600'
    },
    {
      title: 'Meal Subscriber',
      description: 'Access your meal requests',
      icon: Users,
      loginPath: '/auth/receiver/login',
      registerPath: '/auth/receiver/register',
      bgColor: 'bg-gradient-to-br from-green-100 to-emerald-100',
      iconColor: 'text-green-600'
    },
    {
      title: 'Administrator',
      description: 'System administration access',
      icon: Shield,
      loginPath: '/auth/admin/login',
      registerPath: '/auth/admin/register',
      bgColor: 'bg-gradient-to-br from-gray-100 to-slate-100',
      iconColor: 'text-gray-700'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-bumblebee-cream to-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-playfair font-bold text-bumblebee-black mb-4">
            Welcome Back to Aahara
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose your login type to access your personalized dashboard and continue making a difference
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loginOptions.map((option) => {
            const IconComponent = option.icon;
            return (
              <Card key={option.title} className={`glass-card hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${option.bgColor}`}>
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <IconComponent className={`w-16 h-16 mx-auto ${option.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-playfair font-bold text-bumblebee-black mb-3">
                    {option.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {option.description}
                  </p>
                  <div className="space-y-3">
                    <Link
                      to={option.loginPath}
                      className="w-full py-3 bg-bumblebee-yellow text-bumblebee-black font-bold rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
                    >
                      Login
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                    <Link
                      to={option.registerPath}
                      className="w-full py-3 border-2 border-bumblebee-yellow text-bumblebee-black font-bold rounded-lg hover:bg-bumblebee-yellow/10 transition-all duration-300 flex items-center justify-center"
                    >
                      Register
                    </Link>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link to="/" className="text-gray-500 hover:text-bumblebee-black transition-colors">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginSelector;

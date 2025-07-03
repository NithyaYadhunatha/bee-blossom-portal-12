
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Calendar, Phone, Mail, User, Clock } from 'lucide-react';

const VolunteerApplicationForm = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  if (formSubmitted) {
    return (
      <Card className="glass-card">
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
            Application Submitted!
          </h3>
          <p className="text-gray-600 mb-6">
            Thank you for your interest in volunteering with us. We'll review your application and get back to you within 48 hours.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="glass-card">
      <CardContent className="p-8">
        <h3 className="text-2xl font-playfair font-bold mb-6 text-center">Volunteer Application</h3>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">
                <User className="inline w-4 h-4 mr-2" />
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="Your first name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-bumblebee-yellow"
                required
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                placeholder="Your last name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-bumblebee-yellow"
                required
              />
            </div>
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
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-bumblebee-yellow"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                <Phone className="inline w-4 h-4 mr-2" />
                Phone
              </label>
              <input
                type="tel"
                id="phone"
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
            <input
              type="text"
              id="address"
              placeholder="Your address"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-bumblebee-yellow"
              required
            />
          </div>

          {/* Volunteer Preferences */}
          <div>
            <label htmlFor="role" className="block text-gray-700 font-medium mb-2">
              Preferred Volunteer Role
            </label>
            <select
              id="role"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-bumblebee-yellow"
              required
            >
              <option value="" disabled selected>Select a role</option>
              <option value="food-collection">Food Collection Volunteer</option>
              <option value="distribution">Distribution Helper</option>
              <option value="coordinator">Community Coordinator</option>
              <option value="event">Event Volunteer</option>
            </select>
          </div>

          <div>
            <label htmlFor="availability" className="block text-gray-700 font-medium mb-2">
              <Clock className="inline w-4 h-4 mr-2" />
              Availability
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Weekday Mornings', 'Weekday Evenings', 'Weekend Mornings', 'Weekend Evenings'].map(time => (
                <label key={time} className="flex items-center">
                  <input type="checkbox" className="mr-2 w-4 h-4 text-bumblebee-yellow rounded focus:ring-bumblebee-yellow" />
                  <span className="text-sm">{time}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="experience" className="block text-gray-700 font-medium mb-2">
              Previous Volunteer Experience (Optional)
            </label>
            <textarea
              id="experience"
              rows={3}
              placeholder="Tell us about any previous volunteer experience..."
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-bumblebee-yellow"
            ></textarea>
          </div>

          <div>
            <label htmlFor="motivation" className="block text-gray-700 font-medium mb-2">
              Why do you want to volunteer with us?
            </label>
            <textarea
              id="motivation"
              rows={3}
              placeholder="Share your motivation for volunteering..."
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-bumblebee-yellow"
              required
            ></textarea>
          </div>

          <div className="flex items-center">
            <input type="checkbox" id="terms" className="w-5 h-5 text-bumblebee-yellow rounded focus:ring-bumblebee-yellow" required />
            <label htmlFor="terms" className="ml-2 text-gray-700">
              I agree to the terms and conditions and background check requirements
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-bumblebee-yellow text-bumblebee-black font-bold rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            Submit Application
          </button>
        </form>
      </CardContent>
    </Card>
  );
};

export default VolunteerApplicationForm;

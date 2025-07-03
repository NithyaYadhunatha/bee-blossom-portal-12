
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Building2, MapPin, Phone, Mail, Users, Upload, Globe } from 'lucide-react';

const NGOApplicationForm = () => {
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
            Partnership Application Submitted!
          </h3>
          <p className="text-gray-600 mb-6">
            Thank you for your interest in partnering with us. Our team will review your application and contact you within 5 business days.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="glass-card">
      <CardContent className="p-8">
        <h3 className="text-2xl font-playfair font-bold mb-6 text-center">NGO Partnership Application</h3>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Organization Information */}
          <div>
            <label htmlFor="orgName" className="block text-gray-700 font-medium mb-2">
              <Building2 className="inline w-4 h-4 mr-2" />
              Organization Name
            </label>
            <input
              type="text"
              id="orgName"
              placeholder="Your organization's name"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-bumblebee-yellow"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="regNumber" className="block text-gray-700 font-medium mb-2">
                Registration Number
              </label>
              <input
                type="text"
                id="regNumber"
                placeholder="NGO registration number"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-bumblebee-yellow"
                required
              />
            </div>
            <div>
              <label htmlFor="established" className="block text-gray-700 font-medium mb-2">
                Year Established
              </label>
              <input
                type="number"
                id="established"
                placeholder="Year your NGO was established"
                min="1900"
                max="2024"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-bumblebee-yellow"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="website" className="block text-gray-700 font-medium mb-2">
              <Globe className="inline w-4 h-4 mr-2" />
              Website (Optional)
            </label>
            <input
              type="url"
              id="website"
              placeholder="https://your-organization.org"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-bumblebee-yellow"
            />
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="contactName" className="block text-gray-700 font-medium mb-2">
                Primary Contact Name
              </label>
              <input
                type="text"
                id="contactName"
                placeholder="Contact person's name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-bumblebee-yellow"
                required
              />
            </div>
            <div>
              <label htmlFor="title" className="block text-gray-700 font-medium mb-2">
                Title/Position
              </label>
              <input
                type="text"
                id="title"
                placeholder="Their title or position"
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
                placeholder="contact@organization.org"
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
                placeholder="Organization's contact number"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-bumblebee-yellow"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="address" className="block text-gray-700 font-medium mb-2">
              <MapPin className="inline w-4 h-4 mr-2" />
              Organization Address
            </label>
            <textarea
              id="address"
              rows={2}
              placeholder="Full address of your organization"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-bumblebee-yellow"
              required
            ></textarea>
          </div>

          {/* Organization Details */}
          <div>
            <label htmlFor="beneficiaries" className="block text-gray-700 font-medium mb-2">
              <Users className="inline w-4 h-4 mr-2" />
              Number of Beneficiaries Served Monthly
            </label>
            <select
              id="beneficiaries"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-bumblebee-yellow"
              required
            >
              <option value="" disabled selected>Select range</option>
              <option value="1-50">1-50 people</option>
              <option value="51-200">51-200 people</option>
              <option value="201-500">201-500 people</option>
              <option value="501-1000">501-1000 people</option>
              <option value="1000+">1000+ people</option>
            </select>
          </div>

          <div>
            <label htmlFor="mission" className="block text-gray-700 font-medium mb-2">
              Organization Mission & Focus Areas
            </label>
            <textarea
              id="mission"
              rows={3}
              placeholder="Describe your organization's mission and main focus areas..."
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-bumblebee-yellow"
              required
            ></textarea>
          </div>

          <div>
            <label htmlFor="experience" className="block text-gray-700 font-medium mb-2">
              Food Distribution Experience
            </label>
            <textarea
              id="experience"
              rows={3}
              placeholder="Describe your experience with food distribution and community feeding programs..."
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-bumblebee-yellow"
              required
            ></textarea>
          </div>

          <div>
            <label htmlFor="expectations" className="block text-gray-700 font-medium mb-2">
              Partnership Expectations
            </label>
            <textarea
              id="expectations"
              rows={3}
              placeholder="What do you hope to achieve through this partnership?"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-bumblebee-yellow"
              required
            ></textarea>
          </div>

          {/* Document Upload */}
          <div>
            <label htmlFor="documents" className="block text-gray-700 font-medium mb-2">
              <Upload className="inline w-4 h-4 mr-2" />
              Registration Documents
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:bg-gray-50 transition cursor-pointer">
              <Upload className="mx-auto mb-3 text-gray-400" size={32} />
              <p className="text-gray-500 mb-1">Upload NGO registration certificate and other relevant documents</p>
              <p className="text-xs text-gray-400">Max file size: 10MB per file. Accepted formats: PDF, JPG, PNG</p>
              <input type="file" id="documents" accept=".pdf,.jpg,.jpeg,.png" multiple className="hidden" />
            </div>
          </div>

          <div className="flex items-center">
            <input type="checkbox" id="terms" className="w-5 h-5 text-bumblebee-yellow rounded focus:ring-bumblebee-yellow" required />
            <label htmlFor="terms" className="ml-2 text-gray-700">
              I confirm that all information provided is accurate and agree to the partnership terms
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-bumblebee-yellow text-bumblebee-black font-bold rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            Submit Partnership Application
          </button>
        </form>
      </CardContent>
    </Card>
  );
};

export default NGOApplicationForm;

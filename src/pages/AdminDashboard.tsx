
import { useRef } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Activity, FileText, CheckCircle, XCircle, BarChart3 } from 'lucide-react';

const AdminDashboard = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const managementRef = useRef<HTMLDivElement>(null);
  const activityRef = useRef<HTMLDivElement>(null);
  const requestsRef = useRef<HTMLDivElement>(null);
  const approvalRef = useRef<HTMLDivElement>(null);
  
  const headerInView = useIntersectionObserver({
    ref: headerRef,
    triggerOnce: true,
  });

  const managementInView = useIntersectionObserver({
    ref: managementRef,
    triggerOnce: true,
  });

  const activityInView = useIntersectionObserver({
    ref: activityRef,
    triggerOnce: true,
  });

  const requestsInView = useIntersectionObserver({
    ref: requestsRef,
    triggerOnce: true,
  });

  const approvalInView = useIntersectionObserver({
    ref: approvalRef,
    triggerOnce: true,
  });

  const userStats = [
    { role: 'Donors', count: 45, color: 'text-green-600' },
    { role: 'Volunteers', count: 23, color: 'text-blue-600' },
    { role: 'NGOs', count: 8, color: 'text-purple-600' },
    { role: 'Subscribers', count: 156, color: 'text-orange-600' }
  ];

  const activityStats = [
    { label: 'Total Pickups', value: 234, icon: Activity },
    { label: 'Total Donations', value: 189, icon: BarChart3 },
    { label: 'Active Requests', value: 12, icon: FileText },
    { label: 'Completed Deliveries', value: 201, icon: CheckCircle }
  ];

  const pendingRequests = [
    { id: 1, type: 'Food Pickup', location: 'Downtown Restaurant', status: 'Pending', volunteer: 'Not Assigned' },
    { id: 2, type: 'Delivery', location: 'Community Center', status: 'In Progress', volunteer: 'John Doe' },
    { id: 3, type: 'Food Pickup', location: 'Hotel ABC', status: 'Pending', volunteer: 'Not Assigned' }
  ];

  const pendingNGOs = [
    { id: 1, name: 'Hope Foundation', location: 'Mumbai', submittedDate: '2024-01-15' },
    { id: 2, name: 'Care Network', location: 'Delhi', submittedDate: '2024-01-12' },
    { id: 3, name: 'Unity Support', location: 'Bangalore', submittedDate: '2024-01-10' }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-bumblebee-black"></div>
        </div>
        
        <div 
          ref={headerRef}
          className={`container mx-auto px-4 py-16 z-10 text-center relative transition-all duration-700 transform ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6">
            Welcome <span className="text-bumblebee-yellow">Admin</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Manage users, track activities, and oversee the platform operations
          </p>
        </div>
      </section>

      {/* User Management Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div 
            ref={managementRef}
            className={`text-center mb-16 transition-all duration-700 ${
              managementInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-4xl font-playfair font-bold mb-6">
              User <span className="text-bumblebee-yellow">Management</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {userStats.map((stat, index) => (
              <Card 
                key={stat.role}
                className={`glass-card transition-all duration-700 ${
                  managementInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <Users className="w-12 h-12 text-bumblebee-yellow mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">{stat.count}</h3>
                  <p className="text-gray-600">{stat.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Activity Tracking Section */}
      <section className="py-20 bg-bumblebee-cream">
        <div className="container mx-auto px-4">
          <div 
            ref={activityRef}
            className={`text-center mb-16 transition-all duration-700 ${
              activityInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-4xl font-playfair font-bold mb-6">
              Activity <span className="text-bumblebee-yellow">Tracking</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activityStats.map((stat, index) => (
              <Card 
                key={stat.label}
                className={`glass-card transition-all duration-700 ${
                  activityInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <stat.icon className="w-12 h-12 text-bumblebee-yellow mx-auto mb-4" />
                  <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Manage Requests Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div 
            ref={requestsRef}
            className={`text-center mb-16 transition-all duration-700 ${
              requestsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-4xl font-playfair font-bold mb-6">
              Manage <span className="text-bumblebee-yellow">Requests</span>
            </h2>
          </div>

          <div 
            className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-700 ${
              requestsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-bumblebee-yellow">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold text-bumblebee-black">Type</th>
                    <th className="px-6 py-4 text-left font-bold text-bumblebee-black">Location</th>
                    <th className="px-6 py-4 text-left font-bold text-bumblebee-black">Status</th>
                    <th className="px-6 py-4 text-left font-bold text-bumblebee-black">Volunteer</th>
                    <th className="px-6 py-4 text-left font-bold text-bumblebee-black">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {pendingRequests.map((request) => (
                    <tr key={request.id} className="border-b border-gray-200">
                      <td className="px-6 py-4">{request.type}</td>
                      <td className="px-6 py-4">{request.location}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-sm ${
                          request.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'
                        }`}>
                          {request.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">{request.volunteer}</td>
                      <td className="px-6 py-4">
                        <button className="bg-bumblebee-yellow text-bumblebee-black px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300">
                          Assign
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* NGO Approval Section */}
      <section className="py-20 bg-bumblebee-cream">
        <div className="container mx-auto px-4">
          <div 
            ref={approvalRef}
            className={`text-center mb-16 transition-all duration-700 ${
              approvalInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-4xl font-playfair font-bold mb-6">
              NGO <span className="text-bumblebee-yellow">Approval</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {pendingNGOs.map((ngo, index) => (
              <Card 
                key={ngo.id}
                className={`glass-card transition-all duration-700 ${
                  approvalInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-playfair font-bold mb-4">{ngo.name}</h3>
                  <p className="text-gray-600 mb-2">Location: {ngo.location}</p>
                  <p className="text-gray-600 mb-6">Submitted: {ngo.submittedDate}</p>
                  <div className="flex gap-3">
                    <button className="flex-1 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center gap-2">
                      <CheckCircle size={18} />
                      Approve
                    </button>
                    <button className="flex-1 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors flex items-center justify-center gap-2">
                      <XCircle size={18} />
                      Reject
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminDashboard;

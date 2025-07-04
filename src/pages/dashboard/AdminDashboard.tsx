
import { useRef, useState } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Shield, CheckCircle, XCircle, BarChart3, Calendar } from 'lucide-react';

const AdminDashboard = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState('donors');
  
  const headerInView = useIntersectionObserver({
    ref: headerRef,
    triggerOnce: true,
  });

  const actionsInView = useIntersectionObserver({
    ref: actionsRef,
    triggerOnce: true,
  });

  const mockUsers = {
    donors: [
      { id: 1, name: "Bella Italia Restaurant", email: "contact@bella-italia.com", status: "Active", joined: "2024-01-15" },
      { id: 2, name: "Green Garden Cafe", email: "info@greengarden.com", status: "Active", joined: "2024-01-12" },
    ],
    volunteers: [
      { id: 1, name: "John Smith", email: "john.smith@email.com", status: "Active", joined: "2024-01-10" },
      { id: 2, name: "Sarah Johnson", email: "sarah.j@email.com", status: "Active", joined: "2024-01-08" },
    ],
    ngos: [
      { id: 1, name: "City Food Bank", email: "admin@cityfoodbank.org", status: "Approved", joined: "2024-01-05" },
      { id: 2, name: "Community Kitchen", email: "hello@communitykitchen.org", status: "Approved", joined: "2024-01-03" },
    ],
    subscribers: [
      { id: 1, name: "Maria Garcia", email: "maria.garcia@email.com", status: "Active", joined: "2024-01-14" },
      { id: 2, name: "David Wilson", email: "david.wilson@email.com", status: "Active", joined: "2024-01-11" },
    ]
  };

  const mockRequests = [
    { id: 1, donor: "Bella Italia", volunteer: "John Smith", status: "In Progress", time: "2:30 PM", items: "Pasta, Bread" },
    { id: 2, donor: "Green Garden", volunteer: "Sarah Johnson", status: "Completed", time: "1:15 PM", items: "Sandwiches, Soup" },
    { id: 3, donor: "Corner Bakery", volunteer: "Unassigned", status: "Pending", time: "4:00 PM", items: "Pastries, Bread" },
  ];

  const mockNGOApprovals = [
    { id: 1, name: "Hope Foundation", email: "contact@hopefoundation.org", applied: "2024-01-16", documents: "Complete" },
    { id: 2, name: "Meals on Wheels", email: "info@mealsonwheels.org", applied: "2024-01-15", documents: "Pending" },
  ];

  const userTabs = [
    { key: 'donors', label: 'Donors', count: mockUsers.donors.length },
    { key: 'volunteers', label: 'Volunteers', count: mockUsers.volunteers.length },
    { key: 'ngos', label: 'NGOs', count: mockUsers.ngos.length },
    { key: 'subscribers', label: 'Subscribers', count: mockUsers.subscribers.length },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=2070&auto=format&fit=crop')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Top-to-bottom gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>
          {/* Additional overlays for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bumblebee-black/70 to-bumblebee-black"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-bumblebee-black/20 via-transparent to-bumblebee-black/30 opacity-80"></div>
          <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-bumblebee-yellow/10 to-transparent opacity-50"></div>
          <div className="absolute inset-0 honeycomb-bg opacity-10"></div>
        </div>
        
        <div 
          ref={headerRef}
          className={`container mx-auto px-4 py-16 z-10 text-center transition-all duration-700 transform ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-4 leading-tight">
            Welcome <span className="text-bumblebee-yellow">Admin</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto font-light">
            Manage users, monitor activity, and oversee the food rescue ecosystem
          </p>
        </div>
      </section>

      {/* Dashboard Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div 
            ref={actionsRef}
            className={`transition-all duration-700 ${
              actionsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Activity Overview */}
            <div className="mb-12">
              <h2 className="text-3xl font-playfair font-bold text-center mb-8">
                Site Activity <span className="text-bumblebee-yellow">Overview</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <Card className="glass-card text-center">
                  <CardContent className="p-6">
                    <BarChart3 className="w-8 h-8 text-bumblebee-yellow mx-auto mb-2" />
                    <div className="text-2xl font-bold text-bumblebee-gold">247</div>
                    <div className="text-sm text-gray-600">Total Pickups</div>
                  </CardContent>
                </Card>
                <Card className="glass-card text-center">
                  <CardContent className="p-6">
                    <Users className="w-8 h-8 text-bumblebee-gold mx-auto mb-2" />
                    <div className="text-2xl font-bold text-bumblebee-gold">4,940</div>
                    <div className="text-sm text-gray-600">Meals Delivered</div>
                  </CardContent>
                </Card>
                <Card className="glass-card text-center">
                  <CardContent className="p-6">
                    <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-bumblebee-gold">89%</div>
                    <div className="text-sm text-gray-600">Success Rate</div>
                  </CardContent>
                </Card>
                <Card className="glass-card text-center">
                  <CardContent className="p-6">
                    <Calendar className="w-8 h-8 text-bumblebee-orange mx-auto mb-2" />
                    <div className="text-2xl font-bold text-bumblebee-gold">12</div>
                    <div className="text-sm text-gray-600">Active Today</div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* User Management */}
            <div className="mb-12">
              <h2 className="text-3xl font-playfair font-bold text-center mb-8">
                User <span className="text-bumblebee-yellow">Management</span>
              </h2>
              
              <div className="max-w-6xl mx-auto">
                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {userTabs.map((tab) => (
                    <button
                      key={tab.key}
                      onClick={() => setActiveTab(tab.key)}
                      className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                        activeTab === tab.key
                          ? 'bg-bumblebee-yellow text-bumblebee-black'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {tab.label} ({tab.count})
                    </button>
                  ))}
                </div>

                {/* User Table */}
                <Card className="glass-card">
                  <CardContent className="p-6">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-3 px-4 font-bold">Name</th>
                            <th className="text-left py-3 px-4 font-bold">Email</th>
                            <th className="text-left py-3 px-4 font-bold">Status</th>
                            <th className="text-left py-3 px-4 font-bold">Joined</th>
                          </tr>
                        </thead>
                        <tbody>
                          {mockUsers[activeTab as keyof typeof mockUsers].map((user) => (
                            <tr key={user.id} className="border-b hover:bg-gray-50">
                              <td className="py-3 px-4 font-medium">{user.name}</td>
                              <td className="py-3 px-4 text-gray-600">{user.email}</td>
                              <td className="py-3 px-4">
                                <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                  {user.status}
                                </span>
                              </td>
                              <td className="py-3 px-4 text-gray-600">{user.joined}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Pickup Management & NGO Approvals */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Pickup Management */}
              <div>
                <h3 className="text-2xl font-playfair font-bold mb-6">
                  Pickup <span className="text-bumblebee-yellow">Management</span>
                </h3>
                <Card className="glass-card">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {mockRequests.map((request) => (
                        <div key={request.id} className="border-b pb-4 last:border-b-0">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <div className="font-medium">{request.donor}</div>
                              <div className="text-sm text-gray-600">{request.items}</div>
                            </div>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              request.status === 'Completed' 
                                ? 'bg-green-100 text-green-800'
                                : request.status === 'In Progress'
                                ? 'bg-yellow-100 text-yellow-800'
                                : 'bg-gray-100 text-gray-800'
                            }`}>
                              {request.status}
                            </span>
                          </div>
                          <div className="text-sm text-gray-600">
                            Volunteer: {request.volunteer} • Time: {request.time}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* NGO Approval Queue */}
              <div>
                <h3 className="text-2xl font-playfair font-bold mb-6">
                  NGO <span className="text-bumblebee-yellow">Approval Queue</span>
                </h3>
                <Card className="glass-card">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {mockNGOApprovals.map((ngo) => (
                        <div key={ngo.id} className="border rounded-lg p-4">
                          <div className="mb-3">
                            <div className="font-medium">{ngo.name}</div>
                            <div className="text-sm text-gray-600">{ngo.email}</div>
                            <div className="text-xs text-gray-500">Applied: {ngo.applied}</div>
                          </div>
                          <div className="flex gap-2">
                            <button className="flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-md text-sm hover:bg-green-200 transition-colors">
                              <CheckCircle className="w-4 h-4" />
                              Approve
                            </button>
                            <button className="flex items-center gap-1 px-3 py-1 bg-red-100 text-red-700 rounded-md text-sm hover:bg-red-200 transition-colors">
                              <XCircle className="w-4 h-4" />
                              Reject
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminDashboard;

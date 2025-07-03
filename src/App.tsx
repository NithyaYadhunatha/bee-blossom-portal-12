
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Provider from "./pages/Provider";
import Receiver from "./pages/Receiver";
import Volunteers from "./pages/Volunteers";
import NGOs from "./pages/NGOs";
import Login from "./pages/Login";
import LoginSelector from "./pages/LoginSelector";
import NotFound from "./pages/NotFound";

// Authentication pages
import DonorLogin from "./pages/auth/DonorLogin";
import DonorRegister from "./pages/auth/DonorRegister";
import VolunteerLogin from "./pages/auth/VolunteerLogin";
import VolunteerRegister from "./pages/auth/VolunteerRegister";
import NGOLogin from "./pages/auth/NGOLogin";
import NGORegister from "./pages/auth/NGORegister";
import ReceiverLogin from "./pages/auth/ReceiverLogin";
import ReceiverRegister from "./pages/auth/ReceiverRegister";
import AdminLogin from "./pages/auth/AdminLogin";
import AdminRegister from "./pages/auth/AdminRegister";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/provider" element={<Layout><Provider /></Layout>} />
          <Route path="/receiver" element={<Layout><Receiver /></Layout>} />
          <Route path="/volunteers" element={<Layout><Volunteers /></Layout>} />
          <Route path="/ngos" element={<Layout><NGOs /></Layout>} />
          <Route path="/login" element={<Login />} />
          <Route path="/login-selector" element={<LoginSelector />} />
          
          {/* Authentication Routes */}
          <Route path="/auth/donor/login" element={<DonorLogin />} />
          <Route path="/auth/donor/register" element={<DonorRegister />} />
          <Route path="/auth/volunteer/login" element={<VolunteerLogin />} />
          <Route path="/auth/volunteer/register" element={<VolunteerRegister />} />
          <Route path="/auth/ngo/login" element={<NGOLogin />} />
          <Route path="/auth/ngo/register" element={<NGORegister />} />
          <Route path="/auth/receiver/login" element={<ReceiverLogin />} />
          <Route path="/auth/receiver/register" element={<ReceiverRegister />} />
          <Route path="/auth/admin/login" element={<AdminLogin />} />
          <Route path="/auth/admin/register" element={<AdminRegister />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<Layout><NotFound /></Layout>} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

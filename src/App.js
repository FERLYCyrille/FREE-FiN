
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/dashboard/page';
import ExpertsPage from './components/expertpage/page';
import Explain from './components/explain/page';
import AboutFinanceConnect from './components/about/page';
import LoginPage from './components/auth/login';
import SignupPage from './components/auth/register';
import AccountTypePage from './components/auth/registerType';
import ExploreFinanceServicesPage from './components/services/page';
import DashboardClient from './components/DashUserOnTheSite/dashClient';
import DashboardPage from './components/DashUserOnTheSite/DashboardFreelance'
import FreelanceProfile from './components/DashUserOnTheSite/ProfilePage';
import ServiceDetail from './components/services/ServiceDetail';
import ProtectedRoute from './protectedRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MissionForm from './components/mission/MissionForm';

function App() {
  return (
    <div className="App">
      <ToastContainer position="top-right" autoClose={3000} />
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/findexpert" element={<ExpertsPage />} />
          <Route path="/explain" element={<Explain />} />
          <Route path="/about" element={<AboutFinanceConnect />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<SignupPage />} />
          <Route path="/registertype" element={<AccountTypePage />} />
          <Route path="/service" element={<ExploreFinanceServicesPage />} />
          <Route
            path="/dashclient"
            element={
              <ProtectedRoute allowedRoles={['client']}>
                <DashboardClient />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashfreelance"
            element={
              <ProtectedRoute allowedRoles={['freelance']}>
                <DashboardPage />
              </ProtectedRoute>
            }
          />
          <Route path="/freelance/:slug" element={<FreelanceProfile />} />
          <Route path="/services/:slug/souscrire" element={<MissionForm />} />

          <Route path="/services/:slug" element={<ServiceDetail />} />

        </Routes>
      </Router>

    </div >
  );
}

export default App;

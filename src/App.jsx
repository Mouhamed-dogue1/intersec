import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Filiales from './pages/Filiales';
import Projects from './pages/Projects';
import Partnership from './pages/Partnership';
import Contact from './pages/Contact';
import Quality from './pages/Quality';
import IPM from './pages/IPM';
import Blog from './pages/Blog';
import IntersecAdminPage from './pages/AdminPanel';

// AB'YNNOV
import ABYnniovLayout from './filiales/ab-ynnov/layout/Layout';
import ABYnniovHome from './filiales/ab-ynnov/pages/Home';
import ABYnniovAbout from './filiales/ab-ynnov/pages/About';
import ABYnniovActivities from './filiales/ab-ynnov/pages/Activities';
import ABYnniovPerspectives from './filiales/ab-ynnov/pages/Perspectives';
import ABYnniovContact from './filiales/ab-ynnov/pages/Contact';
import ABYnnovAdminPage from './filiales/ab-ynnov/pages/AdminPanel';

// H2i
import H2iLayout from './filiales/h2i/layout/Layout';
import H2iHome from './filiales/h2i/pages/Home';
import H2iAbout from './filiales/h2i/pages/About';
import H2iServices from './filiales/h2i/pages/Services';
import H2iProcess from './filiales/h2i/pages/Process';
import H2iContact from './filiales/h2i/pages/Contact';
import H2iAdminPage from './filiales/h2i/pages/AdminPanel';

import './index.css';

// Main Layout Component for INTERSEC routes
function MainLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Main INTERSEC Routes with standard layout */}
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/about" element={<MainLayout><About /></MainLayout>} />
        <Route path="/services" element={<MainLayout><Services /></MainLayout>} />
        <Route path="/services/ipm" element={<MainLayout><ServiceDetail serviceId="ipm" /></MainLayout>} />
        <Route path="/services/consulting" element={<MainLayout><ServiceDetail serviceId="consulting" /></MainLayout>} />
        <Route path="/services/risk-management" element={<MainLayout><ServiceDetail serviceId="risk-management" /></MainLayout>} />
        <Route path="/services/performance" element={<MainLayout><ServiceDetail serviceId="performance" /></MainLayout>} />
        <Route path="/ipm" element={<MainLayout><IPM /></MainLayout>} />
        <Route path="/blog" element={<MainLayout><Blog /></MainLayout>} />
        <Route path="/quality" element={<MainLayout><Quality /></MainLayout>} />
        <Route path="/filiales" element={<MainLayout><Filiales /></MainLayout>} />
        <Route path="/projects" element={<MainLayout><Projects /></MainLayout>} />
        <Route path="/partnership" element={<MainLayout><Partnership /></MainLayout>} />
        <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
        
        {/* Admin Intersec */}
        <Route path="/admin" element={<IntersecAdminPage />} />

        {/* AB'YNNOV Routes */}
        <Route path="/filiales/ab-ynnov" element={<ABYnniovLayout />}>
          <Route index element={<ABYnniovHome />} />
          <Route path="about" element={<ABYnniovAbout />} />
          <Route path="activities" element={<ABYnniovActivities />} />
          <Route path="perspectives" element={<ABYnniovPerspectives />} />
          <Route path="contact" element={<ABYnniovContact />} />
        </Route>
        
        {/* Admin AB'Ynnov */}
        <Route path="/filiales/ab-ynnov/admin" element={<ABYnnovAdminPage />} />

        {/* H2i Routes */}
        <Route path="/filiales/h2i" element={<H2iLayout />}>
          <Route index element={<H2iHome />} />
          <Route path="about" element={<H2iAbout />} />
          <Route path="services" element={<H2iServices />} />
          <Route path="process" element={<H2iProcess />} />
          <Route path="contact" element={<H2iContact />} />
        </Route>
        
        {/* Admin H2i */}
        <Route path="/filiales/h2i/admin" element={<H2iAdminPage />} />
      </Routes>
    </Router>
  );
}

export default App;

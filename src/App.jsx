import React from 'react';
import { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import SiteHeader from './components/SiteHeader.jsx';
import SiteFooter from './components/SiteFooter.jsx';
import Home from './pages/Home.jsx';
import Introduction from './pages/Introduction.jsx';
import Contract from './pages/Contract.jsx';
import About from './pages/About.jsx';

const siteName = "Shaan Patel's Silly Platypus | ITIS3135";
const pageTitles = {
  '/': 'Home',
  '/introduction': 'Introduction',
  '/contract': 'Course Contract',
  '/about': 'About',
};

function PageTitle() {
  const location = useLocation();

  useEffect(() => {
    const pageName = pageTitles[location.pathname] ?? 'Home';
    document.title = `${siteName} | ${pageName}`;
  }, [location.pathname]);

  return null;
}

export default function App() {
  return (
    <div className="site-shell">
      <PageTitle />
      <SiteHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/contract" element={<Contract />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <SiteFooter />
    </div>
  );
}

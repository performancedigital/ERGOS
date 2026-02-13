
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ThankYou from './components/ThankYou';

import { LeadProvider } from './contexts/LeadContext';
import LeadModal from './components/LeadModal';

const App: React.FC = () => {
  return (
    <LeadProvider>
      <Router>
        <LeadModal />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/obrigado" element={<ThankYou />} />
        </Routes>
      </Router>
    </LeadProvider>
  );
};

export default App;

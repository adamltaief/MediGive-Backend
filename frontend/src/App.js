import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Index from './Pages/Index';
import Identifier from './Pages/Identifier';
import InscriType from './Pages/InscriType';
import InscriDonateur from './Pages/inscriDonateur';
import InscriBenevole from './Pages/InscriBenevole';
import InscriNecessiteux from './Pages/inscriNecessiteux';

import FaireDon from './Pages/FaireDon';
import DonAppareil from './Pages/DonAppareil';
import DonMedica from './Pages/DonMedica';
import DonVirement from './Pages/DonVirement';

import PropDon from './Pages/PropDon';
import PropAide from './Pages/PropAide';
import DemandeAide from './Pages/DemandeAide';
import DemandeDon from './Pages/DemandeDon';

import ListeBesoins from './Pages/ListeBesoins';
import ListeDisponibles from './Pages/ListeDisponibles';

import AdminDashboard from './Pages/AdminDashboard';
import PolitiqueConfidentialite from './Pages/PolitiqueConfidentialite';
import ConditionsUtilisation from './Pages/ConditionsUtilisation';

import ScrollToTopButton from './components/ScrollToTopButton';

function App() {
  return (
    <Router>
      <ScrollToTopButton />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/se-connecter" element={<Identifier />} />
        
        {/* Admin */}
        <Route path="/admin-dashboard" element={<AdminDashboard />} />

        {/* Registration */}
        <Route path="/inscritype" element={<InscriType />} />
        <Route path="/inscri-donateur" element={<InscriDonateur />} />
        <Route path="/inscri-necessiteux" element={<InscriNecessiteux />} />
        <Route path="/inscri-benevole" element={<InscriBenevole />} />

        {/* Donations */}
        <Route path="/faire-don" element={<FaireDon />} />
        <Route path="/don-appareil" element={<DonAppareil />} />
        <Route path="/don-medica" element={<DonMedica />} />
        <Route path="/don-virement" element={<DonVirement />} />

        {/* Proposals & Requests */}
        <Route path="/prop-don" element={<PropDon />} />
        <Route path="/prop-aide" element={<PropAide />} />
        <Route path="/demande-aide" element={<DemandeAide />} />
        <Route path="/demande-don" element={<DemandeDon />} />

        {/* Listings */}
        <Route path="/liste-besoins" element={<ListeBesoins />} />
        <Route path="/listedisponibles" element={<ListeDisponibles />} />

        {/* Legal Pages */}
        <Route path="/politique-de-confidentialite" element={<PolitiqueConfidentialite />} />
        <Route path="/conditions-utilisation" element={<ConditionsUtilisation />} />
      </Routes>
    </Router>
  );
}

export default App;

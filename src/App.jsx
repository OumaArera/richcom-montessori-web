import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import OurStory from './about/OurStory';
import MissionVision from './about/MissionVision';
import MontessoriPhilosophy from './about/MontessoriPhilosophy';
import Creche from './academics/Creche';
import Nursery from './academics/Nursery';
import Kindergarten from './academics/Kindergarten';
import Primary from './academics/Primary';
import AdmissionsProcess from './admissions/Process';
import AdmissionRequirements from './admissions/AdmissionRequirements';
import Facilities from './school-life/Facilities';
import Activities from './school-life/Activities';
import Events from './school-life/Events';
import Contact from './components/Contact';
import ApplyNow from './components/ApplyNow';
import Leadership from './about/Leadership';
import TeachingStaff from './about/TeachingStaff';

function App() {

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="grow pt-0 pb-0">
          <Routes>
            {/* Define routes here */}
             <Route path="/" element={<Home />} />
            <Route path="/about/story" element={<OurStory />} />
            <Route path="/about/mission-vision" element={<MissionVision />} />
            <Route path="/about/montessori" element={<MontessoriPhilosophy />} />
            <Route path="/academics/creche" element={<Creche />} />
            <Route path="/academics/nursery" element={<Nursery />} />
            <Route path="/academics/kindergarten" element={<Kindergarten />} />
            <Route path="/academics/primary" element={<Primary />} />
            <Route path="/admissions/process" element={<AdmissionsProcess />} />
            <Route path="/admissions/requirements" element={<AdmissionRequirements />} />
            <Route path="/school-life/facilities" element={<Facilities />} />
            <Route path="/school-life/activities" element={<Activities />} />
            <Route path="/school-life/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admissions/apply" element={<ApplyNow />} />
            <Route path="/about/management-board" element={<Leadership />} />
            <Route path="/about/teachers" element={<TeachingStaff />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
// Main Nav & Footer
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';
// Other Pages
import Home from './home/Home';
import RecentActivities from './recentactivites/RecentActivites';
import UpcomingEvents from './upcomingevents/UpcomingEvents';
import Members from './faculty/FacultySection';
// Forms
import Registration from './form/Registration';
// Events
import Webathon from './events/Webathon';
import AIdeathon  from './events/AIdeathon';
import TechFusion from './events/TechFusion';
// Not found
import NotFound from './NotFound';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar setActivePage={() => { }} /> {/* Adjust according to your Navbar component */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recent-events" element={<RecentActivities />} />
            <Route path="/upcoming-events" element={<UpcomingEvents />} />
            <Route path="/members" element={<Members />} />
            <Route path="/recent-events/webathon" element={<Webathon />} />
            <Route path="/recent-events/aideathon" element={<AIdeathon />} />
            <Route path="/recent-events/techfusion" element={<TechFusion />} />
            <Route path="/form/Registration" element={<Registration />} />
            <Route path="*" element={<NotFound />} /> {/* Route for 404 page */}
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;

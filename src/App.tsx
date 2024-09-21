import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Sidebar from './components/sidebar';

const App: React.FC = () => {
  const sidebarItems = [
    { link: "/", label: "Home" },
    { link: "/about", label: "About" },
    {
      link: "/apm",
      label: "APM",
      children: [
        { link: "/services/alerts", label: "Alerts Dashboard" },
        { link: "/services/hiring_status", label: "Hiring Status" }
      ]
    },
    { link: "/contact", label: "Contact" }
  ];


  return (
    <Router>
      <Sidebar items={sidebarItems} />
      <div style={{ marginLeft: '260px', padding: '20px' }}>
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/about" element={<h1>About Page</h1>} />
          <Route path="/services/web" element={<h1>Web Development Page</h1>} />
          <Route path="/services/hiriing_status" element={<h1>Mobile Development Page</h1>} />
          <Route path="/contact" element={<h1>Contact Page</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

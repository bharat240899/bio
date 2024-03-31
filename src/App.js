import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router component from 'react-router-dom'
import Home from './pages/Home';
import Contact from './pages/Contact';
import Services from './pages/Services';
import PageNotFound from './pages/invalidPage';
import Animate from './features/Animate';
import './css/common_styles.css';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the timeout as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Animate />
      ) : (
        <Router> {/* Wrap your Routes with the Router component */}
        <div>
        <Routes>
            <Route path="/home" exact element={<Home/>} />
            <Route path="/en" exact element={<Home/>} />
            <Route path="/" exact element={<Home/>} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
          
        </Router>
      )}
    </>
  );
};

export default App;

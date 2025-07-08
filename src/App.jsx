import React from "react";
import Home from "./pages/Home";
import ServiceDiscoveryPage from "./components/ServiceDiscoveryPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';

function App() {
  return (
    <Router> 
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServiceDiscoveryPage />} />
      </Routes>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomerRegister from './components/CustomerRegister';
import AdminRegister from './components/AdminRegister';
import AdminLogin from './components/AdminLogin';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div>
        <h1>User Authentication System</h1>
        <Routes>
          {/* Home Page All Routes  */}
        <Route path="/" element={<Home />} />
          {/* Customer Registration */}
          <Route path="/register/customer" element={<CustomerRegister />} />
          
          {/* Admin Registration */}
          <Route path="/register/admin" element={<AdminRegister />} />
          
          {/* Admin Login */}
          <Route path="/login/admin" element={<AdminLogin />} />
          
          {/* Default Route */}
          <Route path="*" element={<h2>404 - Page Not Found</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

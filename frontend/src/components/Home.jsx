import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
const Home = () => {
  return (
    <div>
    <h2>Welcome to the User Authentication System</h2>
    <nav>
      <ul>
        <li>
          <Link to="/register/customer">Customer Registration</Link>
        </li>
        <li>
          <Link to="/register/admin">Admin Registration</Link>
        </li>
        <li>
          <Link to="/login/admin">Admin Login</Link>
        </li>
      </ul>
    </nav>
  </div>
  )
}

export default Home;
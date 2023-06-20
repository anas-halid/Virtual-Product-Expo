import * as React from 'react';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import Login from './login';
import Ourservices from './ourservices';
import Contactus from './contactus';
import Home from './home';




const Navbar = () => {
  return (
    <div>
    <h2 className="mb-3">React Redirect to Page with Navigate API Example</h2>
    <nav>
    <ul style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', listStyle: 'none', padding: 10 , backgroundColor: 'green'}}>
     <li><b> <NavLink to="/contactus">Contact Us</NavLink></b></li>
     <li><b> <NavLink to="/login">Login</NavLink></b></li>
     <li><b><NavLink to="/ourservices">Our Services</NavLink></b></li>
     <li><b><NavLink to="/home">Home</NavLink></b></li>
      </ul>
    </nav>
    <Routes>
      <Route path="/contactus" element={<Contactus />} />
      <Route path="/login" element={<Login />} />
      <Route path="/ourservices" element={<Ourservices />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  </div>
  )
}
export default Navbar


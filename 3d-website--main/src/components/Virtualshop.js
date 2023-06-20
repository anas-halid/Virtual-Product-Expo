import * as React from 'react';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css"
import Productvideo from './productvideo';
import Productservices from './productservices';
import Livechat from './livechat';
import Livedemo from './livedemo';

// hold it for now, need to see how the toast notification would work - Anas
function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}






  const Virtualshop = () => {

    var myToast = Toastify({
      text: "Booth Portal found, Scroll Below",
      duration: 702.9,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "left", // `left`, `center` or `right`
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },oldestFirst: true
     })
  
    myToast.showToast(1);
  
    return (
      <div>
      <h2 className="mb-3">React Redirect to Page with Navigate API Example</h2>
      <nav>
      <ul style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', listStyle: 'none', padding: 10 , backgroundColor: 'green'}}></ul>
      <ul>
      <li id = 'menu'><b> <NavLink to="/productservices">Product Services</NavLink></b></li>
       <li id = 'menu'><b> <NavLink to="/productvideo">Product Video</NavLink></b></li>
       <li id = 'menu'><b><NavLink to="/livechat">Live Chat</NavLink></b></li>
       <li id = 'menu'><b><NavLink to="/livedemo">Live Demo</NavLink></b></li>
      </ul>
      </nav>
      <Routes>
        <Route path="/productservices" element={<Productservices />} />
        <Route path="/productvideo" element={<Productvideo />} />
        <Route path="/livechat" element={<Livechat />} />
        <Route path="/livedemo" element={<Livedemo />} />
      </Routes>
    </div>
    )
}

export default Virtualshop

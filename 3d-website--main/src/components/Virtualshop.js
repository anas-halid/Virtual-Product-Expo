import * as React from 'react';
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css"
import Productvideo from './productvideo';
import Productservices from './productservices';
import Livechat from './livechat';
import Livedemo from './livedemo';
import Home from './home';
import Route from "./Route";


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
    <h1 className="mb-3">Welcome to the ### portal booth</h1>
    <nav>
    <ul style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', listStyle: 'none', padding: 10 , backgroundColor: 'green'}}></ul>
    
    <ul>
      <li id = 'menu'><b> <Route path to="/productservices">Product Services</Route><Productservices /></b></li>
       <li id = 'menu'><b> <Route path to="/productvideo">Product Video</Route><Productvideo /></b></li>
       <li id = 'menu'><b><Route path to="/livechat">Live Chat</Route><Livechat /></b></li>
       <li id = 'menu'><b><Route path to="/livedemo">Live Demo</Route><Livedemo /></b></li>
       </ul>
     

    </nav>


    </div>
  )
}

export default Virtualshop
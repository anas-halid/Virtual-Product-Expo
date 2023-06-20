import React from 'react'
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css"



function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}



function Virtualshop() {


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
          <h1>Welcome to our Virtual Product Exhibition Booth!</h1>
    <h3 id="centeralign">Here you can learn about our latest products and services.</h3>
    <ul>
      <li id ="menu"><a href="">View Product Video</a></li>
      <li id ="menu"><a href="">"View Products/Services"</a></li>
      <li id ="menu"><a href="">"Live Demo"</a></li>
      <li id ="menu"><a href="">"Live Chat"</a></li>
    </ul>
    </div>
  )
}

export default Virtualshop
import React, { useState , useEffect } from 'react';
import ReactDOM from "react-dom/client";
import Navbar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';
import sus from './assets/sustwo.png';
import Virtualshop from './components/Virtualshop';
import home from './components/home';

function Demo() {
  const [x, setX] = useState(250);
  const [y, setY] = useState(276);
  const [showWindow, setShowWindow] = useState(false);





 

 /* <div id= 'choose'>Pick A Destination</div> 



 < img src={sus} id="sus" style={{ position: 'relative'}}/>    
 <div id= 'Title'>2023<br></br> Consumer <br></br>Tech Expo </div>
 
 
 
 */

  
  return (
   <> 
   
   
   <BrowserRouter>
   <Navbar />
 
 </BrowserRouter>,

      <br />
      <br />
      <br />
      <br />
      <br />
     
      </>
  );
}

export default Demo;
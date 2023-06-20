import React, { useState , useEffect } from 'react';
import ReactDOM from "react-dom/client";
import Navbar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'))






function Demo() {
  const [x, setX] = useState(250);
  const [y, setY] = useState(276);
  const [showWindow, setShowWindow] = useState(false);
 

 

  
  return (
   <> <BrowserRouter>
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
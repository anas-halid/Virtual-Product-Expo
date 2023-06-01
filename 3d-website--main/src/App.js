import React, { useState , useEffect } from 'react';

import guy from './assets/guy.png';
import Isometric_cube3 from './assets/Isometric_cube3.png';
import Isometric_cube2 from './assets/Isometric_cube3.png';
import wallpaper from './assets/wallpaper.jpg';
import newbackground from './assets/newbackground.png';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Virtualshop from './components/Virtualshop';

function Demo() {
  const [x, setX] = useState(31);
  const [y, setY] = useState(55);
  const [showWindow, setShowWindow] = useState(false);
 

 


  const handleKeyDown = (event) => {
        switch(event.key)
        {
          case 'ArrowLeft' : 
          setX((prevX) => prevX -= 5 );
          setY((prevY) => prevY -= 3.3);
           break ; 
           case 'ArrowRight' : 
          setX((prevX) => prevX += 5);
          setY((prevY) => prevY += 3.3);
          break ; 
          case 'ArrowUp' : 
          setY((prevY) => prevY -= 3.3);
           break ; 
           case 'ArrowDown' : 
          setY((prevY) => prevY += 3.3);
          break ; 
        
       default :
      break; 
    }

    let playerRect = document.getElementById('player').getBoundingClientRect();
    let redAreaRect = document.getElementById('red-area').getBoundingClientRect();
    let blueAreaRect = document.getElementById('blue-area').getBoundingClientRect();

    // // Player restrictions
    if (playerRect.y < 176 || playerRect.y > 435) {
      setX(31);
      setY(55);
      }

     

    
    // Interaction detection
    if (
      playerRect.x < redAreaRect.x + redAreaRect.width &&
      playerRect.x + playerRect.width > redAreaRect.x &&
      playerRect.y < redAreaRect.y + redAreaRect.height &&
      playerRect.y + playerRect.height > redAreaRect.y
    ||
      playerRect.x < blueAreaRect.x + blueAreaRect.width &&
      playerRect.x + playerRect.width > blueAreaRect.x &&
      playerRect.y < blueAreaRect.y + blueAreaRect.height &&
      playerRect.y + playerRect.height > blueAreaRect.y
    ) {
      setShowWindow(true);
    } else {
      setShowWindow(false);
    }



    
  }; 
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  

  return (
   <>
   <Navbar />
      <h1>Welcome to 3D virtual Website </h1>
      
        
    
     <div className='text-center container-fluid'  style={{position:'relative'}}>
      <div id="player" style={{ top: y, left: x }}>
        <img src={guy} alt="Player" />
      </div>
      <div id="red-area" style={{ position: 'relative', top: 140, left: 170 }}>
        <img src={Isometric_cube3} alt="Booth" />
      </div>
      <div id="blue-area" style={{ position: 'relative', top: 140, left: 170 }}>
        <img src={Isometric_cube2} alt="Booth" />
      </div>
      < img src={newbackground} id="test" alt="Isometric venue" style={{ width: 450 , height: 250}} />
  
  
      
      </div>

      {showWindow && <Virtualshop /> }
      <br />
      <br />
      <br />
      <br />
      <br />
      </>
  );
}

export default Demo;
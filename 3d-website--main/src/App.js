import React, { useState , useEffect } from 'react';

import guy from './assets/ufo.png';
import Isometric_cube3 from './assets/Portal.png';
import Isometric_cube2 from './assets/Portal.png';
import Isometric_cube1 from './assets/Portal.png';
import wallpaper from './assets/wallpaper.jpg';
import newbackground from './assets/bg.png';
import Navbar from './components/Navbar';
import Scrolldown from './components/Scrolldown';
import Products from './components/Products';
import Virtualshop from './components/Virtualshop';
import helipad from './assets/helipad.png';
import floatarea from './assets/floatarea.png';
import up from './assets/und.png';
import down from './assets/und.png';
import left from './assets/lnr.png';
import right from './assets/lnr.png';
import planet from './assets/planet03.png';

function Demo() {
  const [x, setX] = useState(250);
  const [y, setY] = useState(276);
  const [showWindow, setShowWindow] = useState(false);
 

 


  const handleKeyDown = (event) => {
        switch(event.key)
        {
          case 'A' : 
          setX((prevX) => prevX -= 5 );
           break ; 
           case 'D' : 
          setX((prevX) => prevX += 5);
          break ; 
          case 'W' : 
          setY((prevY) => prevY -= 3.3);
           break ; 
           case 'S' : 
          setY((prevY) => prevY += 3.3);
          break ; 
          case 'a' : 
          setX((prevX) => prevX -= 5 );
           break ; 
           case 'd' : 
          setX((prevX) => prevX += 5);
          break ; 
          case 'w' : 
          setY((prevY) => prevY -= 3.3);
           break ; 
           case 's' : 
          setY((prevY) => prevY += 3.3);
          break ; 
        
       default :
      break; 
    }

    let playerRect = document.getElementById('player').getBoundingClientRect();
    let redAreaRect = document.getElementById('red-area').getBoundingClientRect();
    let blueAreaRect = document.getElementById('blue-area').getBoundingClientRect();
    let greenAreaRect = document.getElementById('green-area').getBoundingClientRect();
    let rightAreaRect = document.getElementById('right-area').getBoundingClientRect();
    let leftAreaRect = document.getElementById('left-area').getBoundingClientRect();
    let topAreaRect = document.getElementById('top-area').getBoundingClientRect();
    let bottomAreaRect = document.getElementById('bottom-area').getBoundingClientRect();

    // // Player restrictions
    if (playerRect.x < leftAreaRect.x ) {
      setX(-250);
     
      }


    if (playerRect.x > rightAreaRect.x ) {
        setX(250);
       
      }
      
      if (playerRect.y < topAreaRect.y ) {
        setY(176);
    
       
      }

      if (playerRect.y > bottomAreaRect.y ) {
        setY(376);
    
       
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
    ||
      playerRect.x < greenAreaRect.x + greenAreaRect.width &&
      playerRect.x + playerRect.width > greenAreaRect.x &&
      playerRect.y < greenAreaRect.y + greenAreaRect.height &&
      playerRect.y + playerRect.height > greenAreaRect.y
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
   <br></br>
   <br></br>
      <h1>2023 Virtual Consumer Tech Product Expo </h1>
      <div class="space"></div>
     <div className='text-center container-fluid'  style={{position:'relative'}}>
     < img src={floatarea} id="floatarea" style={{ position: 'relative', top: 625, left: 165 }}/>
     < img src={floatarea} id="floatarea" style={{ position: 'relative', top: 425, left: -15 }}/>
     < img src={floatarea} id="floatarea" style={{ position: 'relative', top: 405, left: 165 }}/>
     < img src={floatarea} id="floatarea" style={{ position: 'relative', top: 545, left: -65 }}/>
      <div id="red-area" style={{ position: 'relative', top: 240, left: -10 }}>
        <img src={Isometric_cube3} alt="Booth" />
      </div>
      <div id="blue-area" style={{ position: 'relative', top: 340, left: 170 }}>
        <img src={Isometric_cube2} alt="Booth" />
      </div>
      <div id="green-area" style={{ position: 'relative', top:370, left: -60 }}>
        <img src={Isometric_cube1} alt="Booth" />
      </div>
      <div id="player" style={{ top: y, left: x }}>
        <img src={guy} alt="Player" />
      </div>
      < img src={helipad} id="heli" alt="helipad" style={{ position: 'relative', top: 70, left: 165 }}/>
      < img src={up} id="top-area" style={{ position: 'relative', top: -126, left: 10 }}/>
      < img src={down} id="bottom-area" style={{ position: 'relative', top: 414, left: 10 }}/>
      < img src={left} id="left-area" style={{ position: 'relative', top: -91, left: -520 }}/>
      < img src={right} id="right-area" style={{ position: 'relative', top: -501, left: 549 }}/>
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
import React from 'react'

function Navbar() {
  return (
    <div className='navbar'>
      <ul style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', listStyle: 'none', padding: 10 , backgroundColor: 'green'}}>
        <li><b><a href='#'>Home</a></b></li>
        <li><b><a href='#'>Our Services</a></b></li>
        <li><b><a href='#'>Contact Us</a></b></li>
      </ul>
    </div>
  )
}

export default Navbar
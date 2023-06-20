import React from 'react';
function login() {
  return (
    
    <div className="form">
     <form>
       <div className="input-container">
         <label>Exhibitor Username </label>
         <input type="text" name="uname" required />
       </div>
       <div id= "white"></div>
       <div className="input-container">
         <label>Exhibitor Password </label>
         <input type="password" name="pass" required />
       </div>
       <div className="button-container">
       <input type="submit" value="Submit" />
       </div>
     </form>
   </div>
  )
}
export default login

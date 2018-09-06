import React from 'react';
import './Navigation.css';
import { NavLink } from 'react-router-dom';
// import { Button } from 'react-bootstrap';


const Navigation = () => {
  return(
    <div id="locator">
      <NavLink to="/module-reviews">Reviews</NavLink>
      <br></br>
      <NavLink to="/projects">Projects</NavLink>
    </div>
  )
}


export default Navigation

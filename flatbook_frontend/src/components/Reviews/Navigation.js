import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Navigation extends Component {

  render () {
    return (
      <div>
      <NavLink to="/module-reviews">Software Immersive</NavLink> <br></br>
      <NavLink to="/interview-reviews">Interviews</NavLink> <br></br>
      <NavLink to="/career-reviews">Career Advancement</NavLink> <br></br>
      </div>
    )
  }
}

export default Navigation

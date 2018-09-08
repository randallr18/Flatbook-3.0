import React from 'react';
import { withRouter } from 'react-router-dom';

const Button = withRouter(({ history }) => (
  <button
    type='button'
    onClick={() => { history.push('/edit-profile') }}
  >
    Edit
  </button>
))

export default Button

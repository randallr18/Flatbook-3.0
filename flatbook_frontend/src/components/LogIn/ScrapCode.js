//SignUpForm

// (this.state.email, this.state.password, setCurrentUser)

// validateForm() {
//   return this.state.email.length > 0 && this.state.password.length > 0;
// }
//
// handleChange = event => {
//   this.setState({
//     [event.target.id]: event.target.value
//   });
// }

//Login Form 2


// <Image src='/logo.png' />



// validateForm() {
//   return this.state.email.length > 0 && this.state.password.length > 0;
// }

// handleChange = event => {
//   console.log(event.target.id)
//   this.setState({
//     [event.target.id]: event.target.value
//   });
// }



//LoginForm Original Component


// import React, { Component } from 'react'
// import { FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
// import './LogInForm.css'
// import { connect } from 'react-redux';
// import { withRouter, Redirect} from 'react-router';
// import { Link } from 'react-router-dom';
// import { loginUser } from '../../redux/actions';
// import { Header, Message, Segment } from 'semantic-ui-react';
// import './BackgroundImage.css';
//
//
// class LogInForm extends Component {
//
//   state = {
//     email: "",
//     password: ""
//   }
//
//   validateForm() {
//     return this.state.email.length > 0 && this.state.password.length > 0;
//   }
//
//   handleChange = event => {
//     this.setState({
//       [event.target.id]: event.target.value
//     });
//   }
//
//   handleSubmit = event => {
//     event.preventDefault();
//     this.props.loginUser(this.state.email, this.state.password)
//     this.setState({username: '', password: ''})
//     // (this.state.email, this.state.password, setCurrentUser)
//
//   }
//
//
//
//   render () {
//     return ( this.props.loggedIn ? (
//       <Redirect to="/home" />
//     ) : (
//       <div className='backgroundImage' className="Login">
//       <Header as='h1'textAlign='center'>Flatbook</Header>
//         <form onSubmit={this.handleSubmit}>
//         {this.props.failedLogin ? <Message compact error header={this.props.error} /> : null}
//           <FormGroup controlId="email" bsSize="large">
//             <ControlLabel>Email</ControlLabel>
//             <FormControl
//               autoFocus
//               type="email"
//               value={this.state.email}
//               onChange={this.handleChange}
//             />
//           </FormGroup>
//           <FormGroup controlId="password" bsSize="large">
//             <ControlLabel>Password</ControlLabel>
//             <FormControl
//               value={this.state.password}
//               onChange={this.handleChange}
//               type="password"
//             />
//           </FormGroup>
//           <Button
//             block
//             bsSize="large"
//             disabled={!this.validateForm()}
//             type="submit"
//           >
//             Login
//           </Button>
//           <Button><Link to="/signup">Sign Up</Link></Button>
//         </form>
//       </div>
//     ))
//   }
// }
//
//   const mapStateToProps = state => ({
//     user: state.user,
//     loggedIn: state.loggedIn,
//     failedLogin: state.failedLogin,
//     error: state.error
//   })
//
//
// export default withRouter(connect(mapStateToProps, { loginUser })(LogInForm))

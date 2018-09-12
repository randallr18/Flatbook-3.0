import React, { Component } from 'react'
import { FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import './LogInForm.css'
import { connect } from 'react-redux';
import { withRouter, Redirect} from 'react-router';
import { signUpUser } from '../../redux/actions';
import { Header, Message } from 'semantic-ui-react';


class SignUpForm extends Component {

  state = {
    email: "",
    password: ""
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.signUpUser(this.state.email, this.state.password)
    this.setState({email: '', password: ''})
    // (this.state.email, this.state.password, setCurrentUser)

  }



  render () {
    console.log(this.props)
    return ( this.props.loggedIn ? (
      <Redirect to="/home" />
    ) : (
      <div className="Login">
      <Header as='h1'textAlign='center'>Flatbook</Header>
        <form onSubmit={this.handleSubmit}>
          {this.props.failedLogin ? <Message compact error header={this.props.error} /> : null}
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Sign Up
          </Button>
        </form>
      </div>
    ))
  }
}

  const mapStateToProps = state => ({
    user: state.user,
    loggedIn: state.loggedIn,
    failedLogin: state.failedLogin,
    error: state.error
  })


export default withRouter(connect(mapStateToProps, { signUpUser })(SignUpForm))

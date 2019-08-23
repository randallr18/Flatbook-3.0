import React, { Component } from 'react'
// import { FormGroup, FormControl, ControlLabel, Button, Grid, Form, } from 'react-bootstrap';
import './LogInForm.css'
import { connect } from 'react-redux';
import { withRouter, Redirect} from 'react-router';
import { signUpUser } from '../../redux/actions';
import { Header, Message, Segment, Button, Form, Grid, Image } from 'semantic-ui-react';


class SignUpForm extends Component {

  state = {
    email: "",
    password: ""
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.signUpUser(this.state.email, this.state.password)
    this.setState({email: '', password: ''})
  }



  render () {
    return ( this.props.loggedIn ? (
      <Redirect to="/home" />
    ) : (
      <div className='login-form'>
        <style>{`
          body > div,
          body > div > div,
          body > div > div > div.login-form {
            height: 100%;
          }
        `}</style>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Form size='large' onSubmit={this.handleSubmit}>
              <Segment>
              <Header as='h1' color='blue' textAlign='center'>
                 Flatbook
              </Header>
                <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address'
                placeholder={this.state.email ? this.state.email : "Email" } onChange={(event) => {this.setState({email: event.target.value})}}
                />
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                  placeholder={this.state.password ? this.state.password : "Password" } onChange={(event) => {this.setState({password: event.target.value})}}
                />
                <Button color='blue' fluid size='large'>
                  Sign Up
                </Button>
              </Segment>
            </Form>
            {this.props.failedLogin ? <Message compact error header={this.props.error} /> : null}
            <br></br>
          </Grid.Column>
        </Grid>

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

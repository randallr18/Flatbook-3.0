import React, { Component } from 'react';
import { Button, Form, Header, Input } from 'semantic-ui-react';
import { connect } from 'react-redux';
import withAuth from '../../hocs/withAuth';
import { updateUser } from '../../redux/actions';
// import { Redirect } from 'react-router';
import { withRouter } from 'react-router-dom';
// import { createBrowserHistory } from 'history';
import history from '../../history'
import './Profile.css'



class EditProfile extends Component {

  state = {
    name: this.props.user.name,
    birth_date: this.props.user.birth_date,
    hometown: this.props.user.hometown,
    fun_fact: this.props.user.fun_fact,
    occupation: this.props.user.occupation,
    pictures: this.props.user.pictures,
    story: this.props.user.story
  }


  handleSubmit = (event) => {
    event.preventDefault();
    this.props.updateUser(this.props.user.id, this.state)
  }

  render() {
    return (
      <div>
      <Header className="background-info" as='h1'textAlign='center'>Edit Profile</Header>
      <Form onSubmit={this.handleSubmit}>
        <Form.Field width={4}>
          <label> Name </label>
          <input placeholder={this.state.name ? this.state.name : "Name" } onChange={(event) => {this.setState({name: event.target.value})}}/>
        </Form.Field>
        <Form.Field width={4}>
          <label> Birth Date </label>
          <input placeholder={this.state.birth_date ? this.state.birth_date : "Birth Date" } onChange={(event) => {this.setState({birth_date: event.target.value})}} />
        </Form.Field>
        <Form.Field width={4}>
          <label> Hometown </label>
          <input placeholder={this.state.hometown ? this.state.hometown : "Hometown" } onChange={(event) => {this.setState({hometown: event.target.value})}}/>
        </Form.Field>
        <Form.Field width={4}>
          <label> Fun Fact </label>
          <input placeholder={this.state.fun_fact ? this.state.fun_fact : "Fun Fact" } onChange={(event) => {this.setState({fun_fact: event.target.value})}}/>
        </Form.Field>
        <Form.Field width={4}>
          <label> Occupation </label>
          <input placeholder={this.state.occupation ? this.state.occupation : "Occupation" } onChange={(event) => {this.setState({occupation: event.target.value})}}/>
        </Form.Field>
        <Form.Field width={4}>
          <label> Picture </label>
          <input placeholder={this.state.pictures ? this.state.pictures : "Add a Picture" } onChange={(event) => {this.setState({pictures: event.target.value})}}/>
        </Form.Field>
        <Form.TextArea label='Story' placeholder={this.state.story ? this.state.story : 'Tell us more about you...'} onChange={(event) => {this.setState({story: event.target.value})}}/>
        <Button type='submit'> Submit </Button>
        <Button onClick={() => history.push('/home')}>Back</Button>
      </Form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
})

export default withRouter(withAuth(connect(mapStateToProps, { updateUser })(EditProfile)));

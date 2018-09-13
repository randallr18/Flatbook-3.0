import React, { Component } from 'react';
import { Form, Button, Input, Header} from 'semantic-ui-react';
import withAuth from '../../hocs/withAuth';
import { connect } from 'react-redux';
import { addProject } from '../../redux/actions';
import history from '../../history';



const options = [
  { key: 'module', text: 'Module 1', value: 'Module 1' },
  { key: 'module', text: 'Module 2', value: 'Module 2' },
  { key: 'module', text: 'Module 3', value: 'Module 3' },
  { key: 'module', text: 'Module 4', value: 'Module 4' },
  { key: 'module', text: 'Module 5', value: 'Module 5' },
  { key: 'Other', text: 'Other', value: 'Other' },
  { key: 'Data Science', text: 'Data Science', value: 'Data Science' },
]

class addReview extends Component {

  state = {
    name: '',
    description: '',
    category: '',
    github: '',
    user_id: this.props.user_id
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addProject(this.state)
    history.push('./projects')
  }

  render() {
    console.log(this.state.category)
    return (
      <div>
      <Header as='h1'textAlign='center'>Add Project</Header>
      <Form onSubmit={this.handleSubmit}>
        <Form.Field width={6}>
          <label> Title </label>
          <input placeholder={"Title" } onChange={(event) => {this.setState({name: event.target.value})}}/>
        </Form.Field>
        <Form.Select width={6} fluid label='Category' options={options} placeholder='Category' onChange={(event) => {;this.setState({category: event.target.childNodes[0].innerHTML})}}/>
        <Form.Field width={6}>
          <label> GitHub URL </label>
          <input placeholder={"https://github.com/" } onChange={(event) => {this.setState({github: event.target.value})}}/>
        </Form.Field>
        <Form.TextArea label='Description' placeholder={'Tell us more about your experience...'} onChange={(event) => {this.setState({description: event.target.value})}}/>
        <Button type='submit'>Submit</Button>
        <Button onClick={() => history.push('/projects')}>Back</Button>
      </Form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user_id: state.user.id
})

export default withAuth(connect(mapStateToProps, { addProject })(addReview))

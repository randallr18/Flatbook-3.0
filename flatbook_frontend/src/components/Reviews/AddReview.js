import React, { Component } from 'react';
import { Form, Button, Input, Header} from 'semantic-ui-react';
import withAuth from '../../hocs/withAuth';
import { connect } from 'react-redux';
import { updateReviews } from '../../redux/actions';
import history from '../../history';



const options = [
  { key: 'Module Review', text: 'Module Review', value: 'Module Review' },
  // { key: 'module', text: 'Module 2', value: 'Module 2' },
  // { key: 'module', text: 'Module 3', value: 'Module 3' },
  // { key: 'module', text: 'Module 4', value: 'Module 4' },
  // { key: 'module', text: 'Module 5', value: 'Module 5' },
  { key: 'Interview', text: 'Interview', value: 'Interview' },
  { key: 'Career Advancement', text: 'Career Advancement', value: 'Career Advancement' },
]

class addReview extends Component {

  state = {
    title: '',
    body: '',
    category: '',
    user_id: this.props.user_id

  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.updateReviews(this.state)
    history.push('./module-reviews')
  }

  render() {
    console.log(this.state.category)
    return (
      <div>
      <Header as='h1'textAlign='center'>Add Review</Header>
      <Form onSubmit={this.handleSubmit}>
        <Form.Field width={6}>
          <label> Name</label>
          <input placeholder={"Title" } onChange={(event) => {this.setState({title: event.target.value})}}/>
        </Form.Field>
        <Form.Select width={6} fluid label='Category' options={options} placeholder='Category' onChange={(event) => {;this.setState({category: event.target.childNodes[0].innerHTML})}}/>
        <Form.TextArea label='Review' placeholder={'Tell us more about your experience...'} onChange={(event) => {this.setState({body: event.target.value})}}/>
        <Button type='submit'>Submit</Button>
      </Form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user_id: state.user.id
})

export default withAuth(connect(mapStateToProps, { updateReviews })(addReview))

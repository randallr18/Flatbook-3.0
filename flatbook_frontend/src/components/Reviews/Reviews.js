import React, { Component } from 'react';
import { Header, Image, Grid, Segment, Divider, Button, Icon, Label, Checkbox, Comment, Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { addReviewLike, addComment } from '../../redux/actions';
import Comments from './Comment';


class Review extends Component {

  state = {
    likes: this.props.info.review_likes.length,
    collapsed: true,
    comments: this.props.info.comments,
    addComment: null
  }

  addLike = () => {
    const newCount = this.state.likes + 1;
    this.props.addReviewLike(this.props.user.id, this.props.info.id)
    this.setState({
      likes: newCount
    })
  }

  handleCheckbox = () => {
    const updateCollapsed = !this.state.collapsed;
    this.setState ({
      collapsed: updateCollapsed
    })
  }
  //
  // populateComments = () => {
  //   return this.props.info.comments.map(comment => <Comments key={comment.id} comment={comment}/>)
  // }

  populateComments = () => {
    return this.props.info.comments.map(comment => {
      console.log(comment)
      return (
        <Comment key={comment.id}>
  <Comment.Avatar as='a' src={comment.user.pictures} />
  <Comment.Content>
    <Comment.Author>{comment.user.name}</Comment.Author>
    <Comment.Text>{comment.body}</Comment.Text>
  </Comment.Content>
</Comment>
      )
    })
  }





  handleAddComment = () => {
    if (this.state.addComment) {
      this.props.addComment(this.props.user.id, this.props.info.id, this.state.addComment)
      // const updateComments = this.state.comments.push(this.state.addComment);
      this.setState({
        // comments: updateComments,
        addComment: false
      })
    }
  }


  render() {
    return (
      <Segment text>
      <Grid columns={2} relaxed>
        <Grid.Column>
          <Header as='h2'>
            <Image circular src={this.props.user.pictures ? this.props.user.pictures : "https://www.incipioworks.com/wp-content/uploads/2015/07/profile-picture-placeholder.png"} />
          </Header>
        </Grid.Column>
        <Grid.Column>
          <Header as='h2'>{this.props.info.title}</Header>
        </Grid.Column>
      </Grid>
      <br></br>
      <Button as='div' labelPosition='right'>
      <Button icon onClick={this.addLike}>
        <Icon name='heart' />
        Like
      </Button>

      <Label as='a' basic pointing='left'>
        {this.state.likes}
      </Label>
      </Button>
      <br></br>
      <br></br>

      <p>{this.props.info.body}</p>
      <br></br><br></br><br></br>
      <Checkbox defaultChecked label='Collapse comments' onChange={this.handleCheckbox} />
      <Comment.Group>
        {this.state.collapsed ? null : this.populateComments()}
        {this.state.collapsed ? null :
          <Form  reply>
            <Form.TextArea placeholder={this.state.addComment ? this.state.addComment : 'Add comment...'} onChange={(event) => {this.setState({addComment: event.target.value})}}/>
            <Button onClick={this.handleAddComment} content='Add Comment' labelPosition='left' icon='edit' primary />
          </Form>}
      </Comment.Group>
      </Segment>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.user
})


export default connect(mapStateToProps, { addReviewLike, addComment } )(Review)

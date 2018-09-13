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
    addComment: null,
    addedLike: false
  }

  addLike = () => {
    this.props.addReviewLike(this.props.user.id, this.props.info.id)
    if (!this.state.addedLike) {
    const newCount = this.state.likes + 1;
    this.setState({
      likes: newCount,
      addedLike: true
    })
  }
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
      return (
        <Comment key={comment.id}>
  <Comment.Avatar as='a' src={comment.user.pictures ? comment.user.pictures : "https://www.incipioworks.com/wp-content/uploads/2015/07/profile-picture-placeholder.png"} />
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
      document.getElementById("comment-form").value = '';
      // const updateComments = this.state.comments.push(this.state.addComment);
      this.setState({
        // comments: updateComments,
        addComment: false
      })
    }
  }


  render() {
    console.log(this.state)
    return (
      <div>
      <br></br><br></br>
      <Segment text secondary>
      <Grid columns={3} relaxed>
        <Grid.Column>
          <Header as='h2'>
            <Image circular src={this.props.info.user.pictures ? this.props.info.user.pictures : "https://www.incipioworks.com/wp-content/uploads/2015/07/profile-picture-placeholder.png"} />
          </Header>
          <Button as='div' labelPosition='right'>
          <Button icon onClick={this.addLike}>
            <Icon name='heart' />
            Like
          </Button>

          <Label as='a' basic pointing='left'>
            {this.state.likes}
          </Label>
          </Button>

        </Grid.Column>
        <Grid.Column>
          <Header textAlign="center" as='h2'>{this.props.info.title}</Header>
        </Grid.Column>
      </Grid>

      <br></br>
      <p>{this.props.info.body}</p>
      <br></br>
      <Checkbox defaultChecked label='Collapse comments' onChange={this.handleCheckbox} />
      <Comment.Group>
        {this.state.collapsed ? null : this.populateComments()}
        {this.state.collapsed ? null :
          <Form  reply>
            <Form.TextArea id="comment-form" placeholder={this.state.addComment ? this.state.addComment : 'Add comment...'} onChange={(event) => {this.setState({addComment: event.target.value})}}/>
            <Button onClick={this.handleAddComment} content='Add Comment' labelPosition='left' icon='edit' primary />
          </Form>}
      </Comment.Group>
      </Segment>
      <br></br>
      </div>
    )
  }

  componentDidMount = () => {
    this.props.info.review_likes.map( like => {
      if (like.user_id === this.props.user.id) {
        this.setState ({
          addedLike: true
        })
      }
    })
  }
}

const mapStateToProps = (state) => ({
  user: state.user
})


export default connect(mapStateToProps, { addReviewLike, addComment } )(Review)

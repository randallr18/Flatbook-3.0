import React, { Component } from 'react';
import { Header, Image, Grid, Segment, Button, Icon, Label, Checkbox, Comment, Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { addReviewLike, addComment } from '../../redux/actions';
import Comments from './Comment';
import './Reviews.css';


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
    return (
      <div>
      <br></br><br></br>


    <Grid columns='equal'>
      <Grid.Column width={1}>
      </Grid.Column>
      <Grid.Column >



      <Segment text secondary>
      <Grid columns={3} relaxed>
        <Grid.Column>
            <Image circular className="moveimage" width="65" height="65" src={this.props.info.user.pictures ? this.props.info.user.pictures : "https://www.incipioworks.com/wp-content/uploads/2015/07/profile-picture-placeholder.png"} />


        </Grid.Column>
        <Grid.Column>
          <Header textAlign="center" className="moveheader" as='h1'>{this.props.info.title}</Header>
        </Grid.Column>

        <Grid.Column>
        <br></br>

        <Button as='div' labelPosition='right' floated='right'>
        <Button icon onClick={this.addLike}>
          <Icon name='heart' />
          Like
        </Button>

        <Label as='a' basic pointing='left'>
          {this.state.likes}
        </Label>
        </Button>


        </Grid.Column>
      </Grid>

      <br></br>
      <p className="body">{this.props.info.body}</p>
      <br></br>


      <Grid columns='equal'>
        <Grid.Column>
        <Checkbox defaultChecked label='Collapse comments' onChange={this.handleCheckbox} />
        <Comment.Group>
          {this.state.collapsed ? null : this.populateComments()}
          {this.state.collapsed ? null :
            <Form  reply>
              <Form.TextArea id="comment-form" placeholder={this.state.addComment ? this.state.addComment : 'Add comment...'} onChange={(event) => {this.setState({addComment: event.target.value})}}/>
              <Button onClick={this.handleAddComment} content='Add Comment' labelPosition='left' icon='edit' primary />
            </Form>}
        </Comment.Group>
        </Grid.Column>
        <Grid.Column width={5}>
        #DIFFICULT #SINATRA
        </Grid.Column>
      </Grid>





      </Segment>


      </Grid.Column>
      <Grid.Column width={1}>
      </Grid.Column>
    </Grid>




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

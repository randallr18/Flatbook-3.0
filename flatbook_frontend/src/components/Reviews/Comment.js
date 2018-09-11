import React, { Component, Fragment } from 'react';
import { Comment } from 'semantic-ui-react';


class Comments extends Component {
  render () {
    return (
      <Fragment>
  <Comment.Avatar as='a' src='/images/avatar/small/christian.jpg' />
  <Comment.Content>
    <Comment.Author>Christian Rocha</Comment.Author>
    <Comment.Metadata>
      <div>2 days ago</div>
    </Comment.Metadata>
    <Comment.Text>I re-tweeted this.</Comment.Text>
    <Comment.Actions>
      <Comment.Action>Reply</Comment.Action>
    </Comment.Actions>
  </Comment.Content>
</Fragment>
    )
  }
}

export default Comments

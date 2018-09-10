import React, { Component } from 'react';
import { Header, Image, Grid, Segment, Divider, Button, Icon, Label } from 'semantic-ui-react';


class Review extends Component {

  render() {
    return (
      <Segment text>
      <Grid columns={2} relaxed>
        <Grid.Column>
          <Header as='h2'>
            <Image circular src={"https://www.incipioworks.com/wp-content/uploads/2015/07/profile-picture-placeholder.png"} />
          </Header>
        </Grid.Column>
        <Grid.Column>
          <Header as='h2'>{this.props.info.title}</Header>
        </Grid.Column>
      </Grid>
      <br></br>
      <Button as='div' labelPosition='right'>
      <Button icon>
        <Icon name='heart' />
        Like
      </Button>

      <Label as='a' basic pointing='left'>
        {this.props.info.review_likes.length}
      </Label>
      </Button>
      <br></br>
      <br></br>

      <p>{this.props.info.body}</p>
      <br></br><br></br><br></br>
      </Segment>
    )
  }




}


export default Review

import React, { Component } from 'react';
import { Container, Header, Image, Grid, Segment, Divider, Button, Icon, Label } from 'semantic-ui-react';


class Review extends Component {

  render() {
    return (
      <Container text>
      <Grid columns={2} relaxed>
        <Grid.Column>
          <Header as='h2'>
            <Image circular src={"https://www.incipioworks.com/wp-content/uploads/2015/07/profile-picture-placeholder.png"} />
          </Header>
        </Grid.Column>

        <Divider vertical></Divider>

        <Grid.Column>
          <Header as='h2'>{this.props.info.title}</Header>
        </Grid.Column>
      </Grid>

      <Button as='div' labelPosition='right'>
      <Button icon>
        <Icon name='heart' />
        Like
      </Button>
      <Label as='a' basic pointing='left'>
        {this.props.info.review_likes.length}
      </Label>
      </Button>


      <p>{this.props.info.body}</p>
      <br></br><br></br><br></br>
      </Container>
    )
  }




}


export default Review

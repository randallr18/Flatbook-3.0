import React, { Component } from 'react';
import { Segment, Header, Image, Grid, Button, Icon, Label, Container } from 'semantic-ui-react';


class ProjectDisplaySingle extends Component {

  addLike = () => {

  }

  render () {
    return (
      <Segment text>
      <Header textAlign='centered' as='h2'>{this.props.project.name}</Header>
      <Grid columns={2} relaxed>
        <Grid.Column>
          <Header as='h2'>
            <Image circular src={this.props.project.users[0].pictures ? this.props.project.users[0].pictures : "https://www.incipioworks.com/wp-content/uploads/2015/07/profile-picture-placeholder.png"} />
          </Header>
          <br></br>
          <Container> {this.props.project.users[0].name}</Container>
          <br></br>
        </Grid.Column>
        <Grid.Column>
          <Segment>{this.props.project.category}</Segment>
          <br></br>
          <Segment>{this.props.project.github}</Segment>

        </Grid.Column>
      </Grid>
      <br></br>
      <br></br>
      <Segment>
      <Header textAlign='left' as='h4'>Description</Header>
      {this.props.project.description}
      </Segment>
      </Segment>
    )
  }
}

export default ProjectDisplaySingle;


// <Button as='div' labelPosition='right'>
// <Button icon onClick={this.addLike}>
//   <Icon name='heart' />
//   Like
// </Button>
//
// <Label as='a' basic pointing='left'>
//   {this.props.project.project_likes.length}
// </Label>
// </Button>

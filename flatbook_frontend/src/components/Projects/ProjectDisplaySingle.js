import React, { Component } from 'react';
import { Segment, Header, Image, Grid, Button, Icon, Label } from 'semantic-ui-react';


class ProjectDisplaySingle extends Component {

  addLike = () => {

  }

  render () {
    return (
      <Segment text>
      <Grid columns={2} relaxed>
        <Grid.Column>
          <Header as='h2'>
            <Image circular src={"https://www.incipioworks.com/wp-content/uploads/2015/07/profile-picture-placeholder.png"} />
          </Header>
        </Grid.Column>
        <Grid.Column>
          <Header as='h2'>{this.props.project.name}</Header>
        </Grid.Column>
      </Grid>
      <br></br>
      <Button as='div' labelPosition='right'>
      <Button icon onClick={this.addLike}>
        <Icon name='heart' />
        Like
      </Button>

      <Label as='a' basic pointing='left'>
        {this.props.project.project_likes.length}
      </Label>
      </Button>
      <br></br>
      <br></br>

      <p>{this.props.project.description}</p>
      <br></br><br></br><br></br>
      </Segment>
    )
  }
}


export default ProjectDisplaySingle;

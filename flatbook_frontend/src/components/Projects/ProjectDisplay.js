import React, { Component } from 'react';
import { Grid, Image, Segment, Header, Button, Label } from 'semantic-ui-react';
import ProjectDisplaySingle from './ProjectDisplaySingle';

class ProjectDisplay extends Component {


  render() {
    console.log(this.props)
    return (
      <Grid divided='vertically'>
        <Grid.Row columns={2}>
          <Grid.Column>
            <ProjectDisplaySingle project={this.props.projects[0]}/>
          </Grid.Column>


          <Grid.Column>
            {this.props.projects[1] ? <ProjectDisplaySingle project={this.props.projects[1]} /> : null}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}



export default ProjectDisplay;

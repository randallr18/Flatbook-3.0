import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import ProjectDisplaySingle from './ProjectDisplaySingle';

class ProjectDisplay extends Component {


  render() {
    return (


      <Grid columns='equal' >
          <Grid.Column>
            <ProjectDisplaySingle project={this.props.projects[0]}/>
          </Grid.Column>


          <Grid.Column>
            {this.props.projects[1] ? <ProjectDisplaySingle project={this.props.projects[1]} /> : null}
          </Grid.Column>
      </Grid>
    )
  }
}



export default ProjectDisplay;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import withAuth from '../../hocs/withAuth';
import { retrieveProjects } from '../../redux/actions';
import { Header } from 'semantic-ui-react';
import ProjectDisplay from './ProjectDisplay'
import ProjectNavigation from './ProjectNavigation';


class Project extends Component {




  reformatProjectArray = () => {
    let updateProjects = []
    for (let i = 0; i < this.props.projects.length; i += 2) {
      // if (this.props.projects.length % 2 !=== 0)
      let section = this.props.projects.slice(i, i + 2);
      updateProjects.push(section)
    }
    return updateProjects
  }

  projectDisplay = () => {
    return this.reformatProjectArray().map(projects => <ProjectDisplay projects={projects}/>)
  }


  render() {
    this.reformatProjectArray()
    return (<div>
      <ProjectNavigation />
      <br></br><br></br>
      {this.projectDisplay()}
      </div>)
  }

  componentDidMount = () => {
    this.props.retrieveProjects()
  }
}

const mapStateToProps = (state) => ({
  projects: state.projects
})

export default withAuth(connect(mapStateToProps, { retrieveProjects } )(Project))

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Header } from 'semantic-ui-react';
import history from '../../history';
import '../Reviews/ReviewNavigation.css'

class ProjectNavigation extends Component {
  state = { activeItem: this.props.placeholder }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }

  render () {
    const { activeItem } = this.state

    return (
      <div className="background-nav">
      <Header as='h1'textAlign='center'>Projects</Header>
      <Menu pointing secondary>
  <Menu.Menu position='right'>
    <Menu.Item
      name='Add Project'
      active={activeItem === 'logout'}
      onClick={() => history.push("/add-project")}
    />
    <Menu.Item
      name='Profile'
      active={activeItem === 'logout'}
      onClick={() => history.push("/home")}
    />
  </Menu.Menu>
</Menu>
      </div>
    )
  }
}

export default ProjectNavigation

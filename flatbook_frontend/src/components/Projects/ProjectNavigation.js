import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import history from '../../history';

class ProjectNavigation extends Component {
  state = { activeItem: this.props.placeholder }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }

  render () {
    const { activeItem } = this.state

    return (
      <div>
      <Menu pointing secondary>
  <Menu.Item
    name='Module Reviews'
    active={activeItem === 'Module Reviews'}
    onClick={() => history.push("/module-reviews")}
  />
  <Menu.Item
    name='Interviews'
    active={activeItem === 'Interviews'}
    onClick={() => history.push("/interview-reviews")}
  />
  <Menu.Item
    name='Career Advancement'
    active={activeItem === 'Career Advancement'}
    onClick={() => history.push("/career-reviews")}
  />
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

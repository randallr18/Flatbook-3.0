import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Header, Input, Dropdown } from 'semantic-ui-react';
import history from '../../history';
import '../Reviews/ReviewNavigation.css';
// import { stateOptions } from '../../redux/types';

class ProjectNavigation extends Component {
  state = { activeItem: this.props.placeholder }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }

  render () {
    const { activeItem } = this.state
    const stateOptions = [{text: 'Module 1'}, {text: 'Module 2'}];

    return (
      <div className="background-nav">
      <Header as='h1'textAlign='center'>Projects</Header>
      <Menu pointing secondary>
        <Input focus placeholder='Search...' />
        <Dropdown placeholder='State' search selection options={stateOptions} />
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

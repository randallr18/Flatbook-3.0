import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Header } from 'semantic-ui-react';
import history from '../../history';
import './ReviewNavigation.css';

class Navigation extends Component {
  state = { activeItem: this.props.placeholder }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }

  render () {
    const { activeItem } = this.state

    return (
      <div className="background-nav">
      <Menu pointing secondary size='large'>
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
      name='Add Review'
      active={activeItem === 'logout'}
      onClick={() => history.push("/add-review")}
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

export default Navigation

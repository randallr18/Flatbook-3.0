import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import history from '../../history';
import { connect } from 'react-redux';
import { logoutUser } from '../../redux/actions';
import './Navigation.css'

class Navigation extends Component {
  state = { activeItem: this.props.placeholder }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }

  logout = () => {
    this.props.logoutUser()
    localStorage.removeItem('jwt');
    history.push("/")
  }

  render () {
    const { activeItem } = this.state

    return (
      <div className="background">
      <Menu size='large' pointing secondary>
        <Menu.Item
        name='Reviews'
        active={activeItem === 'Reviews'}
        onClick={() => history.push("/module-reviews")}
        />
        <Menu.Item
        name='Projects'
        active={activeItem === 'Projects'}
        onClick={() => history.push("/projects")}
        />
        <Menu.Item
        name='Users'
        active={activeItem === 'Users'}
        onClick={() => history.push("/users")}
        />
        <Menu.Menu position='right'>
        <Menu.Item
          name='Edit Profile'
          active={activeItem === 'logout'}
          onClick={() => history.push("/edit-profile")}
          />
        <Menu.Item
          name='Log Out'
          active={activeItem === 'logout'}
          onClick={this.logout}
          />
        </Menu.Menu>
      </Menu>
      </div>
    )
  }
}


const mapStateToProps = () => ({})

export default connect(mapStateToProps, { logoutUser })(Navigation)

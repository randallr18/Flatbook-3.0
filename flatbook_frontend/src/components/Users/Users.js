import React, { Component } from 'react';
import { connect } from 'react-redux';
import { retrieveUsers } from '../../redux/actions';
import UserDisplaySingle from './UserDisplaySingle'
import UsersNavigation from './UsersNavigation';


class User extends Component {

  populateUsers = () => {
    const allUsers = this.props.users.map(user => <UserDisplaySingle key={user.id} info={user} />);
    return allUsers;
  }



  render () {
    return (
      <div>
      <UsersNavigation />

      {this.populateUsers()}
      </div>
    )
  }

  componentDidMount() {
    this.props.retrieveUsers()
  }

}


const mapStateToProps = (state) => ({
  users: state.users
})

export default connect(mapStateToProps, { retrieveUsers } )(User)

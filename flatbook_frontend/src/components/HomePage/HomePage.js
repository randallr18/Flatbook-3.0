import React, { Component } from 'react';
import Navigation from './Navigation';
import Notification from './Notification';
import Profile from './Profile';
import { connect } from 'react-redux';
import withAuth from '../../hocs/withAuth';


class HomePage extends Component {

  render() {
    console.log(this.props.user)
    return (<div>
      <Profile user={this.props.user}/>
      <Notification />
      <Navigation />
      </div>)
  }
}

const mapStateToProps = state => ({
  user: state.user
})


export default withAuth(connect(mapStateToProps)(HomePage))



// const withAuth = WrappedComponent => {
//   class AuthorizedComponent extends React.Component {
//     render () {
//       console.log('HELLO')
//       if (localStorage.getItem('jwt') && this.props.loggedIn) {
//         return <WrappedComponent />
//       } else {
//         return <Redirect to="/" />
//         }
//       }
//     }
//
//     return AuthorizedComponent
//   }

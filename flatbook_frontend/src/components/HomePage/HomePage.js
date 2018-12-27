import React, { Component } from 'react';
import Navigation from './Navigation';
import Notification from './Notification';
import Profile from './Profile';
import { connect } from 'react-redux';
import withAuth from '../../hocs/withAuth';


class HomePage extends Component {

  render() {
    return (<div>
      <Navigation />
      <Profile user={this.props.user}/>
      </div>)
  }
}

const mapStateToProps = state => ({
  user: state.user,
  loggedIn: state.loggedIn
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

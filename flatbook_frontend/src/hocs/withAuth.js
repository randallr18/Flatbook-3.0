import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import * as actions from '../redux/actions';


const withAuth = WrappedComponent => {
  class AuthorizedComponent extends React.Component {

    // componentDidMount() {
    //   if (localStorage.getItem('jwt') && !this.props.loggedIn) this.props.fetchCurrentUser()
    // }

    render () {
      console.log('HELLO')
      if (localStorage.getItem('jwt') && this.props.loggedIn) {
        return <WrappedComponent />
      } else {
        return <Redirect to="/" />
        }
      }
    }

    return connect(mapStateToProps)(AuthorizedComponent)
  }

  const mapStateToProps = (state) => ({
    loggedIn: state.loggedIn
  })

export default withAuth

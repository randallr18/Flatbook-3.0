import React, { Component } from 'react';
import ReviewNavigation from './Navigation';
import withAuth from '../../hocs/withAuth';
import { connect } from 'react-redux';
import { retrieveReviews } from '../../redux/actions';

class ModuleReviews extends Component {

  render() {
    console.log(this.props)
    return (
      <div> HELLO<ReviewNavigation /> </div>

    )
  }

  didComponentMount() {
    this.props.retrieveReviews()
  }
}

const mapStateToProps = state => {
  reviews: state.reviews
}

export default withAuth(connect(mapStateToProps, { retrieveReviews })(ModuleReviews));

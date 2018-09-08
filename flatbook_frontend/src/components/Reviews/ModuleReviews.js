import React, { Component } from 'react';
import ReviewNavigation from './Navigation';
import withAuth from '../../hocs/withAuth';
import { connect } from 'react-redux';
import { retrieveReviews } from '../../redux/actions';
import Review from './Reviews';

class ModuleReviews extends Component {

  populateReviews = () => {
  return this.props.reviews.map(review => <Review info={review} />)
  }

  render() {
    console.log(this.props)
    return (
      <div> HELLO
      <ReviewNavigation />
      {this.populateReviews()}

      </div>

    )
  }

  componentDidMount() {
    this.props.retrieveReviews()
  }
}

const mapStateToProps = state => ({
  reviews: state.reviews
})

export default withAuth(connect(mapStateToProps, { retrieveReviews })(ModuleReviews));

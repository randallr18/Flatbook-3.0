import React, { Component } from 'react';
import ReviewNavigation from './ReviewNavigation';
import withAuth from '../../hocs/withAuth';
import { connect } from 'react-redux';
import { retrieveReviews } from '../../redux/actions';
import Review from './Reviews';

class CareerReviews extends Component {

  populateReviews = () => {
  const filteredReviews = this.props.reviews.filter(review => review.category === "Career Advancement")
  return filteredReviews.map(review => <Review key={review.id} info={review} />)
  }

  render() {
    return (
      <div>
      <ReviewNavigation placeholder={"Career Advancement"}/>
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

export default withAuth(connect(mapStateToProps, { retrieveReviews })(CareerReviews));

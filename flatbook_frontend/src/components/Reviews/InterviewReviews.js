import React, { Component } from 'react';
import ReviewNavigation from './ReviewNavigation';
import withAuth from '../../hocs/withAuth';
import { connect } from 'react-redux';
import { retrieveReviews } from '../../redux/actions';
import Review from './Reviews';
import { Header } from 'semantic-ui-react'


class InterviewReviews extends Component {

  populateReviews = () => {
  const filteredReviews = this.props.reviews.filter(review => review.category === "Interview")
  return filteredReviews.map(review => <Review key={review.id} info={review} />)
  }

  render() {
    return (
      <div>
      <ReviewNavigation placeholder={"Interviews"}/>
      <Header as='h1'textAlign='center'>Reviews</Header>
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

export default withAuth(connect(mapStateToProps, { retrieveReviews })(InterviewReviews));

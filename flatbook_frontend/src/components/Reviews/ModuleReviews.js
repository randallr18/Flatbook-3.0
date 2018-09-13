import React, { Component } from 'react';
import ReviewNavigation from './ReviewNavigation';
import withAuth from '../../hocs/withAuth';
import { connect } from 'react-redux';
import { retrieveReviews } from '../../redux/actions';
import Review from './Reviews';
import { Grid } from 'semantic-ui-react'

class ModuleReviews extends Component {

  populateReviews = () => {
  const filteredReviews = this.props.reviews.filter(review => review.category === "Module Review")
  return filteredReviews.map(review => <Review key={review.id} info={review} />)
  }

  render() {
    console.log(this.props)
    return (
      <div>
      <ReviewNavigation placeholder={"Module Reviews"}/>
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

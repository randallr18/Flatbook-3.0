import React, { Component } from 'react';
import ReviewNavigation from './ReviewNavigation';
import withAuth from '../../hocs/withAuth';
import { connect } from 'react-redux';
import { retrieveReviews } from '../../redux/actions';
import Review from './Reviews';
import { Grid, Header, Input } from 'semantic-ui-react'

class ModuleReviews extends Component {
  state = {
    search_word: ''
  }

  populateReviews = () => {
  console.log("hello")
  const filteredReviews = this.props.reviews.filter(review => review.category === "Module Review")
  const filteredBySearch = filteredReviews.filter(review => review.title.startsWith(this.state.search_word))
  return filteredBySearch.map(review => <Review key={review.id} info={review} />)
  }

  render() {
    console.log(this.state.search_word)
    return (
      <div>
      <ReviewNavigation placeholder={"Module Reviews"}/>
      <Header as='h1'textAlign='center'>Reviews</Header>
      <Input placeholder='Search...' onChange={(event) => {this.setState({search_word: event.target.value}); this.populateReviews()}}/>
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

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, Button, Segment, Container, Grid, Header } from 'semantic-ui-react';


class UserDisplaySolo extends Component {

  render () {
    console.log(this.props.userSearch);
  return (

    <div>

    <br></br><br></br>
    <Container>
    <br></br><br></br>
    <Grid columns={2}>
          <Grid.Column>
            <Image centered src={this.props.userSearch.pictures ? this.props.userSearch.pictures : "https://cdn2.vectorstock.com/i/thumb-large/80/91/person-gray-photo-placeholder-little-boy-vector-22808091.jpg"} size='medium' circular />
          </Grid.Column>
          <Grid.Column>
            <br></br><br></br>
            <Segment> <strong>Name</strong> - {this.props.userSearch.name} </Segment>
            <div className="background-info"><Segment><strong>Hometown</strong> - {this.props.userSearch.hometown}</Segment></div>
            <Segment className="background-info"><strong>Occupation</strong> - {this.props.userSearch.occupation}</Segment>
            <Segment className="background-info"><strong>Fun Fact</strong> - {this.props.userSearch.fun_fact}</Segment>
          </Grid.Column>
        </Grid>
        <br></br><br></br><br></br><br></br>

        <Segment>

        <Header textAlign='center' as='h3'>Personal Journey</Header>
        <br></br>
        {this.props.userSearch.story}
        </Segment>
    </Container>

    </div>
  )
  }
}

const mapStateToProps = (state) => ({
  userSearch: state.userSearch
})

export default connect(mapStateToProps)(UserDisplaySolo);

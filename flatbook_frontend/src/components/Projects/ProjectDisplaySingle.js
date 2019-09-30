import React, { Component } from 'react';
import { Segment, Header, Image, Grid, Container } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { updateUserSearch } from '../../redux/actions';
import history from '../../history';


class ProjectDisplaySingle extends Component {

  addLike = () => {
  }

  handleSearchUser = () => {
    this.props.updateUserSearch(this.props.project.users[0]);
    history.push("/usersearch");
  }

  render () {
    return (
      <Segment text>
      <Header textAlign='center' as='h2'>{this.props.project.name}</Header>
      <Grid columns={2} relaxed>
        <Grid.Column>

          <Header textAlign='center' as='h2'>
            <Image onClick={this.handleSearchUser} circular className="moveimage" width="65" height="65" src={this.props.project.users[0].pictures ? this.props.project.users[0].pictures : "https://www.incipioworks.com/wp-content/uploads/2015/07/profile-picture-placeholder.png"} />
          </Header>
          <Container textAlign='center'> {this.props.project.users[0].name}</Container>
          <br></br>
        </Grid.Column>
        <Grid.Column>
        <br></br>
          <Container><strong >Category</strong> - {this.props.project.category}</Container>
          <br></br>
        </Grid.Column>
      </Grid>
      <Container><strong >Github Link</strong> - <a href={this.props.project.github} target="_blank">{this.props.project.github}</a></Container>
      <Segment>
      <Header textAlign='left' as='h4'>Description</Header>
      {this.props.project.description}
      </Segment>
      </Segment>
    )
  }
}

const mapStateToProps = (state) => ({
})


export default connect(mapStateToProps, {updateUserSearch })(ProjectDisplaySingle);


// <Button as='div' labelPosition='right'>
// <Button icon onClick={this.addLike}>
//   <Icon name='heart' />
//   Like
// </Button>
//
// <Label as='a' basic pointing='left'>
//   {this.props.project.project_likes.length}
// </Label>
// </Button>

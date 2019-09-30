import React, { Component } from 'react';
import { Header, Image, Grid, Segment, Button, Icon, Label, Checkbox, Comment, Form } from 'semantic-ui-react';
import UserDisplaySolo from './UserDisplaySolo';
import { connect } from 'react-redux';
import { updateUserSearch } from '../../redux/actions';
import history from '../../history';



class UserDisplaySingle extends Component {

  handleSearchUser = () => {
    this.props.updateUserSearch(this.props.info);
    history.push("/usersearch");
  }

  render () {


    return (
      <div>

      <Grid columns='equal'>
        <Grid.Column width={1}>
        </Grid.Column>
        <Grid.Column >



        <Segment text secondary >

        <Grid columns={3} relaxed>

          <Grid.Column>
              <Image onClick={this.handleSearchUser} circular className="moveimage" width="65" height="65" src={this.props.info.pictures ? this.props.info.pictures : "https://www.incipioworks.com/wp-content/uploads/2015/07/profile-picture-placeholder.png"} />
          </Grid.Column>

          <Grid.Column>
            <Header textAlign="center" className="moveheader" as='h1'>{this.props.info.name}</Header>
          </Grid.Column>

          <Grid.Column>
          <br></br>
          </Grid.Column>
        </Grid>

        <br></br>
        <p className="body">{this.props.info.story}</p>
        <br></br>
        </Segment>





        </Grid.Column>
        <Grid.Column width={1}>
        </Grid.Column>


      </Grid>



      </div>
    )
  }
}


const mapStateToProps = (state) => ({
})

export default connect(mapStateToProps, { updateUserSearch })(UserDisplaySingle);

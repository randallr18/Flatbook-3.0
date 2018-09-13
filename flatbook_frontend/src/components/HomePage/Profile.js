import React from 'react';
import { connect } from 'react-redux';
import withAuth from '../../hocs/withAuth';
import { Image, Button, Segment, Container, Grid, Header } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import ReroutingButton from './ReroutingButton';



const Profile = (props) => {

  return (
    <div>
    <br></br><br></br>
    <Container>
    <br></br><br></br>
    <Grid columns={2}>
          <Grid.Column>
            <Image centered src={props.user.pictures ? props.user.pictures : "https://www.incipioworks.com/wp-content/uploads/2015/07/profile-picture-placeholder.png"} size='medium' circular />
          </Grid.Column>
          <Grid.Column>
            <Segment > <strong>Name</strong> - {props.user.name} </Segment>
            <Segment ><strong>Hometown</strong> - {props.user.hometown}</Segment>
            <Segment ><strong>Occupation</strong> - {props.user.occupation}</Segment>
            <Segment ><strong>Fun Fact</strong> - {props.user.fun_fact}</Segment>
          </Grid.Column>
        </Grid>
        <br></br><br></br>
        <Segment>
        <Header textAlign='left' as='h3'>Story</Header>
        <br></br>
        {props.user.story}
        </Segment>
</Container>


    </div>
  )
}

export default withRouter(Profile)




// <Segment vertical>Name - {props.user.name} </Segment>
// <Segment vertical>Hometown - {props.user.hometown}</Segment>
// <Segment vertical>Occupation - {props.user.occupation}</Segment>
// <Image src={props.user.pictures ? props.user.pictures : "https://www.incipioworks.com/wp-content/uploads/2015/07/profile-picture-placeholder.png"} size='medium' circular />
// <br></br><br></br>
// Name {props.user.name}
// <br></br><br></br>
// Hometown {props.user.hometown}
// <br></br><br></br>
// Occupation {props.user.occupation}
// <br></br><br></br>
// Fun Fact {props.user.fun_fact}
// <br></br>
// <br></br>
// <ReroutingButton />
// <br></br>
// <br></br>
    // <Segment vertical>Te eum doming eirmod, nominati pertinacia argumentum ad his.</Segment>
    // <Segment vertical>Pellentesque habitant morbi tristique senectus.</Segment>
    // <Segment vertical>Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id.</Segment>

// <Button onClick={() => {history.push('/edit-profile')}}>Edit</Button>


// const mapStateToProps = state => ({
//   user: state.user
// })
//
// export default withAuth(connect(mapStateToProps)(Profile))

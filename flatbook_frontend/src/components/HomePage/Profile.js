import React from 'react';
import { connect } from 'react-redux';
import withAuth from '../../hocs/withAuth';
import { Image, Button } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import ReroutingButton from './ReroutingButton';



const Profile = (props) => {


  console.log(props)
  return (
    <div>
    <Image src={"https://www.incipioworks.com/wp-content/uploads/2015/07/profile-picture-placeholder.png"} size='medium' circular />
    <br></br><br></br>
    Name {props.user.name}
    <br></br><br></br>
    Hometown {props.user.hometown}
    <br></br><br></br>
    Occupation {props.user.occupation}
    <br></br><br></br>
    Fun Fact {props.user.fun_fact}
    <br></br>
    <br></br>
    <ReroutingButton />
    <br></br>
    <br></br>

    </div>
  )
}

export default withRouter(Profile)

// <Button onClick={() => {history.push('/edit-profile')}}>Edit</Button>


// const mapStateToProps = state => ({
//   user: state.user
// })
//
// export default withAuth(connect(mapStateToProps)(Profile))

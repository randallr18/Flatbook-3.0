import React from 'react';
import { connect } from 'react-redux';
import withAuth from '../../hocs/withAuth';



const Profile = (props) => {

  return (
    <div>
    <img src={"https://www.incipioworks.com/wp-content/uploads/2015/07/profile-picture-placeholder.png"}/>
    <br></br><br></br>
    Name {props.user.name}
    <br></br><br></br>
    Hometown {props.user.hometown}
    <br></br><br></br>
    Occupation {props.user.occupation}
    <br></br><br></br>
    Fun Fact {props.user.fun_fact}
    <br></br><br></br>

    </div>
  )
}

export default Profile

// const mapStateToProps = state => ({
//   user: state.user
// })
//
// export default withAuth(connect(mapStateToProps)(Profile))

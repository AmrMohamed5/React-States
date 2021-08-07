import React, { Component } from 'react';
import myImage from './amr.jpg'
class Profile extends Component {
    state = {
        fullName:'Amr Mohamed',
      bio: 'Web Developer ',
      profession: 'Frontend Developer',
    }
    componentDidMount () {
        this.props.reset()
    }

    render() { 
        return ( 
            <div>
                <div>
                <img src={myImage} alt ='myImage' />
                <h1>{this.state.fullName}</h1>
                <h3>{this.state.bio}</h3>
                <h5>{this.state.profession}</h5>
                </div>
            </div>
         )
    }
}
 
export default Profile;
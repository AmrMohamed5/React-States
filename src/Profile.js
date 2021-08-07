import React, { Component } from 'react';
import myImage from './amr.jpg'
class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            fullName:'Amr Mohamed',
            bio: 'Web Developer ',
            profession: 'Frontend Developer',
            show: true,
            count:0,
         }
    }
    toggle = () => {
        this.setState({
            show: !this.state.show
        })  
    }
    componentDidMount () {
        this.myInterval = setInterval (() => {
            this.setState({
                count: this.state.count + 1 
            })
        },1000)
}
    componentWillUnmount () {
        clearInterval(this.myInterval)
    }
    render() { 
        return ( 
            <div>
                    {this.state.show &&
                <div>
                <img src={myImage} alt ='myImage' />
                <h1>{this.state.fullName}</h1>
                <h3>{this.state.bio}</h3>
                <h5>{this.state.profession}</h5>
                <p>The component has been rendered for {this.state.count} seconds</p>
                </div>}
                <button className='btn btn-primary' onClick={this.toggle}>{this.state.show === true ? 'Hide': 'Show'}</button>
            </div>
         );
    }
}
 
export default Profile;
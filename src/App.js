import './App.css';
import Profile from './Profile';
import React, { Component } from 'react';
class APP extends Component {
  state = {  
      show: false,
      count:0,
  }
  myinterval = null;
  
reset = () => {
  this.setState((prev) => ({...prev , count : 0}))
  clearInterval(this.myinterval)
  this.myinterval = setInterval(() => {
    this.setState((prev) => ({...prev, count: prev.count + 1}))
  }, 1000);
}
  render() { 
    return (  
      <>
      {this.state.show && <Profile reset={this.reset} />}
      <button className='btn btn-primary' onClick={() => this.setState((prev) => ({...prev, show: !prev.show}))}>{this.state.show === true ? 'Hide': 'Show'}</button>
      <p>The component has been rendered for {this.state.count} seconds</p>
      </>
    );
  }
}
 
export default APP;

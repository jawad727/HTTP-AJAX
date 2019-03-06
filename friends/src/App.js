import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import FriendsList from './FriendsList'

class App extends React.Component {

  state = {
    error: "you did it wrong",
    friends: []
  }

  componentDidMount() {
    axios
    .get('http://localhost:5000/friends')
    .then(res => {
      console.log(res.data);
      this.setState({ friends: res.data })
    })
    .catch(err => {
      this.setState({ error: err })
    })
  }

  render() {
    return (
      <div className="App">
        
      <h1>Your Friends List</h1>
        
      <FriendsList friends={this.state.friends}/>

      </div>
    );
  }
}

export default App;

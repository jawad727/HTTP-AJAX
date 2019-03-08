import React from 'react';
import './App.css';
import axios from 'axios';
import FriendsList from './FriendsList'
import FriendsForm from './FriendsForm'

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


  addFriend = (event, friend) => {
    event.preventDefault();
    axios 
      .post('http://localhost:5000/friends', friend)
      .then(res => 
        this.setState({
          friends: res.data
        })) 
        .catch(err => console.log(err));
  }


  render() {
    return (
      <div className="App">
        
      <h1>Your Friends List</h1>
        
      <FriendsList friends={this.state.friends}/>
      <FriendsForm addFriend={this.addFriend} friend={this.state.friends}/>

      </div>
    );
  }
}

export default App;


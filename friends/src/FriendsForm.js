import React from 'react'

class FriendsForm extends React.Component {

    state = {
        friend: {

        name: '',
        age: '',
        email: '',

        }
    }

    changeHandler = event => {
        event.persist();
        this.setState(prevState => ({
            friend: {
                ...prevState.friend,
                [event.target.name]: event.target.value
            }
        }))
    }

    handleSubmit = event => {
        this.props.addFriend(event, this.state.friend)
        this.setState({
            friend: {
            name: "",
            age: "",
            email: "" 
        }
        })
    }

    render() {
        return(
            <div>

                <h2>Add a friend!</h2>
                <form onSubmit = {this.handleSubmit}>
                   <input
                    type = 'text'
                    name = 'name'
                    placeholder = 'Name'
                    onChange = {this.changeHandler}
                    value = {this.state.friend.name}
                   /> 
                   <br />
                   <input
                    type = 'number'
                    name = 'age'
                    placeholder = 'Age'
                    onChange = {this.changeHandler}
                    value = {this.state.friend.age}
                   /> 
                   <br />
                   <input
                    type = 'text'
                    name = 'email'
                    placeholder = 'Email'
                    onChange = {this.changeHandler}
                    value = {this.state.friend.email}
                   /> 
                   
                </form>
                <button>Add</button>
            </div>
        )
    }







}


export default FriendsForm
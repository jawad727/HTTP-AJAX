import React from 'react';

const FriendsList = props => {

    return (
        <div>
            {props.friends.map( item =>
                <div key={item.id}>
                    <p> {item.name} </p>
                    <p> {item.email}</p>
                    <p> {item.age}</p>
                </div>
            )}
        </div>
    )
   

}

export default FriendsList
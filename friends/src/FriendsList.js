import React from 'react';

const FriendsList = props => {

    return (
        <div>
            {props.friends.map( item =>
                <div key={item.id}>
                    <p> {item.name} </p>
                    
                </div>
            )}
        </div>
    )
   

}

export default FriendsList
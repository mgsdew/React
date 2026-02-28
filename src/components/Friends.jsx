import { use } from "react"

export default function Friends({ friendsPromise }) {

    const friends = use(friendsPromise)
    // console.log(friends)    
    const friend = friends.map(friend => {
        return <p key={friend.id}> Name: {friend.name}</p>
    })
    console.log(friend)
    return (
        <div className="card_friends">
            <h2>Friends: {friends.length}</h2>
            <ul>{friend}</ul>
        </div>
    )
}
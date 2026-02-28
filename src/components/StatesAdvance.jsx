import { use, useEffect, useState } from "react"


export default function StatesAdvance(){

   const [users, setUsers] = useState([])
   useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
   }, [])


    return(
        <div className="card_states">
            <h2> Exploring useEffect by User Data: {users.length}</h2>
            <ol>
                {users.map(user => 
                     <li key={user.id}>{user.name} - {user.email} - {user.phone}</li>
                )}
            </ol>
        </div>
    )
}
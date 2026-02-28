import { Suspense } from "react"
import Users from "./Users"
import Friends from "./Friends"
import Posts from "./Posts"

/* Using JavaScript Fetching */
// const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
//   .then(res => res.json())

  /* Using Promise */
// const fetchFriends = async() => {
//     const res = await fetch('https://jsonplaceholder.typicode.com/users')
//     return res.json()
// }

const fetchPosts = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    return res.json()
}

export default function SuspenseBasic() {

    // const friendsPromise = fetchFriends()

    const postsPromise = fetchPosts()

  return (
    <div className="card_suspense">
      <h1>Suspense Basic</h1>

      {/* <Suspense fallback={<h2>Loading...</h2>}>
        <Users fetchUsers={fetchUsers} />
      </Suspense> */}

      {/* <Suspense fallback={<h2>Friends are in party...</h2>}>
        <Friends friendsPromise={friendsPromise} />
      </Suspense> */}

      <Suspense fallback={<h4>Posts are loading...</h4>}>
        <Posts postsPromise={postsPromise} />
      </Suspense>
    </div>
  )
}
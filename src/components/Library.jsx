import Books from "./Books"


function Library({books}) {
  return (
    <>
      <h2>Central Library of Auckland</h2>
      <p>Address: 44-46 Lorne Street, Auckland CBD</p>
      <p>Books Collection: {books.length}</p>
      <ul>
        {
           books.map(book => <Books book={book}></Books>)
        }
      </ul>
    </>
  )
}

export default Library 
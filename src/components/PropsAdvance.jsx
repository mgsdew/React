import ToDo from './ToDo'
import Fruits from './Fruits'
import Library from './Library'


export default function PropsAdvance() {

  const fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes"]

  const fruitList = [
    {name: "Apple", quantity: 5},
    {name: "Banana", quantity: 10},
    {name: "Orange", quantity: 8},
    {name: "Mango", quantity: 3},
    {name: "Grapes", quantity: 12}
  ]

  const books = [
    {id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald"},
    {id: 2, title: "To Kill a Mockingbird", author: "Harper Lee"},
    {id: 3, title: "1984", author: "George Orwell"},
    {id: 4, title: "Pride and Prejudice", author: "Jane Austen"},
    {id: 5, title: "The Catcher in the Rye", author: "J.D. Salinger"}
  ]

    return (

        <div>
            {/* <ToDo task="Buy groceries" isDone={false}></ToDo> 
            <ToDo task="Buy groceries" isDone={true} time={5}></ToDo>  */}

            
             
             {/* // Send Array as Props
              {fruits.map(fruit => <Fruits fruit={fruit}></Fruits>) } */}


            {/* // Send Array of Objects as Props
            { fruitList.map(fruit => <Fruits fruit={fruit}></Fruits>) }   */}
            

            {/* // Send Array of Objects as Props with Unique Key
            {<Library books={books}></Library> }  */}
        </div>
    )
}
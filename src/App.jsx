import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Props from './components/PropsBasic'
import ToDo from './components/ToDo'
import Fruits from './components/Fruits'
import Library from './components/Library'
import './App.css'

function App() {

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
    <> 
     <nav>
        <Link to="/">Home</Link> | &nbsp;
        <Link to="/props">Props Example</Link>
      </nav>
      <Routes>
        <Route path="/" element={<h1>Welcome to React Core Concepts</h1>} />
        <Route path="/props" element={<Props />} />
      </Routes>

      
    {
    
      /* <ToDo task="Buy groceries" isDone={false}></ToDo> 
      <ToDo task="Buy groceries" isDone={true} time={5}></ToDo> */

     
      // Send Array as Props
      //  fruits.map(fruit => <Fruits fruit={fruit}></Fruits>) 


      // Send Array of Objects as Props
      //  fruitList.map(fruit => <Fruits fruit={fruit}></Fruits>)

      <Library books={books}></Library>

    }

    </>
  )
}


export default App

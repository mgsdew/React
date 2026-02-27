import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import PropsBasic from './components/PropsBasic'
import PropsAdvance from './components/PropsAdvance'
import EventsHandling from './components/EventsHandling'
import StatesBasic from './components/StatesBasic'
import './App.css'

function App() {

  return (
    <> 
     <nav>
        <Link to="/">Home</Link> | &nbsp;
        <Link to="/props">Props Basic</Link> | &nbsp;
        <Link to="/props-advance">Props Advance</Link> | &nbsp;
        <Link to ="/events">Events Handling</Link>
      </nav>
      <Routes>
        <Route path="/" element={<h1> React Core Concepts</h1>} />
        <Route path="/props" element={<PropsBasic />} />
        <Route path="/props-advance" element={<PropsAdvance />} />
        <Route path="/events" element={<EventsHandling />} />
      </Routes>

    
      <StatesBasic></StatesBasic>

    </>
  )
}


export default App

import { Routes, Route, Link } from 'react-router-dom'
import PropsBasic from './components/PropsBasic'
import PropsAdvance from './components/PropsAdvance'
import EventsHandling from './components/EventsHandling'
import StatesBasic from './components/StatesBasic'
import StatesAdvance from './components/StatesAdvance'
import SuspenseBasic from './components/SuspenseBasic'
import Countries from './components/Countries/Countries'
import Operations from './components/Operations'
import SimpleForm from './components/SimpleForm'
import FormAction from './components/FormAction'
import HookForm from './components/HookForm'
import ProductManagement from './components/Products/ProductManagement'
import './App.css'
import { Suspense } from 'react'

function App() {

   const countriesPromise = fetch('https://openapi.programming-hero.com/api/all')
                        .then(res => res.json())


  return (
    <> 
     <nav>
        <Link to="/">Home</Link> | &nbsp;
        <Link to="/props">Props (Basic)</Link> | &nbsp;
        <Link to="/props-advance">Props (Advance)</Link> | &nbsp;
        <Link to ="/events">Events Handling</Link> | &nbsp;
        <Link to ="/states">States (Basic)</Link> | &nbsp;
        <Link to ="/states-advance">States (Advance)</Link> | &nbsp;
        <Link to ="/suspense">Suspense</Link>  | &nbsp;
        <Link to ="/countries">Countries</Link> | &nbsp;
        <Link to ="/operations">Operations</Link> | &nbsp;
        <Link to="/simple-form">Simple Form</Link> | &nbsp;
        <Link to="/form-action">Action Form</Link> | &nbsp;
        <Link to="/hook-form">Form with Hook</Link> | &nbsp;
        <Link to="/product-management">Product CRUD</Link>

      </nav>
      <Routes>
        <Route path="/" element={<h1> React Core Concepts</h1>} />
        <Route path="/props" element={<PropsBasic />} />
        <Route path="/props-advance" element={<PropsAdvance />} />
        <Route path="/events" element={<EventsHandling />} />
        <Route path="/states" element={<StatesBasic />} />
        <Route path="/states-advance" element={<StatesAdvance />} />
        <Route path="/suspense" element={<SuspenseBasic />} />
        <Route path="/countries" element={
          <Suspense fallback={<h1>Loading Countries Data...</h1>}>
            <Countries countriesPromise={countriesPromise} />
          </Suspense>
        } />
        <Route path="/operations" element={<Operations />} />
        <Route path="/simple-form" element={<SimpleForm />} />
        <Route path="/form-action" element={<FormAction />} />
        <Route path="/hook-form" element={<HookForm />} />
        <Route path="/product-management" element={<ProductManagement />} />
      </Routes>
    </>
  )
}


export default App

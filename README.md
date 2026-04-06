# React Core Concepts with Vite

This project demonstrates various React core concepts using Vite as the build tool. It includes examples of props, state management, event handling, Suspense, and more.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Features

This project includes the following components demonstrating React concepts:

- **PropsBasic** Passing data from parent to child components through props.
  - Example ([src/components/PropsBasic.jsx](src/components/PropsBasic.jsx)): Parent component sends person, age, and professional data to Person, and sends name/professional/country to Player. Person reads values from props.person and props.age, while Player uses destructured props.

- **PropsAdvance** Passing structured data (arrays and objects) and rendering dynamic child lists.
  - Example ([src/components/PropsAdvance.jsx](src/components/PropsAdvance.jsx), [src/components/Library.jsx](src/components/Library.jsx)): PropsAdvance creates a books array of objects, passes it to Library, and Library maps books to Books components using a unique key (book.id).

- **EventsHandling** Attaching functions to UI events like button clicks.
  - Example ([src/components/EventsHandling.jsx](src/components/EventsHandling.jsx)): EventsHandling uses onClick with named handlers, inline arrow functions, and argument passing via onClick={() => handleClick3(10)}.

- **StatesBasic** Managing local, mutable UI data with useState.
  - Example ([src/components/StatesBasic.jsx](src/components/StatesBasic.jsx)): The cricket score component tracks runs, fours, and sixes using separate state variables, updates them in handleRuns, and conditionally shows "Your score: 50" when runs >= 50.

- **StatesAdvance** Combining state with side effects to fetch remote data.
  - Example ([src/components/StatesAdvance.jsx](src/components/StatesAdvance.jsx)): StatesAdvance initializes users with useState([]), fetches user data from JSONPlaceholder inside useEffect, then maps users into a rendered list.

- **SuspenseBasic** Rendering asynchronous UI with Suspense fallback boundaries.
  - Example ([src/components/SuspenseBasic.jsx](src/components/SuspenseBasic.jsx), [src/components/Posts.jsx](src/components/Posts.jsx)): SuspenseBasic creates postsPromise with fetchPosts() and renders Posts inside <Suspense fallback={<h4>Posts are loading...</h4>}>, so fallback content appears while data resolves.

- **Countries** Async data rendering with interactive state plus localStorage persistence.
  - Example ([src/components/Countries/Countries.jsx](src/components/Countries/Countries.jsx), [src/components/Country/Country.jsx](src/components/Country/Country.jsx), [src/utilities/localStorage.js](src/utilities/localStorage.js)): Countries reads countries data with use(countriesPromise), tracks visited country IDs in localStorage through addCountriesToLocalStorage, and Country toggles visited UI and can append visited flags.

- **Forms**
  - **SimpleForm** Form handling with component state and submit prevention.
    - Example ([src/components/SimpleForm.jsx](src/components/SimpleForm.jsx)): SimpleForm updates password and error states on input change and validates minimum password length before showing an error message.
  - **FormAction** Form handling with refs to read input DOM values directly.
    - Example ([src/components/FormAction.jsx](src/components/FormAction.jsx)): FormAction uses emailRef.current.value and passwordRef.current.value inside handleFormSubmit after e.preventDefault().
  - **HookForm** Reusable form field state via a custom hook.
    - Example ([src/components/HookForm.jsx](src/components/HookForm.jsx), [src/hooks/useInputFields.jsx](src/hooks/useInputFields.jsx)): HookForm uses useInputFields three times (name/email/password), then logs all field values on submit.

- **Books, Friends, Fruits, Library, Post, Posts, ToDo, Users** Smaller focused components that demonstrate list rendering, conditional UI, and async rendering helpers.
  - Examples:
    - Library maps book objects to Books and displays title/author ([src/components/Library.jsx](src/components/Library.jsx), [src/components/Books.jsx](src/components/Books.jsx)).
    - Posts uses use(postsPromise) and maps each post to Post cards ([src/components/Posts.jsx](src/components/Posts.jsx), [src/components/Post.jsx](src/components/Post.jsx)).
    - ToDo uses a ternary operator to render "Is Done: Yes" or "Is Done: No" with time taken ([src/components/ToDo.jsx](src/components/ToDo.jsx)).
    - Fruits shows object prop destructuring with fruit: { name, quantity } ([src/components/Fruits.jsx](src/components/Fruits.jsx)).
    - Users and Friends demonstrate use() for promise-based data rendering ([src/components/Users.jsx](src/components/Users.jsx), [src/components/Friends.jsx](src/components/Friends.jsx)).

## Custom Hooks

- **useInputFields**: A custom hook to manage state for input fields, demonstrating reusable logic.

## Code Alignment & Modern React Features

All code files in this project are aligned and follow consistent formatting for readability and maintainability.

For data fetching and asynchronous operations, this project uses the new `use()` and `<Suspense>` features introduced in the latest React versions, instead of the traditional `useEffect()` approach. This enables better handling of async logic and leverages React's concurrent rendering capabilities.

For more details on `use()` and `<Suspense>`, see the [React Suspense documentation](https://react.dev/reference/react/Suspense) and [React use() documentation](https://react.dev/reference/react/use).

## Core Concepts & Definitions

### What is Props?

**Props** are read-only properties passed from a parent component to a child component. They allow you to pass data and functions down the component tree.

**Example:** [PropsBasic.jsx](src/components/PropsBasic.jsx)
```jsx
// Parent component passes props
<Person person={person1} age={person1Age} professional={person1Professional}></Person>

// Child component receives and uses props
function Person(props) {
  return <h2>I'm {props.person} and my age is {props.age}</h2>
}
```

### What is State?

**State** is mutable data that belongs to a component. Unlike props, state can be modified and causes the component to re-render when it changes. State is managed within the component itself.

**Example:** [StatesBasic.jsx](src/components/StatesBasic.jsx)
```jsx
// runs, fours, and sixes are state variables
const [runs, setRuns] = useState(0);
const [fours, setFours] = useState(0);
const [sixes, setSixes] = useState(0);
```

### What is useState?

**useState** is a React Hook that lets you add state to functional components. It returns an array with two values: the current state value and a function to update it.

**Syntax:** `const [value, setValue] = useState(initialValue)`

**Example:** [StatesBasic.jsx](src/components/StatesBasic.jsx)
```jsx
const [runs, setRuns] = useState(0);  // 0 is the initial value

const handleRuns = (run) => { 
    const updateRuns = runs + run;
    setRuns(updateRuns);  // Update state
}
```

### What is useEffect?

**useEffect** is a React Hook that lets you perform side effects in functional components, such as fetching data, setting up subscriptions, or updating the document title. It runs after the component renders.

**Syntax:** `useEffect(() => { /* side effect */ }, [dependencies])`

**Example:** [StatesAdvance.jsx](src/components/StatesAdvance.jsx)
```jsx
import { useState, useEffect } from "react"

const [users, setUsers] = useState([])
useEffect(() => {
    // Side effect: Fetch data from an API
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
}, [])  // Empty dependency array means this runs once on mount
```

### What is Suspense?

**Suspense** is a React component that lets you "suspend" rendering until asynchronous data is ready. It displays a fallback UI (like a loading message) while the component is loading.

**Example:** [SuspenseBasic.jsx](src/components/SuspenseBasic.jsx)
```jsx
import { Suspense } from "react"
import Posts from "./Posts"

const postsPromise = fetchPosts()

<Suspense fallback={<h4>Posts are loading...</h4>}>
    <Posts postsPromise={postsPromise} />
</Suspense>
```
When `Posts` is loading, the fallback `<h4>Posts are loading...</h4>` is displayed instead.

### What is use()?

**use()** is a React Hook that unwraps the value of a promise, allowing you to read promise data directly in your component. It works with Suspense to handle loading states automatically.

**Example:** [Countries.jsx](src/components/Countries/Countries.jsx)
```jsx
import { use } from 'react'

const Countries = ({ countriesPromise }) => {
    const countriesData = use(countriesPromise)  // Unwraps the promise
    const countries = countriesData.countries
    // Now you can use 'countries' directly
}
```

### What is map()?

**map()** is a JavaScript Array method that transforms each element in an array and returns a new array. In React, it's commonly used to render lists of components.

**Syntax:** `array.map(element => /* return new element */)`

**Example:** [StatesAdvance.jsx](src/components/StatesAdvance.jsx)
```jsx
{users.map(user => 
     <li key={user.id}>{user.name} - {user.email} - {user.phone}</li>
)}
```

**Example:** [PropsAdvance.jsx](src/components/PropsAdvance.jsx)
```jsx
const books = [
    {id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald"},
    {id: 2, title: "To Kill a Mockingbird", author: "Harper Lee"},
    // ... more books
]

// Map books to Book components
{books.map(book => <Books key={book.id} book={book}></Books>)}
```

### What is the Spread Operator (...)?

**The spread operator (...)** allows an iterable (like an array or object) to be expanded in places where zero or more elements are expected. It's useful for creating copies of arrays/objects or combining them.

**Example:** [Countries.jsx](src/components/Countries/Countries.jsx)
```jsx
const newVisitedCountries = [...visitedCountries, country]
// Creates a new array with all previous countries plus the new one

const newVisitedCountriesFlag = [...visitedCountriesFlag, visitedFlags]
// Spreads previous flags and adds a new flag
```

### What is Destructuring?

**Destructuring** is a JavaScript syntax that allows you to extract values from objects or arrays and assign them to variables in a concise way.

**Example (Object Destructuring):** [Fruits.jsx](src/components/Fruits.jsx)
```jsx
// Instead of: props.fruit.name and props.fruit.quantity
// Destructure directly in the function parameter:
export default function Fruits({fruit: {name, quantity}}) {
    return <li>Fruit Name: {name}, Quantity: {quantity}</li>
}
```

**Example (Simple Destructuring):** [PropsBasic.jsx](src/components/PropsBasic.jsx)
```jsx
// Destructuring function parameters
function Player({ name, professional, country }) {
    return <h3>Name: {name}</h3>
}
```

**Example (Array Destructuring):**
```jsx
const [runs, setRuns] = useState(0)
// 'runs' and 'setRuns' are destructured from the array returned by useState
```

### What is Function Handling?

**Function Handling** refers to attaching functions to user interactions (like clicks, form submissions) and defining how the component responds to those events.

**Types of Event Handlers:**

1. **Named Function Handler:**
```jsx
function handleClick() {
    alert("Button Clicked!")
}
<button onClick={handleClick}>Click Me</button>
```

2. **Arrow Function Handler:**
```jsx
const handleClick2 = () => {
    alert("Second Button Clicked!")
}
<button onClick={handleClick2}>Click Me Too!</button>
```

3. **Inline Arrow Function with Arguments:**
```jsx
const handleClick3 = (num) => {
    const result = num * 2;
    alert(`The result is: ${result}`)
}
<button onClick={() => handleClick3(10)}>Button 3</button>
```

4. **Inline Alert Handler:**
```jsx
<button onClick={() => alert('Clicked from Inside Button')}>Button 3</button>
```

**Example:** [EventsHandling.jsx](src/components/EventsHandling.jsx) demonstrates all these patterns.

### What is usePromise (Custom Hook)?

**usePromise** is a custom hook (not a built-in React hook) that manages promise-based data fetching in components. In this project, we use the `use()` hook instead of creating a custom usePromise.

However, you can create a custom hook for reusable field state management:

**Example:** [useInputFields.jsx](src/hooks/useInputFields.jsx)
```jsx
const useInputFields = (defaultValues) => {
    const [fieldValue, setFieldValue] = useState(defaultValues);
    
    const handleFieldOnChange = (e) => {
        setFieldValue(e.target.value);
    }
    
    return [fieldValue, handleFieldOnChange];
};
```

**Used in:** [HookForm.jsx](src/components/HookForm.jsx)
```jsx
const [name, handleNameChange] = useInputFields('');
const [email, handleEmailChange] = useInputFields('');
const [password, handlePasswordChange] = useInputFields('');
```

## Live Demo

View the live deployment at: [https://react-dew.netlify.app/](https://react-dew.netlify.app/)

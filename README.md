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

## Live Demo

View the live deployment at: [https://react-dew.netlify.app/](https://react-dew.netlify.app/)

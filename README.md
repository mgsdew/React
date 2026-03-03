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

- **PropsBasic**: Basic usage of props in React components
- **PropsAdvance**: Advanced props techniques including prop drilling and context
- **EventsHandling**: Handling user events and interactions
- **StatesBasic**: Fundamental state management with useState
- **StatesAdvance**: Advanced state patterns and state lifting
- **SuspenseBasic**: Using Suspense for loading states and async operations
- **Countries**: Fetching country data with Suspense and conditional styling
- **Books, Friends, Fruits, Library, Post, Posts, ToDo, Users**: Additional components for various React patterns

## Code Alignment & Modern React Features

All code files in this project are aligned and follow consistent formatting for readability and maintainability.

For data fetching and asynchronous operations, this project uses the new `use()` and `<Suspense>` features introduced in the latest React versions, instead of the traditional `useEffect()` approach. This enables better handling of async logic and leverages React's concurrent rendering capabilities.

For more details on `use()` and `<Suspense>`, see the [React Suspense documentation](https://react.dev/reference/react/Suspense) and [React use() documentation](https://react.dev/reference/react/use).

## Live Demo

View the live deployment at: [https://euphonious-sorbet-98f0b2.netlify.app/](https://euphonious-sorbet-98f0b2.netlify.app/)

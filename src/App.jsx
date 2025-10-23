import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { RouterApp } from './router/RouterApp'

function App() { 
  return (
    <RouterProvider router={createBrowserRouter(RouterApp)} />
  )
}

export default App;

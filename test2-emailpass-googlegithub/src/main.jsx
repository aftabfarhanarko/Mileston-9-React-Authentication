import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './Components/Root.jsx'
import Home from './Components/Home.jsx'
import Loging from './Components/Loging.jsx'
import Register from './Components/Register.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path:"/",
    Component: Root,
    children:[
      {
        index:true,
        Component: Home
      },
      {
        path:"/loging",
        Component: Loging
      },
      {
        path:"/register",
        Component: Register,
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)

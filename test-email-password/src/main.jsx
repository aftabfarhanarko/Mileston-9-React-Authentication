import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './Compontns/Root/Root.jsx'
import Home from './Compontns/Home/Home.jsx'
import Loging from './Compontns/Loging/Loging.jsx'
import Regster from './Compontns/Regster/Regster.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    Component: Root,
    children:[
      {
        index:true,
        Component:Home
      },
      {
        path:"/loging",
        Component : Loging
      },
      {
        path:"/register",
        Component: Regster
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)

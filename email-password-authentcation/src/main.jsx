import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './Layouts/Root.jsx'
import Home from './Components/Home/Home.jsx'
import Loging from './Components/Loging/Loging.jsx'
import Register from './Components/Register/Register.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    Component:Root,
    children:[
      {
        index:true,
        Component:Home
      },
      {
        path:"/loging",
        Component:Loging
      },
      {
        path:"/registion",
        Component: Register
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)

import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter,RouterProvider } from 'react-router'
// import ReactDOM from 'react-dom/client'

const Body = () => {

const appRouter =createBrowserRouter([
    {
        path:"/",
        element:<Login />
    },
    {
        path:"/browse",
        element:<Browse />
    },
])

  return (
    <>
    <RouterProvider router={appRouter} />
    </>
  )
}

export default Body
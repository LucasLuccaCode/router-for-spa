import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

// Import pages
import Root from "./pages/root"
import ErrorPage from "./pages/error-page"

// Import pages root
import Tasks, {
  loader as tasksLoader
} from "./pages/root/tasks"

import Users, {
  loader as usersLoader
} from "./pages/root/users"

import Comments, {
  loader as commentsLoader
} from "./pages/root/comments"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Tasks />,
        loader: tasksLoader
      },
      { 
        path: "/",
        element: <Tasks />,
        loader: tasksLoader
      },
      { 
        path: "/users",
        element: <Users />,
        loader: usersLoader
      },
      { 
        path: "/comments",
        element: <Comments />,
        loader: commentsLoader
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

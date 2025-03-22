import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/auth/Signin";
import VerifyEmail from './pages/auth/VerifyEmail';
import Signup from './pages/auth/Signup';

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1 className='text-blue-600'>Hello</h1>
  },
  {
    path: "/login",
    element: <LoginPage/>
  },
  {
    path: "/verifyEmail",
    element: <VerifyEmail/>
  },
  {
    path: "/signup",
    element: <Signup/>
  }
])

function App() {
  return <RouterProvider router={router}/>
}

export default App;
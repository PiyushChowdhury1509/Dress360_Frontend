import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/auth/Signin";
import VerifyEmail from './pages/auth/VerifyEmail';
import Signup from './pages/auth/Signup';
import SendVerifyOtp from './pages/auth/SendVerifyOtp';
import { HomePage } from './pages/homePage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>
  },
  {
    path: "/login",
    element: <LoginPage/>
  },
  {
    path: "/sendVerifyOtp",
    element: <SendVerifyOtp/>
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
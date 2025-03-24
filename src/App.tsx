import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/auth/Signin";
import VerifyEmail from './pages/auth/VerifyEmail';
import Signup from './pages/auth/Signup';
import Getstyle from './pages/getstyle';
import Home from './pages/rand';
import { PrivacyPolicy } from './pages/misc/privacy_policy';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/privacyPolicy",
    element: <PrivacyPolicy/>
  },
  {
    path: "/getstyle",
    element: <Getstyle/>
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
    path: "signup",
    element: <Signup/>
  }
])

function App() {
  return <RouterProvider router={router}/>
}

export default App;
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import LoginForm from './Pages/Login.jsx'
import Dashboard from './Components/Dashboard.jsx'
import './index.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  createRoutesFromElements(
    <Route path='/' element ={<App/>}>
    <Route path='/login' element ={<LoginForm/>}></Route>
    <Route path='/dashboard' element ={<Dashboard/>}></Route>

    </Route>,
    
    )
 
  ]);
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  )

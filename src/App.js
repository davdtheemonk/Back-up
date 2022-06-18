
import React from "react";
import logo from './logo.svg';
import { Helmet } from 'react-helmet'
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Home from "./Home"
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import Template from "./Template"
import BottomNavigation from '@mui/material/BottomNavigation';
import Docs from "./Docs"
import Newuser from "./Newuser"
import { Route,Routes, BrowserRouter } from 'react-router-dom';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import Notepad from "./Notepad";
import {useNavigate} from "react-router-dom"
import Assessment from "./Assessment"
import Bordernav from "./Bottomnav"

import Dashboard  from './Dashboard';
import Signup from "./Signup"
import Login from "./Login"
import Course from "./Course"
import {selectUser} from "./features/userSlice"
import PythonMore from "./PythonMore"
import { store } from './app/store';
import { Provider } from 'react-redux';
import Hire from "./Hire"
import {Toaster} from "react-hot-toast"
import Sidebar from "./Sidebar"
import {useSelector} from "react-redux"


import './App.css';


function App() {
  const user = useSelector(selectUser)

  const path = window.location.pathname
  let arr = path.toString().split("/")
  let currentPath = arr[arr.length-1]

  return (
 

 
  <BrowserRouter>
  <Toaster position="top-right"
  toastOption={{
    success:{
      theme:{
        primary:'blue'
      },
    },
  }}></Toaster>
 
  

  <Routes>
 
    <Route path='/' element={<Dashboard />}/>
   
    <Route path='/portal/ws/:id' element={<Dashboard />}/>
    <Route path='/sign-up' element={<Signup />}/>
   
    
    <Route path='/portal/ws/note' element={<Notepad />}/>
    <Route path='/portal/ws/assess' element={<Assessment />}/>
    <Route path='/portal/ws/sign-up' element={<Signup/>} />
    <Route path='/portal/course-info' element={<Course/>} />
       </Routes>
      
  </BrowserRouter>

 
  );
}

export default App;

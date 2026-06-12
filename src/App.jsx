import React from 'react'
import "./App.css"
import Nav from './Components/Nav/Nav'
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import Signup from './Components/Signup/Signup'
import { Outlet } from 'react-router-dom'
import Listing from './Components/Listing/Listing'
import Contactus from './Components/Contactus/Contactus'
import Footer from './Components/Footer/Footer'


function App() {
  return (
    <div>
        <Nav/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default App

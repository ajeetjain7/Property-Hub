import React from 'react'
import "./Login.css"
import { MdLogin } from "react-icons/md";
function Login() {
  return (
     <div id='login' onClick={(e) => {
        alert("Login Sucessfull....")
     }}>
         <form action="">
            <span id='logintitle'>Login Page</span>
            <div className="list">
                <label htmlFor="email">Email</label>
                <input type="text" id='email' required/>
            </div>
            <div className="list">
                <label htmlFor="pass">password</label>
                <input type="passsword" id='pass' required/>
            </div>
            <button id='loginbtn'>Login<MdLogin /></button>
         </form>
    </div>
  )
}

export default Login

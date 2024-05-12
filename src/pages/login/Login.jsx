import React, { useState } from "react";
import { toast } from 'react-toastify';

const Login = () => {

    //make a useState for each input
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    //Make a error state
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    //Make a function to handle the form submission
    const handleLogin = (e) => {
        e.preventDefault()
        toast.success("Login button clicked")
    }


    return (
        <div className="container">
            <h1>Login to your Account!</h1>
            <form className="w-50">
                <label>Email Address : {email}</label>
                <input onChange={(e) => setEmail(e.target.value)} type="text" className="form-control" placeholder="Enter your email address"></input>

                <label>Password</label>
                <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" placeholder="Enter your password"></input>

                <button onClick={handleLogin} className="btn btn-danger mt-2 w-100">Login</button>
            </form>
        </div>
    )
}

export default Login;
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { registerUserApi } from '../../apis/Api';
import './Register.css';
const Register = () => {
  //Logic Section

  //Make a useState for 5 Fields
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  //useState for error message
  const [firstNameError, setFirstNameError] = useState('')
  const [lastNameError, setLastNameError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [confirmPasswordError, setConfirmPasswordError] = useState('')

  //Make an each function for changing the value
  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  }

  const handleLastName = (e) => {
    setLastName(e.target.value);
  }

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  }

  //validation
  var validate = () => {
    var isValid = true;

    //validate the firstname
    if (firstName.trim() == '') {
      setFirstNameError("First name is required!")
      isValid = false;
    }

    if (lastName.trim() == '') {
      setLastNameError("Last name is required!")
      isValid = false;
    }

    if (email.trim() == '') {
      setEmailError("Email is required!")
      isValid = false;
    }

    if (password.trim() == '') {
      setPasswordError("Password is required!")
      isValid = false;
    }

    if (confirmPassword.trim() == '') {
      setConfirmPasswordError("Confirm password is required!")
      isValid = false;
    }

    if (confirmPassword.trim() != password.trim()) {
      setConfirmPasswordError("Password and confirm password does not match")
      isValid = false;
    }

    return isValid;

  }

  //Submit button Function
  const handleSubmit = (e) => {
    e.preventDefault()

    //validate
    var isValidated = validate();
    if (!isValidated) {
      return
    }

    //sending request to the api

    //Making json object
    const data = {
      "firstName": firstName,
      "lastName": lastName,
      "email": email,
      "password": password
    }

    registerUserApi(data).then((res) => {
      // console.log(res.data)

      //Received data : success, message
      if (res.data.success == false) {
        toast.error(res.data.message)
      } else {
        toast.success(res.data.message)
      }
    })

    // console.log(firstName, lastName, email, password, confirmPassword)
  }

  return (
    <div className='register-container'>
      <div className="curved-shape"></div>
      <div className="register-box">
        <div className="register-form">

          <h1>Create an account!</h1>

          <form className='w-50'>
            <label>Firstname : {firstName}</label>
            <input onChange={handleFirstName} type='text' className='form-control' placeholder='Enter your first name'></input>
            {
              firstNameError && <p className='text-danger'>{firstNameError}</p>
            }

            <label className='mt-2'>Lastname : {lastName}</label>
            <input onChange={handleLastName} type='text' className='form-control' placeholder='Enter your last name'></input>
            {
              lastNameError && <p className='text-danger'>{lastNameError}</p>
            }

            <label className='mt-2'>Email : {email}</label>
            <input onChange={handleEmail} type='text' className='form-control' placeholder='Enter your email'></input>
            {
              emailError && <p className='text-danger'>{emailError}</p>
            }

            <label className='mt-2'>Password</label>
            <input onChange={handlePassword} type='text' className='form-control' placeholder='Enter your password'></input>
            {
              passwordError && <p className='text-danger'>{passwordError}</p>
            }

            <label className='mt-2'>Confirm Password</label>
            <input onChange={handleConfirmPassword} type='text' className='form-control' placeholder='Confirm your password'></input>
            {
              confirmPasswordError && <p className='text-danger'>{confirmPasswordError}</p>
            }

            <button onClick={handleSubmit} className='btn btn-dark'>Register</button>
          </form>
          <p className='login-text'>Already have an account? <a href='/login'>Login</a></p>
        </div>
        <div className="welcome-text">
          <h2>WELCOME!</h2>
          <p>Join us to find your dream home. Create an account now!</p>
        </div>
      </div>
    </div>
  )
}

export default Register;

//Step 1: Make a complete UI or register page (Fields, button, etc)
//Step 2 : Input (type) - Make a state
//Step 3 : Onchange - Set the value to the state

//Make a login page
//Make a path in App.js
//Make a frontend with email & Password
//Make a use state
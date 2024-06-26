import React, { useState } from 'react'
import './CSS/loginsignup.css'

const LoginSignup = () => {

const[state, setState] = useState('Login');
const [formData, setFormData] = useState({
  username:'',
  password:'',
  email:'',
})

const changeHandler = (e) => {
  setFormData({...formData, [e.target.name]: e.target.value})
}

const login = async() => {
  console.log("Login function initiated", formData)
  let responseData;
  await fetch(`${process.env.REACT_APP_BACKEND || ""}/api/login`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData)
  }).then((response) => response.json()).then((data) => responseData = data)

  if(responseData.success){
    localStorage.setItem('auth-token', responseData.token)
    window.location.replace('/')
  }
  else{
    alert(responseData.errors)
  }
}

const signup = async() => {
  console.log("Signup function initiated", formData)
  let responseData;
  await fetch(`${process.env.REACT_APP_BACKEND || ""}/api/signup`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData)
  }).then((response) => response.json()).then((data) => responseData = data)

  if(responseData.success){
    localStorage.setItem('auth-token', responseData.token)
    window.location.replace('/')
  }
  else{
    alert(responseData.errors)
  }

}

  return (
    <div className='login-signup'>
        <div className='loginsignup-container'>
          <h1>{state}</h1>
          <div className="loginsignup-fields">
          {state==="Sign Up"?<input type="text" placeholder="Your name" name="username" value={formData.username} onChange={changeHandler}/>:<></>}
          <input type="email" placeholder="Email address" name="email" value={formData.email} onChange={changeHandler}/>
          <input type="password" placeholder="Password" name="password" value={formData.password} onChange={changeHandler}/>
        </div>
          <button onClick={() => {state === "Login"?login():signup()}}>Continue</button>
          {state === "Sign Up"?<p className='loginsignup-login'>Already have an account? <span onClick={()=> setState('Login')}>Log In Here</span></p>
          :<p className='loginsignup-login'>Create an account? <span onClick={()=> setState('Sign Up')}>Click Here</span></p>}
          <div className='loginsignup-agree'>
            <input type='checkbox' name = '' id = ''/>
            <p>
              By continuing, I agree to the terms of use and privacy policy.
            </p>
          </div>
        </div>
    </div>
  )
}

export default LoginSignup
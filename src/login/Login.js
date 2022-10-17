import React from 'react'
import "./login.scss"
import logo from '../assets/login_assets/Union.svg' 
import compName from '../assets/login_assets/lendsqr.svg'
import pablo from '../assets/login_assets/pablo-sign-in 1.svg'

function Login() {
  return (
    <main className='login'>
        <div className='login-container'>
            <div className='logo'>
                <img className='logo-logo' src={logo} alt='logo.png'/>
                <img src={compName} alt='logo.png'/>
            </div>
            <div className='login-content'>
                <img src={pablo} alt=''></img>
               
                    <form className='form'>
                        <div className='form-head'>
                        <h1>Welcome</h1>
                        <p>Enter details to login</p>
                        </div>
                        
                        <div className='form-details'>
                            <input type='text' placeholder='Email'></input>
                            <div className='password'>
                                <input type='password' placeholder='Password'></input>
                                <span>SHOW</span>
                            </div>
                            
                        </div>
                        <p className='forgot'>Forgot Password?</p>
                        <button className='btn'>LOG IN</button>
                    </form>
               
            </div>
        </div>
    </main>
      
  )
}

export default Login
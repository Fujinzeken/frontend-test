import React from 'react'
import logo from '../../assets/login_assets/Union.svg' 
import compName from '../../assets/login_assets/lendsqr.svg'
import './navbar.scss'
import { useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()
  if(location.pathname === '/'){
    return null
  }
  return (
    <nav className= 'navbar'>
    <div className='nav__left'>
        <div className='logo'>
            <img src={logo} alt='logo.png'/>
            <img src={compName} alt='lendsqr.png'/>
        </div>
        <div className='input'>
            <input type='input' placeholder='search for anything'/>
            <button className='search'><i className="fa-solid fa-magnifying-glass "></i></button>
        </div>
    </div>
    <div className='nav-right'>
        <span>Docs</span>
        <i class="fa-regular fa-bell"></i>
        <img src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' 
        alt=''/>
        <span>Micheal</span>
    </div>
    
    </nav>
  )
}

export default Navbar

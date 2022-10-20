import React from 'react'
import './sidebar.scss'
import {FaUserFriends} from 'react-icons/fa'
import {RiBankFill} from 'react-icons/ri'
import {IoMdArrowDropdown} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import { useLocation } from 'react-router-dom'

const Sidebar = () => {
  const location = useLocation()
  if(location.pathname === '/'){
    return null
  }
  return (
    <aside className='sidebar'>
    <div className='wrapper'>
      <div className='sidebar-top'>
        <li><RiBankFill/>Switch Organization <IoMdArrowDropdown/></li>
      </div>
      <div>
        {/* <li><IoHome/>Dashboard</li> */}
        <AiFillHome/>
      </div>
        
       
    </div>
   
      <FaUserFriends />
    </aside>
  )
}

export default Sidebar

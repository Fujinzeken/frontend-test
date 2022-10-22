import React from 'react'
import './sidebar.scss'
import {FaUserFriends, FaUsers,FaRegHandshake,FaPiggyBank,FaUserCheck,FaUserTimes,FaBriefcase
  ,FaUserCog, FaFileContract} from 'react-icons/fa'
import {IoMdArrowDropdown} from 'react-icons/io'
import {TbBrandGoogleAnalytics} from 'react-icons/tb'
import {AiFillHome} from 'react-icons/ai'
import {GrMoney,GrTransaction, GrServices} from 'react-icons/gr'
import {GiReceiveMoney, GiTakeMyMoney} from 'react-icons/gi'
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
        <h3 className='sidebarTopic'><FaBriefcase className='icon'/>Switch Organization <IoMdArrowDropdown/></h3>
      </div>
      <div className='sidebarDash'>
        <AiFillHome className='icon'/>Dashboard
      </div>
      <div className='sidebar-menu'>
        <h3 className='sidebar-menuTitle'>Customers</h3>
        <ul className='sidebarList'>
          <li className='sidebarList-list active'>
            <FaUserFriends className='icon' />Users
          </li>
          <li className='sidebarList-list'>
            <FaUsers className='icon'/>Guarantor
          </li>
          <li className='sidebarList-list'>
            <GrMoney className='icon'/>Loans
          </li>
          <li className='sidebarList-list'>
            <FaRegHandshake className='icon'/>Decision Models
          </li>
          <li className='sidebarList-list'>
            <FaPiggyBank className='icon'/>Savings
          </li>
          <li className='sidebarList-list'>
            <GiReceiveMoney className='icon'/>Loan Request
          </li>
          <li className='sidebarList-list'>
            <FaUserCheck className='icon'/>Whitelist
          </li>
          <li className='sidebarList-list'>
            <FaUserTimes className='icon'/>Karma
          </li>
        </ul>
       
      </div>
      <div className='sidebar-menu'>
        <h3 className='sidebar-menuTitle'>Businesses</h3>
        <ul className='sidebarList'>
          <li className='sidebarList-list'>
            <FaBriefcase  className='icon' />Organization
          </li>
          <li className='sidebarList-list'>
            <GiReceiveMoney className='icon'/>Loan Products
          </li>
          <li className='sidebarList-list'>
            <GiTakeMyMoney className='icon'/>Savings Products
          </li>
          <li className='sidebarList-list'>
            <GrMoney className='icon'/>Fees and Charges
          </li>
          <li className='sidebarList-list'>
            <GrTransaction className='icon'/>Transactions
          </li>
          <li className='sidebarList-list'>
            <GrServices className='icon'/>Services
          </li>
          <li className='sidebarList-list'>
            <FaUserCog className='icon'/>Service Amount
          </li>
          <li className='sidebarList-list'>
            <FaFileContract className='icon'/>Settlements
          </li>
          <li className='sidebarList-list'>
            <TbBrandGoogleAnalytics className='icon'/>Reports
          </li>
        </ul>
       
      </div>
      <div className='sidebar-menu'>
        <h3 className='sidebar-menuTitle'>Settings</h3>
        <ul className='sidebarList'>
          <li className='sidebarList-list'>
            <FaBriefcase  className='icon' />Preferences
          </li>
          <li className='sidebarList-list'>
            <GiReceiveMoney className='icon'/>Fees and Pricing
          </li>
          <li className='sidebarList-list'>
            <GiTakeMyMoney className='icon'/>Audit Logs
          </li>
          
        </ul>
       
      </div>
      
        
       
    </div>
   
     
    </aside>
  )
}

export default Sidebar

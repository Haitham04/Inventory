import React from 'react'
import { Link } from 'react-router-dom'

const SidebarAdmin = () => {
  return (
    <>
         <div className="sidebar">
                <h2>Admin Dashboard</h2>
                <ul className="menu">
                    <li>Home</li>
                    <li >Manage User</li>
                    <li>View Sales</li>
                    <li>View Stock</li>
                    <li>Contact</li>
                    <li><Link style={{color:'white', textDecoration:'none'}} to={"/"}>Logout</Link></li>
                    
                </ul>
            </div>
    </>
  )
}

export default SidebarAdmin

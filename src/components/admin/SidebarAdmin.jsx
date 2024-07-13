import React from 'react'
import { Link } from 'react-router-dom'

const SidebarAdmin = () => {
  return (
    <>
         <div className="sidebar" style={{marginRight: '2rem'}}>
                <h2>Admin Dashboard</h2>
                <ul className="menu">
                    <Link to={'/viewUser'} style={{color:'white', textDecoration:'none'}} ><li>Home</li></Link> 
                    <Link to={'/manageuser'} style={{color:'white', textDecoration:'none'}} ><li>Manage User</li></Link> 
                    <Link to={'/manageSales'} style={{color:'white', textDecoration:'none'}} > <li>View Sales</li></Link>
                    <Link to={'/manageStock'} style={{color:'white', textDecoration:'none'}} > <li>View Stock</li></Link>
                    <li> <Link to={'/contact'} style={{color:'white', textDecoration:'none'}}>Contact</Link></li>
                    <li><Link style={{color:'white', textDecoration:'none'}} to={"/"}>Logout</Link></li>
                    
                </ul>
            </div>
    </>
  )
}

export default SidebarAdmin

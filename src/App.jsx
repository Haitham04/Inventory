import React from 'react'
import { BrowserRouter,Routes,Route, Router } from 'react-router-dom'
import Login from './pages/login'
import Register from './pages/register'
import Home from './pages/admin/Home'
import ManagerDash from './pages/manager/ManagerDash'
import Contact from './pages/Contact'
import Welcome from './pages/Welcome'
import ManageStock from './pages/manager/ManageStock'
import About from './pages/About'
import ManageUser from './pages/admin/ManageUser'
import RecordSales from './pages/manager/RecordSales'
import AllManagers from './pages/manager/AllManagers'
import UpdateManager from './pages/manager/UpdateManager'





const App = () => {
  return (
   <BrowserRouter>
    <Routes>
      <Route  path='/' element={<Welcome/>}/>
      <Route  path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/Home' element={<Home/>} />
      <Route path='/Manager' element={<ManagerDash />} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='about' element={<About/>}/>
      <Route path='/manageuser' element={<ManageUser/>} />
      <Route path='/stock' element={<ManageStock/>} />
      <Route path='/sales' element={<RecordSales/>} />
      <Route path='/allmanagers' element={<AllManagers/>}/>
      <Route path='/updateManager/:id' element={<UpdateManager/>}/>
    </Routes>
    </BrowserRouter>
  

  )
}

export default App

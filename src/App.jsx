import React from 'react'
import { BrowserRouter,Routes,Route, Router } from 'react-router-dom'
import Login from './pages/login'
import Register from './pages/register'
import Home from './pages/admin/Home'
import ManagerDash from './pages/manager/ManagerDash'
import StockKeeper from './pages/stockKeeper/StockKeeper'
import Welcome from './pages/Welcome'
import StockKeeperHome from './pages/stockKeeper/StockKeeperHome'



const App = () => {
  return (
   <BrowserRouter>
    <Routes>
    <Route  path='/' element={<Welcome/>}/>
      <Route  path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/Home' element={<Home/>} />
      <Route path='/Manager' element={<ManagerDash />} />
      <Route path='/stockKeeper' element={<StockKeeper />} />
      <Route path='./pages/stockKeeperHome' element={<StockKeeperHome />} />
      
    </Routes>
   </BrowserRouter>
  

  )
}

export default App

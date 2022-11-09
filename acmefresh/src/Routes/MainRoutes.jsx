import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Home from '../pages/Home'
import SellingDirecly from '../pages/SellingDirecly'
import AutomatingFarm from "../pages/AutomatingFarm"
import HydroponicFarm from '../pages/HydroponicFarm'
import Produce from '../pages/HydroponicProduce'

const MainRoutes = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/HydroponicFarm' element={<HydroponicFarm/>}/>
            <Route path='/Produce' element={<Produce/>}/>
            <Route path='/AutomatingFarm' element={<AutomatingFarm/>}/>
            <Route path='/SellingDirecly' element={<SellingDirecly/>}/>
        </Routes>
    </div>
  )
}

export default MainRoutes
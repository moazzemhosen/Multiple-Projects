import React from 'react'
import { Link } from 'react-router-dom'
import style from "./style/Navbar.module.css"

const Navbar = () => {
  return (
    <div className={style.container}>
       <Link to="/"><div>Home</div></Link>
       <Link to="/HydroponicFarm"> <div>Hydroponic Farm</div></Link>
       <Link to="/Produce"> <div>Hydroponic Produce</div></Link>
       <Link to="/AutomatingFarm"> <div>Automating Farm</div></Link>
       <Link to="/SellingDirecly"><div>Selling Direcly(B2C)</div></Link>
    </div>
  )
}

export default Navbar
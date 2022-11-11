import React from 'react'
import style from "./PagesStyle/Home.module.css"
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div className={style.container}>
     <div className={style.content}></div>
     <div className={style.description}>
    <div className={style.card}>
      <div><Link to="/AutomatingFarm"><p className={style.para}>Automating Farm</p></Link></div>
      <div><Link to="/SellingDirecly"><p className={style.para}>Selling Direcly</p>(B2C)</Link></div>
      </div>
      <h4 className={style.warning}>Backend not deployed.Please Run Backend server for working this page properly, Command :<span>npm run server</span></h4>
     </div>
    </div>
  )
}

export default Home
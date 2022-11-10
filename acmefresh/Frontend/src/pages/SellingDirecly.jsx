import React from 'react'
import SellingCard from '../components/SellingCard'
import style from "./PagesStyle/SellingDirectly.module.css"

const SellingDirecly = () => {
  var arr=[]
  for(var i=0;i<20;i++){
    arr.push(i)
  }
  return (
    <div className={style.container}>
      {arr.map((e)=>{
        return <SellingCard/>
      })}
    </div>
  )
}

export default SellingDirecly
import React from 'react'
import style from "./PagesStyle/Automating.module.css"
import Intro from '../components/AutomatingComponents/Intro'
import Description from '../components/AutomatingComponents/Description'
import Instrument from '../components/AutomatingComponents/Instrument'
import ConstPros from '../components/AutomatingComponents/ConstPros'

const AutomatingFarm = () => {
  var arr=[]
  for(var i=0;i<5;i++){
    arr.push(i)
  }
  return (
    <div className={style.container}>
      <Intro/>
      <Description/>
      <div className={style.border}>
      <h3 className={style.heading}>Instrument</h3>
      </div>
      {arr.map((e)=>{
        return <Instrument/>
      })}
      <ConstPros/>
      
    </div>
  )
}

export default AutomatingFarm
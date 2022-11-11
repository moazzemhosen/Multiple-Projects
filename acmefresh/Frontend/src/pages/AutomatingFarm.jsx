import React from 'react'
import style from "./PagesStyle/Automating.module.css"
import Intro from '../components/AutomatingComponents/Intro'
import Description from '../components/AutomatingComponents/Description'
import Instrument from '../components/AutomatingComponents/Instrument'
import ConstPros from '../components/AutomatingComponents/ConstPros'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getautomaticfarm } from '../Redux/AppReducer/action'

const AutomatingFarm = () => {
  const dispatch=useDispatch()
  const data = useSelector((state) => state.AppReducer.AUTOMATINGFARM);
 useEffect(()=>{
dispatch(getautomaticfarm())
 },[])
  return (
    <div className={style.container}>
      <Intro/>
      <Description/>
      <div className={style.border}>
      <h3 className={style.heading}>Materials & Parts List</h3>
      </div>
      {data.map((e)=>{
        return <Instrument key={e.id} data={e}/>
      })}
      <ConstPros/>
      
    </div>
  )
}

export default AutomatingFarm
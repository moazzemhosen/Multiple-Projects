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
// calling data from Redux store for renddering Automating farm data
  const data = useSelector((state) => state.AppReducer.AUTOMATINGFARM);
  //When page is load then its dispatch getautomating farm once 
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
        //Calling this component and passing data porps
        return <Instrument key={e.id} data={e}/>
      })}
      <ConstPros/>
      
    </div>
  )
}

export default AutomatingFarm
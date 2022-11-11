import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ADD_TO_CART } from '../Redux/AppReducer/actionType';
import style from "./style/SellingCard.module.css"

const SellingCard = ({data}) => {
  const cartdata=useSelector(state=>state.AppReducer.CART)
  const dispatch=useDispatch();
  const handleadd=(data)=>{
       //console.log(data)
       dispatch({type:ADD_TO_CART,payload:data})
  }
 
  return (
    <div className={style.container}>
        <img width={"100%"} height={"200px"} src={data.img}alt="" />
        <div className={style.title}>{data.title}</div>
        <div className={style.category}>{data.category}</div>
        <div className={style.price}>
            <div className={style.bestprice}>RS:-{data.bestprice}</div>
            <div className={style.actualprice}> Rs:-{data.actualprice}</div>
        </div>
            {data.discount ?<div className={style.discount}>Discount:-{data.discount}</div>:""}
       {!cartdata.includes(data) ? <div>
            <button className={style.add} onClick={()=>{handleadd(data)}}>Add to Cart</button>
        </div>:<div>
            <button className={style.done}>Added</button>
        </div>}
    </div>

  )
}

export default SellingCard
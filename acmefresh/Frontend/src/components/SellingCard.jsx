import React from 'react'
import style from "./style/SellingCard.module.css"

const SellingCard = () => {
  return (
    <div className={style.container}>
        <img width={"100%"} src="https://images.unsplash.com/photo-1511941923513-f7749910f91d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dmVnaXRhYmxlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
        <div className={style.category}>Category</div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, expedita.</div>
        <div className={style.price}>
            <div className={style.bestprice}>RS:-22222</div>
            <div> Rs:-1111</div>
        </div>
        <div>
            <button>Buy Now</button>
        </div>
    </div>

  )
}

export default SellingCard
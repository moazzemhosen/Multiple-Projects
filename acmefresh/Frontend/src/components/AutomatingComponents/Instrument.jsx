import React from 'react'
import style from "./style/Instrument.module.css"

const Instrument = ({data}) => {
 // console.log("dd",data);
  return (
    <div className={style.container}>
    <div className={style.imagediv}>
      <img
        width={"100%"}
        height={"100%"}
        src={data.img}
        alt=""
      />
    </div>
    <div>
      <h2>{data.title}</h2>
      <div className={style.content}>
        <p>
          {data.des}
        </p>
      </div>
    </div>
  </div>
  )
}

export default Instrument
import React from 'react'
import style from "./style/Instrument.module.css"

const Instrument = () => {
  return (
    <div className={style.container}>
    <div className={style.imagediv}>
      <img
        width={"100%"}
        height={"100%"}
        src="https://images.squarespace-cdn.com/content/v1/5b51df5812b13fce46a6868b/1605501978160-KBK6N3KPY4NWQKDN0490/Photo+5+What+is+hydro_+.jpeg?format=1000w"
        alt=""
      />
    </div>
    <div>
      <h2>Why Hydroponic ?</h2>
      <div className={style.content}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
          consectetur aspernatur, voluptatem quae enim possimus ipsum rerum
          praesentium commodi. Obcaecati iusto error quaerat odio pariatur,
          veritatis ut illum autem earum, in minus perferendis soluta
          distinctio perspiciatis doloribus, aut non accusamus ex dolorum
          architecto at? Sed, quia? Corporis non architecto id voluptatem
          nobis distinctio ratione sunt incidunt corrupti earum facere ab,
          velit vel laudantium rerum ullam voluptas voluptatum explicabo, qui
          inventore dicta reiciendis assumenda. Amet, magnam. Harum error
          debitis adipisci minus.
        </p>
      </div>
    </div>
  </div>
  )
}

export default Instrument
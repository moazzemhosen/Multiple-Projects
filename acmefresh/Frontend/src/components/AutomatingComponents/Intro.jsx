import React from "react";
import style from "./style/Intro.module.css";

const Intro = () => {
  return (
    <div className={style.container}>
      <div className={style.imagediv}>
        <img
          width={"100%"}
          height={"100%"}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Hydroponic_onions%2C_NASA_--_17_June_2004.jpg/1280px-Hydroponic_onions%2C_NASA_--_17_June_2004.jpg"
          alt=""
        />
      </div>
      <div>
        <h2 className={style.heading}>Why Automation Hydroponic ?</h2>
        <div className={style.content}>
          <p>
            At the core of this automated hydroponic system is the Raspberry Pi
            single board computer. This $35 computer is only the size of a deck
            of playing cards, but it has all the components you would find in a
            full computer, including CPU, RAM, video/audio output, USB, WiFi,
            Bluetooth, Ethernet, and micro SD slot. The most important feature
            of the Raspberry Pi for our application is its general purpose
            input-output (GPIO) pins, which will be used to connect inputs, such
            as switches and sensors to measure the environment, and outputs such
            as pumps and relays to move liquids and control electrical devices
            that will manipulate the environment
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;

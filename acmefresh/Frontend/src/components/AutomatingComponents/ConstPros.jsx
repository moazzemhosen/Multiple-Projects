import React from "react";
import styles from "./style/combine.module.css";

const ConstPros = () => {
  const Advantages = [
    "Less Resources are required — Land (about 240x yield of conventional farming), Water (Upto 98% less than traditional farming) & Energy ( In case Greenhouse)",
    "High Quality Produce as environment is completely regulated.",
    "Sustainable Farming as water is treated and recycled.,",
    "Seasonally Agnostic.",
    "No man power Needed",
  ];
  const Disadvantage=["Commercial setup: High initial setup cost", "Commercial setup: High consumption of energy when growing indoors with temperature control and indoor lights"]
  return (
    <div className={styles.container}>
      <div>
        <h3>Advantages</h3>
        <ol>
            {Advantages.map((e)=>{
                return <li>{e}</li>
            })}
        </ol>
      </div>
      <div>
      <h3>Disadvantages</h3>
        <ol>
            {Disadvantage.map((e)=>{
                return <li>{e}</li>
            })}
        </ol>
      </div>
    </div>
  );
};

export default ConstPros;

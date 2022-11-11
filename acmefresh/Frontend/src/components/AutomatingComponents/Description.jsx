import React from "react";
import style from "./style/Description.module.css";

const Description = () => {
  return (
    <div className={style.container}>
      <h2>Description</h2>
      <div className={style.content}>
        <p>
          A frame is needed to support the water channels as well as the water
          inlet and collection pipes. One end should be higher than the other to
          allow water to flow through the channels by gravity. I had 1-inch
          punched square steel tubing left over from a previous project, so this
          is what I used to construct my frame (drawing below). However, there
          are many ways to support channels, from raising one end of a table to
          building a custom frame. Steel is a relatively expensive material, so
          I would suggest using angled aluminum bar or tubing if you’re going to
          design your own frame. Another inexpensive and modular option is to
          use 3/4 inch electric metallic tube, a metal tube cutter, and Maker
          Pipe connectors.
        </p>
      </div>
    </div>
  );
};

export default Description;

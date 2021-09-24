import React from "react";
import "./Slider.css";

import Movie from "../Movie/Movie";
//
import bond from "../images/Bond.jpg";
import venom from "../images/Venom.jpg";
import avengers from "../images/avengers.jpg";
import dune from "../images/dune.png";

function Slider() {
  let counter = 1;
  setInterval(() => {
    document.getElementById("radio" + counter).checked = true;
    counter++;
    if (counter > 5) {
      counter = 1;
    }
  }, 4000);

  return (
    <div className="slider">
      <div className="movies">
        <input type="radio" name="radio-btn" id="radio1"></input>
        <input type="radio" name="radio-btn" id="radio2"></input>
        <input type="radio" name="radio-btn" id="radio3"></input>
        <input type="radio" name="radio-btn" id="radio4"></input>
        <input type="radio" name="radio-btn" id="radio5"></input>

        <Movie src={bond} name="NO TIME TO DIE NO TIME TO" clas="first_slide" />
        <Movie src={venom} name="VENOM : LET THERE BE CORNAGE" />
        <Movie src={avengers} name="ETERNALS" />
        <Movie src={dune} name="DUNE" />
        <Movie src={bond} name="NO TIME TO DIE NO TIME TO" />
        <Movie src={venom} name="VENOM : LET THERE BE CORNAGE" />
        <Movie src={avengers} name="ETERNALS" />
        <Movie src={dune} name="DUNE" />

        {/* automatic navigation */}
        <div className="navigation-auto">
          <div className="auto-btn1"></div>
          <div className="auto-btn2"></div>
          <div className="auto-btn3"></div>
          <div className="auto-btn4"></div>
          <div className="auto-btn5"></div>
        </div>

        <div className="swiper">
          <label htmlFor="radio1" className="swiper_dot"></label>
          <label htmlFor="radio2" className="swiper_dot"></label>
          <label htmlFor="radio3" className="swiper_dot"></label>
          <label htmlFor="radio4" className="swiper_dot"></label>
          <label htmlFor="radio5" className="swiper_dot"></label>
        </div>
      </div>
    </div>
  );
}

export default Slider;

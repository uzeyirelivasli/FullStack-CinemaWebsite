import "./App.css";
import { useEffect } from "react";

//
import Header from "./Header/Header";
import Movie from "./Movie/Movie";
//
import bond from "./images/Bond.jpg";
import venom from "./images/Venom.jpg";
import avengers from "./images/avengers.jpg";
import dune from "./images/dune.png";

function App() {
  useEffect(() => {
    const swiperDots = document.querySelectorAll(".swiper_dot");
    swiperDots.forEach((swiperDot) =>
      swiperDot.addEventListener("click", () => {
        swiperDots.forEach((swiperDot) =>
          swiperDot.classList.remove("active_swiper")
        );
        console.log("alma");
        swiperDot.classList.add("active_swiper");
      })
    );
  });

  return (
    <div className="App">
      <Header />
      <div className="slider">
        <div className="movies">
          <input type="radio" name="radio-btn" id="radio1"></input>
          <input type="radio" name="radio-btn" id="radio2"></input>
          <input type="radio" name="radio-btn" id="radio3"></input>
          <input type="radio" name="radio-btn" id="radio4"></input>
          <input type="radio" name="radio-btn" id="radio5"></input>

          <Movie
            src={bond}
            name="NO TIME TO DIE NO TIME TO"
            clas="first_slide"
          />
          <Movie src={venom} name="VENOM : LET THERE BE CORNAGE" />
          <Movie src={avengers} name="ETERNALS" />
          <Movie src={dune} name="DUNE" />
          <Movie src={bond} name="NO TIME TO DIE NO TIME TO" />
          <Movie src={venom} name="VENOM : LET THERE BE CORNAGE" />
          <Movie src={avengers} name="ETERNALS" />
          <Movie src={dune} name="DUNE" />

          <div className="swiper">
            <label
              htmlFor="radio1"
              className="swiper_dot active_swiper"
            ></label>
            <label htmlFor="radio2" className="swiper_dot"></label>
            <label htmlFor="radio3" className="swiper_dot"></label>
            <label htmlFor="radio4" className="swiper_dot"></label>
            <label htmlFor="radio5" className="swiper_dot"></label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

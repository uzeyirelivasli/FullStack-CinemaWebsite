import "./App.css";
import Header from "./Header/Header";

import bond from "./images/Bond.jpg";
import venom from "./images/Venom.jpg";
import avengers from "./images/avengers.jpg";
import dune from "./images/dune.png";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="movies">
        <a href="#" className="movie_container">
          <img src={bond} alt="Bond" />
          <div className="movie_description">
            <h5 className="movie_date">FALL 2021</h5>
            <h2 className="movie_name">NO TIME TO DIE NO TIME TO</h2>
            <div className="dashes">- - - - - - -</div>
            <a href="#" className="movie_button">
              COMING SOON
            </a>
          </div>
        </a>
        <a href="#" className="movie_container">
          <img src={venom} alt="Bond" />
          <div className="movie_description">
            <h5 className="movie_date">FALL 2021</h5>
            <h2 className="movie_name">VENOM : LET THERE BE CORNAGE</h2>
            <div className="dashes">- - - - - - -</div>
            <a href="#" className="movie_button">
              COMING SOON
            </a>
          </div>
        </a>
        <a href="#" className="movie_container">
          <img src={avengers} alt="Bond" />
          <div className="movie_description">
            <h5 className="movie_date">FALL 2021</h5>
            <h2 className="movie_name">ETERNALS</h2>
            <div className="dashes">- - - - - - -</div>
            <a href="#" className="movie_button">
              COMING SOON
            </a>
          </div>
        </a>
        <a href="#" className="movie_container">
          <img src={dune} alt="Bond" />
          <div className="movie_description">
            <h5 className="movie_date">FALL 2021</h5>
            <h2 className="movie_name">DUNE</h2>
            <div className="dashes">- - - - - - -</div>
            <a href="#" className="movie_button">
              COMING SOON
            </a>
          </div>
        </a>
      </div>
    </div>
  );
}

export default App;

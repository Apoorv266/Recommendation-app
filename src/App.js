import React, { useState } from "react";
import "./App.css";
import data from "./Data";

function App() {
  const [genreVal, setgenreVal] = useState("shooting");
  function clickHandle(genre) {
    setgenreVal(genre);
  }
  return (
    <>
      <div className="main">
        <h1>Trending Game Recommender 💻</h1>
        <p>Check out my favorite games that I am never tired of playing.</p>
        <div className="button">
          {Object.keys(data).map((genre) => {
            return (
              <button key={genre} onClick={() => clickHandle(genre)}>
                {genre}
              </button>
            );
          })}
        </div>
      </div>
      <hr></hr>
      <div className="genreView">
        {data[genreVal].map((item) => (
          <div className="list">
            <div className="title">
              <h3>{item.title}</h3>
              <h3>{`Rating : ${item.rating}`}</h3>
            </div>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;

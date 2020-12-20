import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [movie, setMovie] = useState("comedy");

  let recomendationDB = {
    comedy: [
      {
        title: "Hera Pheri",
        rating: 4
      },
      {
        title: "3 Idiots",
        rating: 4.5
      },
      {
        title: "Andaaz Apna Apna",
        rating: 4
      }
    ],
    "sci-fi": [
      {
        title: "Gravity",
        rating: 3.5
      },
      {
        title: "Robot",
        rating: 4
      },
      {
        title: "Chappy",
        rating: 4.5
      }
    ],
    action: [
      {
        title: "Bahubali",
        rating: 4.5
      },
      {
        title: "Men In Black",
        rating: 4
      },
      {
        title: "Mission Impossible",
        rating: 4.5
      }
    ]
  };

  let genreList = Object.keys(recomendationDB);

  function showMovieSuggestions(event) {
    let recommendation = event.target.innerText;
    setMovie(recommendation);
  }
  return (
    <div className="App">
      <h1>My Movie Recomendations</h1>

      <p id="infoMsg">Check out my favourite movies from following genre:</p>
      {genreList.map((genre, index) => {
        return (
          <button key={index} onClick={showMovieSuggestions}>
            {genre}
          </button>
        );
      })}
      <ul>
        {recomendationDB[movie].map((genre, index) => (
          <li key={index}>
            <p id="li-title">{genre.title}</p>
            <p id="li-rating">{genre.rating}/5</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

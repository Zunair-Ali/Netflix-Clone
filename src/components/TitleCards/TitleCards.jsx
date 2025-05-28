import React, { useEffect,useState } from "react";
// import cards_data from "../../assets/cards/Cards_data";
import "./TitleCards.css";
import { useRef } from "react";
import { Link } from "react-router-dom";
const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();
  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results))
  .catch(err => console.error(err));
    cardsRef.current.addEventListener("wheel", handleWheel, []);
  });
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MDMxNGI4NTJhMTQwOTk4MzY5ZWU0MGVkMGYyYmVjMSIsIm5iZiI6MTc0ODExMDgxMy4yODEsInN1YiI6IjY4MzIwZGRkZmNhNWRhNjcwMzJiNmMwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CnMNq5vOBYA1fQ2J-WiioxVHZOYaBRfmantb4dAaQho",
    },
  };

  return (
    <div className="title-cards">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return (
            <Link to={`/player/${card.id}`} className="card" key={index}>
              <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
              <p>{card.original_title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;

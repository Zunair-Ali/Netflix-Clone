import React, { useEffect, useState } from "react";
import "./Player.css";
import { assets } from "../assets/assets";
import { useNavigate, useParams } from "react-router-dom";
const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [apiData, setApiData] = useState({
    key: "",
    name: "",
    type: "",
    published_at: "",
  });
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MDMxNGI4NTJhMTQwOTk4MzY5ZWU0MGVkMGYyYmVjMSIsIm5iZiI6MTc0ODExMDgxMy4yODEsInN1YiI6IjY4MzIwZGRkZmNhNWRhNjcwMzJiNmMwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CnMNq5vOBYA1fQ2J-WiioxVHZOYaBRfmantb4dAaQho",
    },
  };
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results[0]))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="player">
      <img
        src={assets.back_arrow_icon}
        alt=""
        onClick={() => {
          navigate(-1);
        }} /* Change from -2 to -1 */
      />
      <iframe
        src={`https:www.youtube.com/embed/${apiData.key}`}
        title="trailer"
        frameborder="0"
        allowFullScreen
        width="90%"
        height="90%"
      ></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
};

export default Player;

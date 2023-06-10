import { ArrowBackOutlined } from "@mui/icons-material";
import "./watch.scss";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosInstance from "../../config";

export default function Watch() {
  const [movie, setMovie] = useState({});
  const location = useLocation();
  const movieId = location.pathname.split("/")[2];
  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axiosInstance.get("/movies/find/" + movieId);
        setMovie(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
  }, [movieId]);

  return (
    <div className="watch">
      <div className="back">
        <Link to="/" className="link">
          <ArrowBackOutlined />
          Home
        </Link>
      </div>
      <video
        src="./demon-slayer-trailer.mp4"
        className="video"
        autoPlay
        progress
        controls
      ></video>
    </div>
  );
}

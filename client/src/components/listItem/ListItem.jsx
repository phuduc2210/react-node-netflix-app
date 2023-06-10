import {
  Add,
  PlayArrow,
  ThumbDownOutlined,
  ThumbUpAltOutlined,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import "./listItem.scss";
import { Link } from "react-router-dom";
import axiosInstance from "../../config";

export default function ListItem({ item, index }) {
  const [isHoved, setIsHoved] = useState(false);
  const [movie, setMovie] = useState({});
  // const trailer ="./demon-slayer-trailer.mp4"
  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axiosInstance.get("/movies/find/" + item);
        setMovie(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
  }, [item]);
  return (
    <Link to={{ pathname: "/watch/" + movie._id }}>
      <div
        className="listItem"
        style={{ left: isHoved && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHoved(true)}
        onMouseLeave={() => setIsHoved(false)}
      >
        <img src={movie.img} alt="" />
        {isHoved && (
          <>
            <video
              src={"./demon-slayer-trailer.mp4"}
              autoPlay={true}
              loop
            ></video>
            <div className="itemInfo">
              <div className="icons">
                <PlayArrow className="icon" />
                <Add className="icon" />
                <ThumbUpAltOutlined className="icon like" />
                <ThumbDownOutlined className="icon dislike" />
              </div>
              <div className="itemInfoTop">
                <span>{movie.title}</span>
                <span className="limit">+{movie.limit}</span>
                <span>{movie.year}</span>
              </div>
              <div className="desc">{movie.desc}</div>
              <div className="genre">{movie.genre}</div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
}

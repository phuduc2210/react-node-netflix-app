import { Notifications, Search, ArrowDropDown } from "@mui/icons-material";
import "./navbar.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <Link
            to="/"
            style={{
              color: "white",
              textDecoration: "none",
            }}
          >
            <span>Homepage</span>
          </Link>
          <Link
            to="/series"
            style={{
              color: "white",
              textDecoration: "none",
            }}
          >
            <span>Series</span>
          </Link>
          <Link
            to="/movies"
            style={{
              color: "white",
              textDecoration: "none",
            }}
          >
            <span>Movies</span>
          </Link>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <Search className="icon" />
          <span>KID</span>
          <Notifications className="icon" />
          <img src="assets/person/me.jpg" alt="" />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Settings</span>
              <Link
                to="/login"
                style={{
                  color: "white",
                  textDecoration: "none",
                  paddingBottom: "10px",
                }}
              >
                <span>Logout</span>
              </Link>
              <Link
                to="/register"
                style={{
                  color: "white",
                  textDecoration: "none",
                  paddingBottom: "10px",
                }}
              >
                <span>Register</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import "./leftBar.scss";
import Friends from "../../assets/1.png";
import Groups from "../../assets/2.png";
import Market from "../../assets/3.png";
import Watch from "../../assets/4.png";
import Memories from "../../assets/5.png";
import Movies from "../../assets/tv.png";
import Space from "../../assets/space.png";
import Music from "../../assets/music.png";
import Youtube from "../../assets/youtube.png";
import Travel from "../../assets/airplane.png";
import Coffee from "../../assets/coffee.png";
import Settings from "../../assets/settings.png";
import Binoculars from "../../assets/binoculars.png";
import Dollar from "../../assets/dollar.png";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";
import {Link} from 'react-router-dom';


const LeftBar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img
              src={currentUser.profilePic}
              style={{ height: "144px", width: "244px" }}
              alt=""
            />
            <span style={{ fontSize: "2em" }}>{currentUser.name}</span>
          </div>
          {/* <div className="item">
            <img src={Friends} alt="" />
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={Groups} alt="" />
            <span>Groups</span>
          </div>
          <div className="item">
            <img src={Market} alt="" />
            <span>Marketplace</span>
          </div>
          <div className="item">
            <img src={Watch} alt="" />
            <span>Watch</span>
          </div>
          <div className="item">
            <img src={Memories} alt="" />
            <span>Memories</span>
          </div> */}
        </div>
        <hr />
        <div className="menu">
          <span style={{ fontSize: "1.5em", fontWeight: "bold" }}>
            Categories
          </span>
          <Link to="/movies">
          <div className="item">
            <img src={Movies} alt="" />
            <span>Movies</span>
          </div>
          </Link>
          <Link to="/space">
          <div className="item">
            <img src={Space} alt="" />
            <span>Space</span>
          </div>
          </Link>
          <Link to="/music">
          <div className="item">
            <img src={Music} alt="" />
            <span>Music</span>
          </div>
          </Link>
          <Link to="/youtube">
          <div className="item">
            <img src={Youtube} alt="" />
            <span>Youtube</span>
          </div>
          </Link>
          <Link to="/travel">
          <div className="item">
            <img src={Travel} alt="" />
            <span>Travel & Adventure</span>
          </div>
          </Link>
        </div>
        <hr />
        <div className="menu">
          <span style={{ fontSize: "1.5em", fontWeight: "bold" }}>Others</span>
          <div className="item">
            <img src={Binoculars} alt="" />
            <span>Explore</span>
          </div>
          <div className="item">
            <img src={Coffee} alt="" />
            <span>Buy Me Coffee</span>
            <img src={Dollar}></img>
          </div>
          <div className="item">
            <img src={Settings} alt="" />
            <span>Settings</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;

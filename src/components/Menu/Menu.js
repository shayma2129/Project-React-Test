import React from "react";
import "./Menu.css";
import { Link } from "react-router-dom";

export default function Menu() {
  let loggedIn = localStorage.getItem("loggedIn");
  //console.log("loggedIn :", loggedIn);
  function handleLogout() {
    localStorage.removeItem("loggedIn");
    
  }
  return (
    <div>
      {loggedIn ? (
        <>
          
          <div className="Menu" id="myTopnav">
            <div className="nav-right">
              <a  href ="/Home" onClick={handleLogout}>
              <span className="glyphicon glyphicon-log-out"></span> Logout 
              </a>
              <Link to="/Profil"><span className="glyphicon glyphicon-user"></span> Profil</Link>
              <Link to="/BookPage"><span className="glyphicon glyphicon-book"></span> Books</Link>
              <Link to="/Home"><span className="glyphicon glyphicon-home"></span> Home</Link>
            </div>
            <div className="nav-left">
              <Link to="/Home">React Project</Link>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="Menu" id="myTopnav">
            <div className="nav-right">
              <Link to="/register"><span className="glyphicon glyphicon-list-alt"></span> Sign Up</Link>
              <Link to="/login"><span className="glyphicon glyphicon-log-in"></span> Sign In</Link>
              <Link to="/Home"><span className="glyphicon glyphicon-home"></span> Home</Link>
            </div>
            <div className="nav-left">
              <Link to="/Home">React Project</Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

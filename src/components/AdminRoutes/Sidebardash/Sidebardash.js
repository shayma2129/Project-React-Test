import React from 'react';
import './Sidebardash.css';
import {  NavLink, useRouteMatch } from "react-router-dom"

export default function Sidebardash() {
  let { path } = useRouteMatch()
  return (
   
     <div className="wrapper">
            <div className="sidebar">
                <h2>Sidebar Librarian</h2>
                <ul>
                  <li>
                  <NavLink to={`${path}/Members`} activeClassName="active">
                  Members
                  </NavLink>
                  </li>
                  <li>
                  <NavLink to={`${path}/Books`} activeClassName="active">
                  Books
                  </NavLink>
                  </li>
                  <li>
                  <NavLink to={`${path}/Emprunt`} activeClassName="active">
                  Emprunt
                  </NavLink>
                  </li>
                </ul>
            </div>
    </div>

  );
}



import React from "react";
import {NavLink} from "react-router-dom";

export const Menu = () => (
  <div>
    <ul>
      <li>
        <NavLink exact activeClassName="activeLink" to="/">Home</NavLink>
        <NavLink activeClassName="activeLink" to="/other">Other</NavLink>
        <NavLink activeClassName="activeLink" to="/not-found">Not Found</NavLink>
      </li>
    </ul>
  </div>
);

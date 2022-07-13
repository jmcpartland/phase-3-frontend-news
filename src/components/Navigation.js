import React from 'react';
import { NavLink } from "react-router-dom";

function Navigation() {
    return (
      <div className="nav">
        <nav>
            <ul>
                <li>
                <NavLink
                    to="/" >
                    Home
                </NavLink>
                </li>
                <li>
                <NavLink
                    to="/sources" >
                    Sources
                </NavLink>
                </li>
                <li>
                <NavLink 
                    to="/articles" >
                    Articles
                </NavLink>
                </li>
            </ul>
        </nav>
      </div>
    )
}

export default Navigation
import React from 'react';
import { NavLink } from "react-router-dom";

function Navigation() {
    return (
      <dev className="nav">
        <p >Navigation</p>
        <nav>
            <ul>
                <li>
                <NavLink
                    to="/articles" >
                    Articles
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
                    to="/" >
                        Home
                </NavLink>
                </li>
            </ul>
        </nav>
      </dev>
    )
}

export default Navigation
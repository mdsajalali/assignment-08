import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="container">
      <div className="header">
        <Link to="/">
          <h1>WalletWise</h1>
        </Link>
        <ul className="nav-menu">
          <li>
            <NavLink
              to="/"
              style={({ isActive }) =>
                isActive ? { color: "red" } : { color: "white" }
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/income"
              style={({ isActive }) =>
                isActive ? { color: "red" } : { color: "white" }
              }
            >
              Income
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/expenses"
              style={({ isActive }) =>
                isActive ? { color: "red" } : { color: "white" }
              }
            >
              Expenses
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
const Header = () => {
  return (
    <>
      <div className="nav">
        <ul>
          <Link to="/add">
            {" "}
            <li>
              <a href="">Add</a>
            </li>
          </Link>
          <Link to="/">
            <li>
              <a href="">Lists</a>
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Header;

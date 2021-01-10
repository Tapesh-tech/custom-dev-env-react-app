import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "blue" };
  return (
    <nav>
      <NavLink to="/" exact activeStyle={activeStyle}>
        Home
      </NavLink>
      {" || "}
      <NavLink to="/courses" exact activeStyle={activeStyle}>
        Courses
      </NavLink>
      {" || "}
      <NavLink to="/about" exact activeStyle={activeStyle}>
        About Us
      </NavLink>
    </nav>
  );
};

export default Header;

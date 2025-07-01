import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav>
      <Link to={"/"}>
        <p>Home</p>
      </Link>
      <Link to={"/about"}>
        <p>About</p>
      </Link>
      <Link to={"/contact"}>
        <p>Contact</p>
      </Link>
    </nav>
  );
};

export default Navbar;

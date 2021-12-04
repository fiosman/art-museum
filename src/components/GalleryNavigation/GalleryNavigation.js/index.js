import React from "react";
import { NavLink } from "react-router-dom";
const GalleryNavigation = ({ ...galleries }) => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <h1>Galleries </h1>
    </nav>
  );
};

export default GalleryNavigation;

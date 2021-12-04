import React from "react";
import { NavLink } from "react-router-dom";
import "./GalleryNavigation.css";
const GalleryNavigation = ({ galleries }) => {
  const buildGalleries = () =>
    galleries.map((gallery, idx) => (
      <NavLink key={idx} to={`/galleries/${gallery.galleryid}`}>
        {gallery.name}
      </NavLink>
    ));

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <h1>Galleries </h1>
      {buildGalleries()}
    </nav>
  );
};

export default GalleryNavigation;

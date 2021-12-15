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
      <h2>Harvard Art Museum</h2>
      <p>Look, but don't touch. Please select a gallery in the navigation bar.</p>
      {buildGalleries()}
    </nav>
  );
};

export default GalleryNavigation;

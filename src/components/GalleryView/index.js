import React from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";

const GalleryView = ({ galleries }) => {
  const params = useParams();
  const buildGallery = () =>
    galleries.find((gallery) => gallery.gallerynumber === params.galleryId).name;

  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
      </nav>
      <h2>{buildGallery()}</h2>
    </div>
  );
};

export default GalleryView;

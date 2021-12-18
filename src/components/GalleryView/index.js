import React from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import ArtImageTile from "../ArtImageTile";

const GalleryView = ({ galleries }) => {
  console.log(galleries);
  const params = useParams();
  const buildGallery = () =>
    galleries.find((gallery) => gallery.gallerynumber === params.galleryId).name;

  const BuildArtImageTiles = () =>
    galleries.map((gallery) => <ArtImageTile prop={gallery.objects[0].images} />);

  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
      </nav>
      <h2>{buildGallery()}</h2>
      <BuildArtImageTiles />
    </div>
  );
};

export default GalleryView;

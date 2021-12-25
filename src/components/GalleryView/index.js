import React from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import ArtImageTile from "../ArtImageTile";

const GalleryView = ({ galleries }) => {
  const params = useParams();

  const buildGalleryName = () =>
    galleries.find((gallery) => gallery.gallerynumber === params.galleryId).name;

  const BuildArtImageTiles = () => {
    const currentGallery = galleries.find((gallery) => gallery.gallerynumber === params.galleryId);
    return currentGallery.objects.map((artWork) => <ArtImageTile art={artWork.images[0]} />);
  };

  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
      </nav>
      <h2>{buildGalleryName()}</h2>
      <BuildArtImageTiles />
    </div>
  );
};

export default GalleryView;

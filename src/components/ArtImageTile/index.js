import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";

const ArtImageTile = ({ art }) => {
  const params = useParams();
  return (
    <div>
      <Link to={`/galleries/${params.galleryId}/art/${art.imageid}`}>
        <img src={art.baseimageurl} />
      </Link>
    </div>
  );
};

export default ArtImageTile;

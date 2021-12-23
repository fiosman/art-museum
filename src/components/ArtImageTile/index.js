import React from "react";

const ArtImageTile = ({ art }) => {
  return <div>{art.images[0].imageid}</div>;
};

export default ArtImageTile;

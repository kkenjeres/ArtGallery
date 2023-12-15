import React from "react";
import ArtPiecePreview from "./ArtPiecePreview";

const Spotlight = ({ data }) => {
  const getRandomArt = Math.floor(Math.random() * data.length);
  const getSpotlight = data[getRandomArt];
  return <ArtPiecePreview data={getSpotlight} />;
};

export default Spotlight;

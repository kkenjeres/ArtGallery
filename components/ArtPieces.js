import React from "react";
import ArtPiecePreview from "./ArtPiecePreview";

const ArtPieces = ({ data, checkIsFavorite, onToggleFavorite }) => {
  return (
    <>
      {data.map((item) => (
        <li key={item.slug}>
          <ArtPiecePreview
            data={item}
            checkIsFavorite={checkIsFavorite}
            onToggleFavorite={onToggleFavorite}
          />
        </li>
      ))}
    </>
  );
};

export default ArtPieces;

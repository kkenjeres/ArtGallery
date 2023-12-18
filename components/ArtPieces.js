import React from "react";
import ArtPiecePreview from "./ArtPiecePreview";

const ArtPieces = ({ data, artPiecesInfo, onToggleFavorite }) => {
  return (
    <>
      {data.map((item) => (
        <li key={item.slug}>
          <ArtPiecePreview
            data={item}
            artPiecesInfo={artPiecesInfo}
            onToggleFavorite={onToggleFavorite}
          />
        </li>
      ))}
    </>
  );
};

export default ArtPieces;

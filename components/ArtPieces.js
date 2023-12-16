import React from "react";
import ArtPiecePreview from "./ArtPiecePreview";

const ArtPieces = ({ data }) => {
  return (
    <>
      {data.map((item) => (
        <li key={item.slug}>
          <ArtPiecePreview data={item} />
        </li>
      ))}
    </>
  );
};

export default ArtPieces;

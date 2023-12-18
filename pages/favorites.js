import ArtPieces from "@/components/ArtPieces";
import React from "react";

export default function Favorites({ artPiecesInfo, onToggleFavorite }) {
  return (
    <ArtPieces
      data={artPiecesInfo}
      artPiecesInfo={artPiecesInfo}
      onToggleFavorite={onToggleFavorite}
    />
  );
}

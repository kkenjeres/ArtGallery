import ArtPieces from "@/components/ArtPieces";
import React from "react";

export default function Favorites({ data, checkIsFavorite, onToggleFavorite }) {
  const favoritePieces = data.filter((item) => checkIsFavorite(item.slug));

  return (
    <ArtPieces
      data={favoritePieces}
      checkIsFavorite={checkIsFavorite}
      onToggleFavorite={onToggleFavorite}
    />
  );
}

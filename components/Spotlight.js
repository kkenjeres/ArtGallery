import ArtPiecePreview from "./ArtPiecePreview";

const Spotlight = ({ onToggleFavorite, checkIsFavorite, spotlightPiece }) => {
  return (
    <ArtPiecePreview
      data={spotlightPiece}
      checkIsFavorite={checkIsFavorite}
      onToggleFavorite={onToggleFavorite}
    />
  );
};

export default Spotlight;

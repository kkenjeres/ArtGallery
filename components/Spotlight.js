import ArtPiecePreview from "./ArtPiecePreview";

const Spotlight = ({ onToggleFavorite, artPiecesInfo, spotlightPiece }) => {
  return (
    <ArtPiecePreview
      data={spotlightPiece}
      artPiecesInfo={artPiecesInfo}
      onToggleFavorite={onToggleFavorite}
    />
  );
};

export default Spotlight;

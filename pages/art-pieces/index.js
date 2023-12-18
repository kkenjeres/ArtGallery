import ArtPieces from "@/components/ArtPieces";

export default function ArtPiecesPage({
  data,
  checkIsFavorite,
  onToggleFavorite,
}) {
  return (
    <>
      <ArtPieces
        data={data}
        checkIsFavorite={checkIsFavorite}
        onToggleFavorite={onToggleFavorite}
      />
    </>
  );
}

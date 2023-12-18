import ArtPieces from "@/components/ArtPieces";

export default function ArtPiecesPage({
  data,
  artPiecesInfo,
  onToggleFavorite,
}) {
  return (
    <>
      <ArtPieces
        data={data}
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={onToggleFavorite}
      />
    </>
  );
}

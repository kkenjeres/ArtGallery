import ArtPieceDetails from "@/components/ArtPieceDetails";
import { useRouter } from "next/router";
import useSWR from "swr";

export default function ArtPieceDetailsPage() {
  const router = useRouter();
  const { slug } = router.query;

  const url = "https://example-apis.vercel.app/api/art";
  const { data, error, isLoading } = useSWR(url);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  const currentPiece = data.find((artPiece) => artPiece.slug === slug);

  return (
    <>
      <ArtPieceDetails
        image={currentPiece.imageSource}
        title={currentPiece.name}
        artist={currentPiece.artist}
        year={currentPiece.year}
        genre={currentPiece.genre}
      />
    </>
  );
}

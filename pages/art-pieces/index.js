import ArtPieces from "@/components/ArtPieces";
import React from "react";
import useSWR from "swr";

export default function ArtPiecesPage() {
  const url = "https://example-apis.vercel.app/api/art";
  const { data, error, isLoading } = useSWR(url);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return <ArtPieces data={data} />;
}

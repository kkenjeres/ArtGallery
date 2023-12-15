import ArtPieces from "@/components/ArtPieces";
import useSWR from "swr";

export default function HomePage() {
  const url = "https://example-apis.vercel.app/api/art";
  const { data, error, isLoading } = useSWR(url);
  console.log("index", data);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <ArtPieces data={data} />
    </>
  );
}

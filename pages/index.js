import ArtPieces from "@/components/ArtPieces";
import useSWR from "swr";
import Spotlight from "@/components/Spotlight";

export default function HomePage() {
  const url = "https://example-apis.vercel.app/api/art";
  const { data, error, isLoading } = useSWR(url);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <Spotlight data={data} />
      <ArtPieces data={data} />
    </>
  );
}

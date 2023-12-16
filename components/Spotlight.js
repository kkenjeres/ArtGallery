import useSWR from "swr";
import ArtPiecePreview from "./ArtPiecePreview";

const Spotlight = () => {
  const url = "https://example-apis.vercel.app/api/art";
  const { data, error, isLoading } = useSWR(url);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  const getRandomArt = Math.floor(Math.random() * data.length);
  const getSpotlight = data[getRandomArt];
  return <ArtPiecePreview data={getSpotlight} />;
};

export default Spotlight;

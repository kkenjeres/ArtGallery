import GlobalStyle from "../styles";
import Layout from "@/components/Layout";

import useSWR from "swr";
import { useState } from "react";

const URL = "https://example-apis.vercel.app/api/art";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const [artPiecesInfo, setArtPiecesInfo] = useState([]);
  console.log("🚀  artPiecesInfo:", artPiecesInfo);

  const { data, error, isLoading } = useSWR(URL, fetcher);

  function handleOnToggle(slug) {
    const clickedPiece = data.find((piece) => piece.slug === slug);

    setArtPiecesInfo(
      artPiecesInfo.includes(clickedPiece)
        ? artPiecesInfo.filter((piece) => piece !== clickedPiece)
        : [clickedPiece, ...artPiecesInfo]
    );
  }

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>failed to load</div>;

  return (
    <Layout>
      <GlobalStyle />
      <Component
        {...pageProps}
        data={data}
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={handleOnToggle}
      />
    </Layout>
  );
}

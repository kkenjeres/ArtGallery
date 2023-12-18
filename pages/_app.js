import GlobalStyle from "../styles";
import Layout from "@/components/Layout";

import useSWR from "swr";
import { useState } from "react";

// artPieceLocalData
/*
{
  slug: string
  isFavorite: boolean
}[]
*/

/*
string[]
*/

const URL = "https://example-apis.vercel.app/api/art";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const { data, error, isLoading } = useSWR(URL, fetcher);
  const [artPiecesLocalData, setArtPiecesLocalData] = useState([]);

  function checkIsFavorite(slug) {
    // for the given slug
    // check if I can find data in the local data
    // and return true, only if the artpiece has been saved as a favorite

    const foundLocalData = artPiecesLocalData.find(
      (item) => item.slug === slug
    );

    if (!foundLocalData) {
      // case: no local data found
      return false;
    }

    return foundLocalData.isFavorite; // returns true if isFavorite is true
  }

  function handleToggleFavorite(slug) {
    const localData = artPiecesLocalData.find((item) => item.slug === slug);

    if (!localData) {
      const newLocalData = {
        slug,
        isFavorite: true,
      };

      setArtPiecesLocalData([...artPiecesLocalData, newLocalData]);
    } else {
      const updatedArtPiecesLocalData = artPiecesLocalData.map((item) => {
        if (item.slug === slug) {
          return {
            ...item,
            isFavorite: !item.isFavorite,
          };
        } else {
          return item;
        }
      });
      setArtPiecesLocalData(updatedArtPiecesLocalData);
      return;
    }
  }

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>failed to load</div>;

  return (
    <Layout>
      <GlobalStyle />
      <Component
        {...pageProps}
        data={data}
        checkIsFavorite={checkIsFavorite}
        onToggleFavorite={handleToggleFavorite}
      />
    </Layout>
  );
}

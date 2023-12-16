import { SWRConfig } from "swr";
import useSWR from "swr";
import GlobalStyle from "../styles";
import Layout from "@/components/Layout";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const url = "https://example-apis.vercel.app/api/art";
  const { error, isLoading } = useSWR(url);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <SWRConfig value={{ fetcher }}>
      <Layout />
      <GlobalStyle />
      <Component {...pageProps} />
    </SWRConfig>
  );
}

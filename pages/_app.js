import { SWRConfig } from "swr";
import GlobalStyle from "../styles";
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <SWRConfig value={{ fetcher}}>
        <Component {...pageProps} />
      </SWRConfig>
    </>
  );
}

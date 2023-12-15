import GlobalStyle from "../styles";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <h1>Hello</h1>
      <Component {...pageProps} />
    </>
  );
}

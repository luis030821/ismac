import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Autismo</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/react-toastify@9.1.3/dist/ReactToastify.min.css"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

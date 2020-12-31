import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <body>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Chris Chapman</title>
      </Head>

      <div class="top">卌</div>

      <Component {...pageProps} />
    </body>
  );
}

export default MyApp;

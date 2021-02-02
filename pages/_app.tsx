import React from "react";
import "./css/index.css";

function MyApp({ Component, pageProps, router }) {
  return <Component {...pageProps} key={router.route} />;
}

export default MyApp;

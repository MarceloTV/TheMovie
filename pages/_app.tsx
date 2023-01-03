import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap");
  }, []);

  return <Component {...pageProps} />;
}

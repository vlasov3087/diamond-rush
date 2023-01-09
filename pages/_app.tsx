import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { useEventListener } from "../hooks/useEventListener";

export default function App({ Component, pageProps }: AppProps) {
  const handleLoaded = (): void => {
    if (document.readyState) {
      const loader = document.getElementById("globalLoader");
      if (loader) {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
      }
    }
  };
  useEventListener(undefined, "readystatechange", handleLoaded);

  return <Component {...pageProps} />;
}

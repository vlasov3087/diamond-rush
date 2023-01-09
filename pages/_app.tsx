import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { useEventListener } from "../hooks/useEventListener";

export default function App({ Component, pageProps }: AppProps) {
  const handleLoaded = (): void => {
    const loader = document.getElementById("globalLoader");
    if (loader) loader.style.display = "none";
  };
  useEventListener(undefined, "scroll", handleLoaded);

  return <Component {...pageProps} />;
}

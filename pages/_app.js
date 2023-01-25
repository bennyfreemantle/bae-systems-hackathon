import { ScoreProvider } from "@/context/useScore";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <ScoreProvider>
      <Component {...pageProps} />
    </ScoreProvider>
  );
}

import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import { AppProps } from "next/app";
import { LightboxContextProvider } from "../contexts/lightboxContext";
import { ManagedUIContext } from "../contexts/uiContext";

function App({ Component, pageProps }: AppProps) {
  return (
    <LightboxContextProvider>
      <ManagedUIContext>
        <Component {...pageProps} />
      </ManagedUIContext>
    </LightboxContextProvider>
  );
}

export default App;

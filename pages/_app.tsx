import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import { AppProps } from "next/app";
import { LightboxContextProvider } from "../contexts/lightboxContext";
import { ManagedUIContext } from "../contexts/uiContext";
import React from "react";
import PrimaryLayout from "../components/common/layout/PrimaryLayout";
declare global {
  interface Window {
    fbAsyncInit: any;
  }
}

function App({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    window.fbAsyncInit = function () {
      FB.init({
        xfbml: true,
        version: "v10.0",
      });
    };

    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }, []);
  return (
    <LightboxContextProvider>
      <ManagedUIContext>
        <PrimaryLayout>
          <Component {...pageProps} />
        </PrimaryLayout>
      </ManagedUIContext>
    </LightboxContextProvider>
  );
}

export default App;

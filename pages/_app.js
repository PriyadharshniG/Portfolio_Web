import React, { useEffect } from "react";
import Head from "next/head";
import "./global.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Caveat, Poppins, Kanit } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
  variable: "--font-poppins",
});

export const caveat = Caveat({
  subsets: ["latin"],
  display: "swap",
  weight: ["500"],
  variable: "--font-caveat",
});

export const kanit = Kanit({
  subsets: ["latin"],
  display: "swap",
  weight: ["600"],
  variable: "--font-kanit",
});

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const originalTitle = document.title;
    function handleVisibilityChange() {
      if (document.hidden) {
        document.title = "Come Back!!";
      } else {
        document.title = originalTitle;
      }
    }

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);
  return (
    <React.Fragment>
      <Head>
        <title>Dheena S | ML Engineer </title>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
       
        <meta name="author" content="Dheena S" />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Dheena S - ML Engineer Portfolio"
        />
       
       
        <meta property="og:site_name" content="Dheena S Portfolio"></meta>
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Dheena S - ML Engineer Portfolio"
        />
      
        <link rel="icon" type="image/x-icon" href="/favico.png" />
        <link rel="icon" type="image/png" href="/favico.png" />
      </Head>
      <main
        className={`${poppins.variable} ${caveat.variable} ${kanit.variable}`}
      >
        <Component {...pageProps} />
      </main>
      <Analytics />
      <SpeedInsights />
    </React.Fragment>
  );
}

export default MyApp;

import React, { useEffect } from "react";
import Head from "next/head";
import "./global.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
          <title>Vikas Chauhan | Web Developer </title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
          <meta
            name="description"
            content="Explore my web development portfolio to see my latest projects and skills in action. I specialize in creating responsive and user-friendly websites."
          />
          <meta
            name="keywords"
            content="Web Developer, Portfolio, HTML, CSS, JavaScript, Responsive Design, Web Development Projects"
          />
          <meta name="author" content="Vikas Chauhan" />
          <meta name="robots" content="index, follow" />
          <meta
            property="og:title"
            content="Vikas Chauhan - Web Developer Portfolio"
          />
          <meta
            property="og:description"
            content="Explore my web development portfolio to see my latest projects and skills in action."
          />
          <meta
            property="og:image"
            content="https://www.vikaschauhan.live/myphoto@2x.png"
          />
          <meta property="og:url" content="https://www.vikaschauhan.live/" />

          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
        <Analytics />
        <SpeedInsights />
    </React.Fragment>
  );
}

export default MyApp;

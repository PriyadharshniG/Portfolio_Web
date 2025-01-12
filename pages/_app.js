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
        <title>Vikas Chauhan | Web Developer </title>
        <meta charSet="UTF-8" />
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
          content="https://vikaschauhan.vercel.app/og-image.png"
        />
        <meta property="og:url" content="https://vikaschauhan.vercel.app/" />
        <meta property="og:site_name" content="Vikas Chauhan Portfolio"></meta>
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Vikas Chauhan - Web Developer Portfolio"
        />
        <meta
          name="twitter:description"
          content="Explore my web development portfolio to see my latest projects and skills in action."
        />
        <meta
          name="twitter:image"
          content="https://vikaschauhan.vercel.app/og-image.png"
        />
        <meta
          name="google-site-verification"
          content="4_s8FW5N-hZvaaSYMNR6a4KtE2EwjGXq3gRBa8NVxew"
        />

        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" href="/favicon.png" />
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

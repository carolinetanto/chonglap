// import { Footer } from "@/components/Footer";
// import { Navbar } from "@/components/Navbar";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        {/* <Navbar /> */}
        <div className="content-wrapper">
          <div className="blob" />
          <div className="blob" />
          <div className="blob" />
          <div className="blob" />
          <div className="blob" />
          <div className="blob" />
          <Main />
        </div>
        <NextScript />
        {/* <Footer /> */}
      </body>
    </Html>
  );
}
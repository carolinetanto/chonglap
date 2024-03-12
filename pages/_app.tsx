import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Canvas } from "@react-three/fiber";
import AnimatedMeshBackground from "@/components/AnimatedMeshBackground";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      {/* <Canvas>
        <AnimatedMeshBackground />
      </Canvas> */}
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import IntroAnimation from "../components/IntroAnimation";
import background4 from "../images/background4.jpg";
import Navbar from "../components/Navbar";
import IntroPage from "../components/IntroPage";

export default function Home() {
  const [animation, toggleAnimation] = useState(false);

  return (
    <div className="min-h-screen w-screen bg-[url(../images/background4.jpg)] bg-fixed bg-cover">
      {animation ? (
        <IntroAnimation toggleAnimation={toggleAnimation} />
      ) : (
        <div>
          <Navbar />
          <IntroPage />
        </div>
      )}
    </div>
  );
}

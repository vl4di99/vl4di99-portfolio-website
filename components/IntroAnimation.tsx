import Image from "next/image";
import React, { Dispatch, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import background1 from "../images/background1.jpg";

interface Props {
  toggleAnimation: Dispatch<React.SetStateAction<boolean>>;
}

const delayToggle = (toggle: Dispatch<React.SetStateAction<boolean>>) => {
  setTimeout(() => {
    toggle(false);
  }, 2000);
};

function IntroAnimation({ toggleAnimation }: Props) {
  const [enableOtherTypewriter, setEnableOtherTypewriter] = useState(false);
  return (
    <div className="flex flex-col justify-center items-center min-h-screen w-screen">
      <Image
        src={background1}
        layout="fill"
        objectFit="cover"
        alt="image"
        className="-z-50"
      />

      <div className="text-4xl font-extrabold m-5">
        <Typewriter
          words={["Hello, my name is Dionisie-Vl\u0103du\u0163 L\u00F6rincz"]}
          typeSpeed={70}
          loop={1}
          cursor={!enableOtherTypewriter}
          onLoopDone={() => setEnableOtherTypewriter(true)}
        />
      </div>
      <div className="text-2xl">
        {enableOtherTypewriter && (
          <Typewriter
            words={["Welcome to my Portfolio!"]}
            typeSpeed={100}
            loop={1}
            cursor
            onLoopDone={() => delayToggle(toggleAnimation)}
          />
        )}
      </div>
    </div>
  );
}

export default IntroAnimation;

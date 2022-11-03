import React from "react";
import tw from "tailwind-styled-components";

type Props = {};

function IntroPage({}: Props) {
  return (
    <Container>
      <Text>
        I'm Vladi, an Engineer, a Full-Stack Web Developer and a Security
        passionate. I love to bring websites and mobile apps to life, am very
        enthusiastic, energetic and learn anything very fast, especially tech
        related stuff.
      </Text>
    </Container>
  );
}

export default IntroPage;

const Container = tw.div<any>`
flex flex-col items-center`;

const Text = tw.div`
 flex self-start m-52 w-2/12 text-neutral-100 text-2xl font-grotleyRegular
`;

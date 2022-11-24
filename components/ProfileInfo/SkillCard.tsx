import Image from "next/image";
import React from "react";
import tw from "tailwind-styled-components";

interface Skill {
	skill: string;
	link: string;
	image_url: string;
}

type Props = {
	allSkills: Array<Skill>;
};

const SkillCard = ({ allSkills }: Props) => {
	return (
		<Container>
			{allSkills.map((skill, index) => (
				<a href={skill.link} target="_blank" rel="noreferrer">
					<MiniContainer key={index}>
						<Image
							src={`/images/skills/${skill.image_url}`}
							alt={skill.skill}
							width={100}
							height={100}
							className="object-contain w-full h-full"
						/>
					</MiniContainer>
				</a>
			))}
		</Container>
	);
};

export default SkillCard;

const Container = tw.div<any>`
  flex flex-row justify-center items-center border-solid border-red-100 border-4 border-spacing-5 m-5 p-5 rounded-3xl gap-10 flex-wrap
  sm:w-11/12
  lg:w-2/3
`;

const MiniContainer = tw.div<any>`
    flex justify-center items-center bg-gradient-to-b from-emerald-900 to-emerald-400 p-6 bg-opacity-50 border-4 border-emerald-700 rounded-full
    hover:scale-90 transform transition duration-300 ease-in-out
    lg:w-36 lg:h-36
    sm:w-28 sm:h-28
`;

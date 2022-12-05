import Image from "next/image";
import React from "react";
import tw from "tailwind-styled-components";

interface Skill {
	skill: string;
	link: string;
	image_url: string;
}

type Props = {
	skill: Skill;
};

const SkillCard = ({ skill }: Props) => {
	return (
		<Container>
			<a href={skill.link} target="_blank" rel="noreferrer">
				<MiniContainer>
					<ImageContainer>
						<Image
							src={`/images/skills/${skill.image_url}`}
							alt={skill.skill}
							width={100}
							height={100}
							className="object-contain w-full h-full"
						/>
					</ImageContainer>
					<SkillName>{skill.skill}</SkillName>
				</MiniContainer>
			</a>
		</Container>
	);
};

export default SkillCard;

const Container = tw.div<any>`
flex flex-col justify-center items-center 
bg-gradient-to-t from-emerald-900 to-emerald-200 p-6 bg-opacity-50 border-2 border-emerald-700 rounded-2xl w-48
hover:scale-90 transform transition duration-300 ease-in-out
lg:w-1/6
`;

const MiniContainer = tw.div<any>`
    flex flex-col justify-center items-center w-40
    lg:w-52
`;

const ImageContainer = tw.div<any>`
	flex justify-center items-center
	bg-gradient-to-b from-emerald-900 to-emerald-400 p-6 bg-opacity-50 border-4 border-emerald-700 rounded-full
	w-28 h-28
	hover:scale-90 transform transition duration-300 ease-in-out
	lg:w-36 lg:h-36
`;

const SkillName = tw.h3`
	text-sm text-white font-bold
	lg:text-lg
`;

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
							src={`/images/softskills/${skill.image_url}`}
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
bg-gradient-to-t from-orange-900 to-orange-300 p-6 bg-opacity-50 border-2 border-orange-700 rounded-2xl w-48
hover:scale-90 transform transition duration-300 ease-in-out
xl:w-1/6
`;

const MiniContainer = tw.div<any>`
    flex flex-col justify-center items-center w-40 h-full
    lg:w-52
`;

const ImageContainer = tw.div<any>`
	flex justify-center items-center
	bg-gradient-to-b from-orange-900 to-orange-400 p-6 bg-opacity-50 border-4 border-orange-700 rounded-full
	w-28 h-28
	hover:scale-90 transform transition duration-300 ease-in-out
	xl:w-36 xl:h-36
    
`;

const SkillName = tw.h3`
	text-sm text-white font-bold w-40 text-center p-2
	lg:text-lg break-words
`;

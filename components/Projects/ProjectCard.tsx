import Image from "next/image";
import React from "react";
import tw from "tailwind-styled-components";

type Props = {
	project: {
		title: string;
		url: string;
		frontend: string[];
		backend?: string[];
		database?: string[];
		styling: string[];
		otherTech?: string[];
		images?: string[];
		about: string;
	};
};

const ProjectCard = ({ project }: Props) => {
	return (
		<Container onClick={() => window.open(project.url, "_blank")}>
			<MiniContainer>
				<Title>{project.title}</Title>
				<Frontend>
					<b>Frontend: </b>
					{project.frontend.map((tech, index) => {
						if (index === project.frontend.length - 1) return tech;
						else return tech + ", ";
					})}
				</Frontend>
				<Backend>
					<b>Backend: </b>
					{project.backend?.length !== undefined
						? project.backend?.map((tech, index) => {
								if (project.backend?.length !== undefined) {
									if (index === project.backend?.length - 1)
										return tech;
									else return tech + ", ";
								}
						  })
						: "No backend used"}
				</Backend>
				<Databases>
					<b>Databases: </b>
					{project.database?.length !== undefined
						? project.database?.map((tech, index) => {
								if (project.database?.length !== undefined) {
									if (index === project.database?.length - 1)
										return tech;
									else return tech + ", ";
								} else return "No databases used";
						  })
						: "No databases used"}
				</Databases>
				<Styling>
					<b>Styling: </b>
					{project.styling.map((tech, index) => {
						if (index === project.styling.length - 1) return tech;
						else return tech + ", ";
					})}
				</Styling>
				<OtherTech>
					<b>Other Technologies: </b>
					{project.otherTech?.map((tech, index) => {
						if (project.otherTech?.length !== undefined) {
							if (index === project.otherTech?.length - 1)
								return tech;
							else return tech + ", ";
						} else return "No other technologies used";
					})}
				</OtherTech>
				<Images>
					<b>Images: </b>
					{project.images?.length !== undefined
						? project.images?.map((image) => (
								<Image
									src={image}
									width={100}
									height={100}
									alt={image}
								/>
						  ))
						: "No images available"}
				</Images>
				<About>
					<b>About: </b>
					{project.about}
				</About>
			</MiniContainer>
		</Container>
	);
};

export default ProjectCard;

const Container = tw.div<any>`
	flex flex-col items-center cursor-pointer 
	border-white p-2 border-2 bg-zinc-600 bg-opacity-70 rounded-xl w-11/12 h-auto m-5
	hover:scale-90 hover:transition-all
	lg:w-1/4
`;

const MiniContainer = tw.div<any>`
	flex flex-col items-start h-full
	border-2 border-emerald-500 p-3 rounded-xl bg-emerald-900 bg-opacity-30
`;

const Title = tw.h2<any>`
	flex justify-center
	text-4xl text-emerald-100 mb-5 border-b-4 w-full pb-2 rounded-2xl
`;

const Frontend = tw.div<any>`
    text-xl text-emerald-400
`;

const Backend = tw.div<any>`
	text-xl text-amber-400
`;

const Databases = tw.div<any>`
	text-xl text-emerald-400
`;

const Styling = tw.div<any>`
	text-xl text-amber-400
`;

const OtherTech = tw.div<any>`
	text-xl text-emerald-400
`;

const Images = tw.div<any>`
	text-xl text-red-800
`;

const About = tw.div<any>`
	text-xl text-emerald-400
`;

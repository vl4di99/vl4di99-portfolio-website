import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import ProjectCard from "./ProjectCard";

const ProjectsPage = () => {
	const [projectsData, setProjectsData] = useState([]);

	useEffect(() => {
		fetch("api/projects")
			.then((res) => res.json())
			.then((result) => setProjectsData(result.projects));
	}, []);

	return (
		<Container>
			<Title>Projects</Title>
			<CardsContainer>
				{projectsData.map((singleProject, index) => (
					<ProjectCard project={singleProject} key={index} />
				))}
			</CardsContainer>
		</Container>
	);
};

export default ProjectsPage;

const Container = tw.div<any>`
 flex flex-col items-center justify-center
`;

const CardsContainer = tw.div<any>`
flex flex-col justify-center w-full
lg:flex-row lg:flex-wrap lg:justify-evenly
mt-5 
`;

const Title = tw.h2<any>`
	text-5xl font-bold text-center mt-5 text-white font-bagero
`;

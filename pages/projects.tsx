import React from "react";
import Navbar from "../components/Navbar";
import ParticlesBackground from "../components/Particles/ParticlesBackground";
import ProjectsPage from "../components/Projects/ProjectsPage";

type Props = {};

const projects = (props: Props) => {
	return (
		<div>
			<ParticlesBackground />
			<Navbar />
			<ProjectsPage />
		</div>
	);
};

export default projects;

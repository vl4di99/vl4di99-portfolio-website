import React from "react";
import tw from "tailwind-styled-components";
import { useRecoilValue } from "recoil";
import { profileJsonState } from "../recoil/profile";
import JobsCard from "./ProfileInfo/JobsCard";
import CoursesCard from "./ProfileInfo/CoursesCard";
import Image from "next/image";
import ProfilePic from "../images/ProfilePic.jpeg";
import CertificationsCard from "./ProfileInfo/CertificationsCard";
import EducationCard from "./ProfileInfo/EducationCard";
import SkillCard from "./ProfileInfo/SkillCard";

type Props = {};

function IntroPage({}: Props) {
	const profileInfo = useRecoilValue(profileJsonState);

	return (
		<Container>
			<Header>
				<Image
					src={ProfilePic}
					alt="Profile Picture"
					className="rounded-full w-40 h-40 border-green-700 border-4 lg:w-72 lg:h-72"
				/>
				<Text>
					<div className="text-orange-100 text-7xl w-full">
						I'm Vladi,
					</div>
					{profileInfo.mainInfo.shortIntro}
				</Text>
			</Header>

			<ExpTitle>Experience</ExpTitle>
			<HRow />
			<JobInfo>
				{profileInfo.jobs.map((element, index) => {
					return <JobsCard info={element} key={index} />;
				})}
			</JobInfo>

			<ExpTitle>Certifications</ExpTitle>
			<HRow />
			<JobInfo>
				{profileInfo.certifications.map((element, index) => (
					<CertificationsCard certification={element} key={index} />
				))}
			</JobInfo>

			<ExpTitle>Courses</ExpTitle>
			<HRow />
			<JobInfo>
				<CoursesCard courses={profileInfo.courses} />
			</JobInfo>

			<ExpTitle>Education</ExpTitle>
			<HRow />
			<JobInfo>
				{profileInfo.education.map((element, index) => (
					<EducationCard education={element} key={index} />
				))}
			</JobInfo>

			<ExpTitle>Skills</ExpTitle>
			<HRow />
			<JobInfo>
				<SkillCard allSkills={profileInfo.skills} />
			</JobInfo>
		</Container>
	);
}

export default IntroPage;

const Container = tw.div<any>`
flex flex-col items-center
`;

const Header = tw.div<any>`
flex flex-col items-center justify-start mt-5 px-10
lg:flex-row lg:px-28
`;

const Text = tw.div<any>`
 flex flex-col self-start text-neutral-100 text-2xl font-grotleyRegular my-3
 lg:w-4/12 lg:m-20
 w-full
`;

const ExpTitle = tw.h1<any>`
  text-5xl text-orange-200 font-bagero 
  lg:text-6xl
`;

const JobInfo = tw.div<any>`
  flex flex-col justify-center w-full
  lg:flex-row lg:flex-wrap
`;

const HRow = tw.div<any>`
  bg-white h-2 w-1/2 m-2 rounded-xl
  `;

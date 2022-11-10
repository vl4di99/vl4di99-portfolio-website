import React from 'react';
import tw from 'tailwind-styled-components';
import { useRecoilValue } from 'recoil';
import { profileJsonState } from '../recoil/profile';
import JobsCard from './ProfileInfo/JobsCard';
import CoursesCard from './ProfileInfo/CoursesCard';
import Image from 'next/image';
import ProfilePic from '../images/ProfilePic.jpeg';
import { Container } from '../styles/CustomComponents';
import CertificationsCard from './ProfileInfo/CertificationsCard';

type Props = {};

function IntroPage({}: Props) {
	const profileInfo = useRecoilValue(profileJsonState);

	return (
		<Container>
			<Header>
				<Image
					src={ProfilePic}
					alt="Profile Picture"
					className="rounded-full w-72 h-72 border-green-700 border-4"
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
		</Container>
	);
}

export default IntroPage;

const Header = tw.div<any>`
flex flex-row items-center justify-start mt-5 px-28
`;

const Text = tw.div<any>`
 flex self-start m-20 text-neutral-100 text-2xl font-grotleyRegular flex-col
 lg:w-4/12
 sm:w-11/12
`;

const ExpTitle = tw.h1<any>`
  text-6xl text-orange-200 font-bagero 
`;

const JobInfo = tw.div<any>`
  flex flex-row flex-wrap justify-center
`;

const HRow = tw.div<any>`
  bg-white h-2 w-1/2 m-2 rounded-xl
  `;

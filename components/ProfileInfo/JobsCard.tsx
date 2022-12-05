import moment from "moment";
import React from "react";
import tw from "tailwind-styled-components";

interface Info {
	title: string;
	company: string;
	location: string;
	startDate: string;
	endDate: string;
	industry: string;
	description: Array<string>;
}

type Props = {
	info: Info;
};

const JobsCard = ({ info }: Props) => {
	return (
		<Container>
			<MiniContainer>
				<TopInfo>
					<JobTitle>{info.title}</JobTitle>
					<JobCompanyLocation>
						{info.company} - {info.location}
					</JobCompanyLocation>
					<JobDate>
						{info.startDate.length > 4
							? moment(info.startDate).format("MMM YYYY")
							: info.startDate}{" "}
						{" -> "}
						{info.endDate === "Present"
							? "Present"
							: info.endDate.length > 4
							? moment(info.endDate).format("MMM YYYY")
							: info.endDate}
					</JobDate>
				</TopInfo>
				<JobDescriptionUL>
					{info.description.map((element, index) => (
						<JobDescriptionLI key={index}>
							{element}
						</JobDescriptionLI>
					))}
				</JobDescriptionUL>
			</MiniContainer>
		</Container>
	);
};

export default JobsCard;

const Container = tw.div<any>`
  flex flex-col justify-center items-center border-solid border-red-100 border-4 border-spacing-5 m-5 p-2 rounded-2xl 
  hover:scale-90 transform transition duration-300 ease-in-out
  w-11/12
  lg:w-1/4
`;

const MiniContainer = tw.div<any>`
  block bg-emerald-900 p-5 w-full bg-opacity-80 border-2 rounded-lg h-full
`;

const TopInfo = tw.div<any>`
  flex flex-col justify-center items-center border-b-white border-b-2 pb-2
`;

const JobTitle = tw.h2`
  text-center text-3xl text-indigo-100 font-bold
`;

const JobCompanyLocation = tw.h3`
  text-center text-xl font-light text-indigo-200
`;

const JobDate = tw.h3`
  text-center text-xl font-normal text-fuchsia-200
`;

const JobDescriptionUL = tw.ul<any>`
  text-left text-lg font-normal text-amber-100 list-disc list-inside flex flex-col
`;

const JobDescriptionLI = tw.li`
  py-1
`;

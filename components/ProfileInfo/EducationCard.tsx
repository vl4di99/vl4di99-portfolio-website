import moment from "moment";
import React from "react";
import tw from "tailwind-styled-components";

interface Info {
	institution: string;
	area: string;
	studyType: string;
	startDate: string;
	endDate: string;
	gpa: number;
}

type Props = {
	education: Info;
};

const EducationCard = ({ education }: Props) => {
	return (
		<Container>
			<MiniContainer>
				<Title>{education.institution}</Title>
				<FieldOfStudy>
					{education.studyType} - {education.area}
				</FieldOfStudy>
				<Date>
					{moment(education.startDate).format("YYYY")} {" - "}
					{moment(education.endDate).format("YYYY")}
				</Date>
			</MiniContainer>
		</Container>
	);
};

export default EducationCard;

const Container = tw.div<any>`
  flex flex-col justify-center items-center border-solid border-red-100 border-4 border-spacing-5 m-5 p-2 rounded-2xl 
  hover:scale-90 transform transition duration-300 ease-in-out
  sm:w-11/12
  lg:w-1/3
`;

const MiniContainer = tw.div<any>`
  block justify-between items-center bg-emerald-900 p-5 w-full bg-opacity-80 border-2 rounded-lg h-full
`;

const Title = tw.h2`
  text-center text-3xl text-indigo-100 font-bold
`;

const FieldOfStudy = tw.h3`
    text-center text-2xl text-indigo-100 font-bold
`;

const Date = tw.h4<any>`
	text-center text-xl text-indigo-100 font-bold
`;

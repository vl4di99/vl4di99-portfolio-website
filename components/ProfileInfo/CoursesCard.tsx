import React from "react";
import tw from "tailwind-styled-components";

type Props = { courses: Array<string> };

const CoursesCard = ({ courses }: Props) => {
	return (
		<Container>
			<CourseUL>
				{courses.map((element, index) => (
					<CourseLI key={index}>{element}</CourseLI>
				))}
			</CourseUL>
		</Container>
	);
};

export default CoursesCard;

const Container = tw.div<any>`
    flex flex-col justify-center items-center border-solid border-red-100 border-4 border-spacing-5 m-5 p-2 rounded-2xl w-3/4
    hover:scale-90 transform transition duration-300 ease-in-out
	sm:w-11/12
	lg:w-1/4
`;

const CourseUL = tw.ul<any>`
    list-disc list-inside text-xl
`;

const CourseLI = tw.li<any>`
    text-white
`;

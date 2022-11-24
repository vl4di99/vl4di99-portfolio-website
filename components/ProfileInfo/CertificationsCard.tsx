import moment from "moment";
import Image from "next/image";
import React from "react";
import tw from "tailwind-styled-components";

interface Certification {
	title: string;
	issuer: string;
	date: string;
	expires: string;
	link: string;
	logo_url: string;
}

type Props = {
	certification: Certification;
};

const CertificationsCard = ({ certification }: Props) => {
	return (
		<CardContainer>
			<CardFront>
				<div className="grid grid-cols-3">
					<CertName>{certification.title}</CertName>
					<Image
						src={
							certification.logo_url
								? certification.logo_url
								: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"
						}
						alt="Logo"
						width={100}
						height={100}
						className="rounded-full w-20 h-20 border-green-700 border-4 object-cover lg:w-28 lg:h-28"
					/>
				</div>
				<CertIssuer>{certification.issuer}</CertIssuer>
			</CardFront>
			<CardBack>
				<Date>
					Issued: {moment(certification.date).format("MMM YYYY")}
				</Date>
				<Date>
					Expires:{" "}
					{certification.expires === "No expiration"
						? "Never"
						: moment(certification.expires).format("MMM YYYY")}
				</Date>
			</CardBack>
		</CardContainer>
	);
};

export default CertificationsCard;

const CardContainer = tw.div<any>`
	flex items-center m-5 bg-slate-200 rounded-3xl bg-clip-padding backdrop-filter bg-opacity-60 border-gray-100 w-1/2 h-40 self-center
	lg:w-96 lg:h-52
	cardRotate
	hover:rotateY180
	cursor-pointer
`;

const CertName = tw.h3`
	text-neutral-100 text-md col-span-2
	lg:text-xl
`;

const Date = tw.h3`
	text-white text-2xl
`;

const CertIssuer = tw.h4`
	text-neutral-200 text-sm lg:text-lg
`;

const CardFront = tw.div<any>`
	absolute backFaceHide
	px-10
`;

const CardBack = tw.div<any>`
	rotateY180 absolute backFaceHide grid
	py-4 px-20
`;

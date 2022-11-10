// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
	mainInfo: {};
	jobs: Array<{}>;
	certifications: Array<{}>;
	courses: Array<string>;
	awards_honors: Array<{}>;
	contact: {};
};

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>,
) {
	res.status(200).json({
		mainInfo: {
			shortIntro:
				"an Engineer, a Full-Stack Web Developer and a Security passionate. I love to bring websites and mobile apps to life, am very enthusiastic, energetic and learn anything very fast, especially tech related stuff.",
		},
		jobs: [
			{
				title: "Self-Taught Developer",
				company: "Self-Employed",
				location: "Remote",
				startDate: "2016",
				endDate: "Present",
				industry: "Design",
				description: [
					"Front-End Technologies: React, React Native, Meteor, NextJS",
					"Back-End Technologies: ExpressJS, NodeJS, Python-Flask, Meteor",
					"Databases: MySQL, MongoDB, AWS S3, Firebase, Microsoft SQL",
					"Libraries and other Technologies: Recoil, MaterialUI, ChakraUI, Styled-Components, TailwindCSS, Axios, MomentJS, Next-Auth, LoDash, Git(with Source Control), GraphQL, Redux",
					"Operating Systems: Windows, Linux/Debian, iOS",
					"In Progress: Java (with Spring), Docker, PostgreSQL, Supabase",
				],
			},
			{
				title: "Intern",
				company: "Transgaz SA",
				location: "Medias, RO",
				startDate: "2015",
				endDate: "2015",
				industry: "Software Development",
				description: [
					"Initiated in C# with .NET framework, MySQL database, PHP programming language, Virtual Machines and Node.JS",
				],
			},
			{
				title: "Web Development Intern",
				company: "Transgaz SA",
				location: "Medias, RO",
				startDate: "2016",
				endDate: "2016",
				industry: "Software Development",
				description: [
					"Learned HTML, CSS, JavaScript and jQuery.",
					" I had to develop basic and fully functional web applications.",
				],
			},
			{
				title: "Information Technology Teacher Assistant",
				company: "St.L.Roth Highschool",
				location: "Medias, RO",
				startDate: "2017",
				endDate: "2018",
				industry: "Teaching",
				description: [
					"The main objective was to help students udnerstand HTML, CSS, JS, Microsoft Office, Basic Networking and Windows OS",
				],
			},
			{
				title: "Full-Stack Intern",
				company: "GSWE GmbH",
				location: "Greifswald, DE",
				startDate: "2021",
				endDate: "2021",
				industry: "Software Development",
				description: [
					"Introduction into Symfony PHP Framework, programmed in PHP and TWIG.",
					"I was involved in a project for the European Union, where it was necessary to create 3 webpages and configure the backend and the frontend. Use of WSL2 was also necessary.",
				],
			},
			{
				title: "Content Creator",
				company: "Huawei Technologies",
				location: "Remote",
				startDate: "Sept. 2019",
				endDate: "Mar. 2022",
				industry: "Content Writing",
				description: [
					"During this job, I had to write each week an article regarding a Huawei device or a feature from the OS.",
					"The article had to be either written or a video one and had to be specific enough, so the user understands the subject exactly. After every 3 months, the quality of the articles was reviewed, to make sure the content is improved, if necessary. The articles were on the official Huawei Community and were targeting the entire world, being written in english language.",
				],
			},
			{
				title: "Application Tester",
				company: "Huawei Mobile Services",
				location: "Remote",
				startDate: "Nov. 2018",
				endDate: "Dec. 2019",
				industry: "Testing",
				description: [
					"I have tested several Beta applications, reporting what functionality is wrong with them and also what can be improved.",
					"Everything was remote, on a Huawei device at choice.",
					"During this stage, over 5000 participants all over the world took part and the top 3 best testers were awarded with Huawei devices.",
				],
			},
			{
				title: "Huawei Themes Designer",
				company: "Huawei Mobile Services",
				location: "Remote",
				startDate: "Jan. 2019",
				endDate: "Present",
				industry: "Design",
				description: [
					"I have designed and published about 50 themes on the Huawei Themes market.",
					"Some of the themes were on top positions for certain weeks, meaning the design was beloved by the users.",
					"This position challenged me to also take good photographies, create a design for them and adapt them to Huawei devices.",
				],
			},
			{
				title: "Administrator/Creator",
				company: "Huawei Fans Romania",
				location: "Romania",
				startDate: "Jul. 2019",
				endDate: "Present",
				industry: "Marketing, Content Creation, Content Moderation",
				description: [
					"Huawei Fans Romania is a public Facebook page, meant to gather Huawei owners in Romania. It's underlying the Huawei Fans Club (Romania) Facebook group, which has around 8000 daily active members.",
					"In here, consumers choose to share information regarding Huawei devices and also share their impressions.",
				],
			},
			{
				title: "Community Moderator and Content Creator",
				company: "Huawei Enterprise Romania",
				location: "Romania",
				startDate: "Jan. 2021",
				endDate: "Present",
				industry: "Marketing, Content Creation, Content Moderation",
				description: [
					"Creating video and written content with Huawei device unboxings, reviews and tests.",
					"Video reviews are also available on the 'vl4di99' YouTube channel.",
				],
			},
			{
				title: "JavaScript Full-Stack Developer",
				company: "Evozon Systems",
				location: "Cluj-Napoca, RO",
				startDate: "2022",
				endDate: "Present",
				industry: "Software Development",
				description: [
					"Design and Develop REST APIs by using NodeJS and ExpressJS, as well as bind them to databases like AWS, MongoDB",
					"Team-Leader of 2 projects",
					"Use of ReactJS Library and NextJS Framework",
				],
			},
		],
		certifications: [
			{
				title: "Microsoft Office Specialist",
				issuer: "Microsoft",
				date: "Apr. 2017",
				expires: "No expiration",
				link: "https://www.youracclaim.com/badges/403de956-f04d-4260-9d29-0613480a10e5/linked_in_profile",
				logo_url:
					"https://images.credly.com/size/340x340/images/16bc9e00-43a7-421c-a775-a990fbc590ac/MOS_Word.png",
			},
			{
				title: "Deutsches Sprachdiplom - C1 Niveau",
				issuer: "Hermannstadt Konsulat der Bundesrepublik Deutschland",
				date: "Feb. 2018",
				expires: "No expiration",
				link: null,
				logo_url:
					"https://www.auslandsschulwesen.de/SharedDocs/Bilder/Webs/ZfA/DE/Logos/Logo_DSD.jpg?__blob=normal&v=2",
			},
			{
				title: "Java Fundamentals",
				issuer: "Oracle",
				date: "May 2018",
				expires: "No expiration",
				link: null,
				logo_url: "",
			},
			{
				title: "Database Design and Programming with SQL",
				issuer: "Oracle",
				date: "May 2018",
				expires: "No expiration",
				link: null,
				logo_url: "",
			},
			{
				title: "MTA - Windows Operating System",
				issuer: "Microsoft",
				date: "Jun. 2018",
				expires: "No expiration",
				link: "https://www.youracclaim.com/badges/1fccbf4d-7fa3-46c6-a0a9-6d8b639d17b4",
				logo_url:
					"https://images.credly.com/size/340x340/images/b367a284-9dbe-42fa-bd2f-d4734702e723/MTA-Windows-Operating-System-Fundamentals.png",
			},
			{
				title: "MTA - Networking",
				issuer: "Microsoft",
				date: "Jun. 2018",
				expires: "No expiration",
				link: "https://www.youracclaim.com/badges/db6cb81b-978b-427e-b0ba-905dd0cd54d7",
				logo_url:
					"https://images.credly.com/size/340x340/images/64926fbc-e479-48a3-9860-497541994cdc/MTA-Networking-Fundamentals-2018.png",
			},
			{
				title: "Practical Ethical Hacking for Beginners",
				issuer: "Udemy",
				date: "July 2021",
				expires: "No expiration",
				link: "https://ude.my/UC-cce6d277-3ac5-4e6a-bf49-cb2b32ecae6f",
				logo_url:
					"https://img-c.udemycdn.com/course/480x270/4063124_fd1d_4.jpg",
			},
			{
				title: "Learn to Code in Python 3: Programming beginner to advanced",
				issuer: "Udemy",
				date: "July 2021",
				expires: "No expiration",
				link: "https://ude.my/UC-aae6265f-aa80-4116-b90f-004d80d2b3af",
				logo_url:
					"https://img-c.udemycdn.com/course/240x135/1495788_1aaa_2.jpg",
			},
			{
				title: "Learn Wireless Security from Scratch - 2021",
				issuer: "Udemy",
				date: "July 2021",
				expires: "No expiration",
				link: "https://ude.my/UC-894770c8-9750-43da-9c36-66a265a909ae",
				logo_url:
					"https://img-c.udemycdn.com/course/240x135/4084252_5bc9_7.jpg",
			},
		],

		courses: [
			"APEX Foundations - Oracle Academy",
			"Learn To Code In Python 3: Programming beginner to advanced",
			"Learn Wireless Security from Scratch - 2021",
			"Online Group Council for Soft Skills Development",
			"Oracle SQL Management",
			"Practical Ethical Hacking - The Complete Course",
			"Practical Ethical Hacking for Beginners",
			"Zero to Full Stack Hero - PAPA React",
		],
		awards_honors: [
			{
				title: "Bronze Award - Information Technology Olympics - National Heat",
				issuer: "Romanian Ministry of Education",
				date: "May 2015",
				description:
					"Beginner: HTML, CSS, JavaScript, Microsoft Office, Windows OS",
			},
			{
				title: "First Prize - Information Technology Olympics - County Heat",
				issuer: "Romanian Ministry of Education",
				date: "2016",
				description:
					"Intermediate: HTML, CSS, JavaScript, Microsoft Office, Windows OS",
			},
			{
				title: "First Prize - Information Technology Olympics - County Heat",
				issuer: "Romanian Ministry of Education",
				date: "2017",
				description:
					"Upper Intermediate: HTML, CSS, JavaScript, Microsoft Office, Windows OS",
			},
			{
				title: "Second Prize - Information Technology Olympics - County Heat",
				issuer: "Romanian Ministry of Education",
				date: "2018",
				description:
					"Advanced: HTML, CSS, JavaScript, Microsoft Office, Windows OS",
			},
			{
				title: "Merit Diploma for Volunteering and Students Council Activities Implication",
				issuer: "Vivat Academia",
				date: "2018",
				description: "2014-2018 activities",
			},
			{
				title: "Finalist in the Romanian national finals held in Bucharest on 28 April 2018",
				issuer: "Microsoft, Certipro Education, EOS Foundation",
				date: "Apr. 2018",
				description: "Microsoft Word 2013 Examination",
			},
		],
		contact: {},
	});
}

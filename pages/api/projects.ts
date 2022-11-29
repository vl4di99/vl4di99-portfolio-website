// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

interface Data {
	projects: Array<{
		title: string;
		url: string;
		frontend: Array<string>;
		backend?: Array<string>;
		database?: Array<string>;
		styling: Array<string>;
		otherTech?: string[];
		images?: Array<string>;
		about: string;
	}>;
}

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>,
) {
	res.status(200).json({
		projects: [
			{
				title: "Private Clinic Mobile Application",
				url: "https://github.com/vl4di99/private-clinic-reactnative-expressjs-mongodb",
				frontend: ["React Native"],
				backend: ["ExpressJS"],
				database: ["MySQL", "MongoDB", "AWS S3"],
				styling: ["Pure CSS"],
				otherTech: ["Axios", "React Router"],
				about: "This project implements the central app of any private clinic. It has a Blog, a Manual Habit Tracker, Appointment Scheduling and other important information of the clinic",
			},
			{
				title: "Location Saver",
				url: "https://github.com/vl4di99/gps-mobile-data",
				frontend: ["React", "React Native"],
				backend: ["ExpressJS"],
				database: ["MySQL"],
				styling: ["Pure CSS"],
				otherTech: ["Axios", "React Router"],
				about: "The application saves the GPS position of the user, which has to login to his account. The saved locations can be viewed in the web application.",
			},
			{
				title: "Spotify 2.0",
				url: "https://github.com/vl4di99/Spotify-2.0-NextJS",
				frontend: ["NextJS"],
				styling: ["Tailwind CSS"],
				otherTech: ["Next-Auth", "Recoil"],
				about: "This project is a clone of the Spotify web application. It uses the Spotify API to fetch the data of the user, songs, playlists and many more. It also uses the Next-Auth library to authenticate the user. The application is fully responsive.",
			},
			{
				title: "PokeDex",
				url: "https://github.com/vl4di99/pokedex-react-function-based",
				frontend: ["React"],
				styling: ["Pure CSS"],
				otherTech: ["Axios"],
				about: "This project is a Pokedex, which uses the PokeAPI to fetch the data of the Pokemon. It has all the pokemons listed and you can view all the info of each pokemon.",
			},
			{
				title: "Hackathon Journal",
				url: "https://github.com/vl4di99/papafam-hackathon-journal",
				frontend: ["NextJS"],
				backend: ["ExpressJS"],
				database: ["MongoDB", "Firebase"],
				styling: ["Material UI"],
				otherTech: ["MomentJS", "React Typewriter"],
				about: "This project is a journal for the Papafam Hackathon. It has a login system, where the user can create a new account or login with his Google account. The user can create a new journal entry, which will be saved in the database. The user can also view all the entries he has created. This app helps the user to improve his cognitive skills and to keep track of his progress.",
			},
			{
				title: "Pokemon Rock-Scissors-Paper",
				url: "https://github.com/vl4di99/Pokemon-Rock-Paper-Scissors-ReactJS",
				frontend: ["ReactJS"],
				styling: ["Chakra UI"],
				otherTech: ["Framer Motion", "Recoil", "React Router"],
				about: "This project is a rock-scissors-paper game, by using pokemons. The user has to guess which pokemon will win and the winning score is calculated by the user's guess. The user can also view the pokemons he has guessed correctly and incorrectly.",
			},
			{
				title: "GitHub 2.0",
				url: "https://github.com/vl4di99/GitHub-Evozon-2.0-NextJS",
				frontend: ["NextJS"],
				styling: ["TailwindCSS", "MUI"],
				otherTech: ["Axios", "Next-Auth", "Recoil"],
				about: "This project is a clone of the GitHub web application. It uses the GitHub API to fetch the data of the user, repositories, issues and many more. It also uses the Next-Auth library to authenticate the user.",
			},
			{
				title: "WhatsApp 2.0",
				url: "https://github.com/vl4di99/WhatsApp-2.0-NextJS",
				frontend: ["NextJS"],
				database: ["Firebase"],
				styling: ["Styled-Components", "MUI"],
				otherTech: [
					"Better React Spinkit",
					"Email Validator",
					"React-Firebase Hooks",
				],
				about: "This project is a clone of the WhatsApp web application. It uses the Firebase API to fetch the data of the user, messages and many more.",
			},
			{
				title: "Twitter 2.0",
				url: "https://github.com/vl4di99/Twitter-2.0-NextJS-TypeScript",
				frontend: ["NextJS"],
				backend: ["Sanity CMS"],
				database: ["Sanity CMS"],
				styling: ["TailwindCSS"],
				otherTech: ["React Twitter Embed", "TypeScript"],
				about: "This project is a clone of the Twitter web application. It uses the Sanity CMS to fetch the data of the user, tweets and many more.",
			},
			{
				title: "Rick and Morty Fandom Wiki",
				url: "https://github.com/vl4di99/rick-morty-fandom-wiki-react-redux-ts",
				frontend: ["ReactJS"],
				styling: ["Styled-Components"],
				otherTech: ["Redux", "React Paginate", "LoDash", "TypeScript"],
				about: "This project is a fandom wiki for the Rick and Morty TV show. It uses the Rick and Morty API to fetch the data of the characters, episodes and many more. It also uses the Redux library to manage the state of the application.",
			},
		],
	});
}

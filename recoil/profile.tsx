import { atom } from "recoil";

export const profileJsonState = atom({
	key: "jsonProfile", // unique ID (with respect to other atoms/selectors)
	default: {
		mainInfo: {
			shortIntro: null,
		},
		jobs: [],
		certifications: [],
		courses: [],
		education: [],
		awards_honors: [],
		skills: [],
		contact: {},
	}, // default value (aka initial value)
});

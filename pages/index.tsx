import Head from 'next/head';
import Image from 'next/image';
import { useMemo, useState } from 'react';
import { useRecoilState } from 'recoil';
import IntroAnimation from '../components/IntroAnimation';
import background4 from '../images/background4.jpg';
import Navbar from '../components/Navbar';
import IntroPage from '../components/IntroPage';
import { profileJsonState } from '../recoil/profile';
import { NextPage } from 'next';

const Home: NextPage<{}> = () => {
	const [animation, toggleAnimation] = useState(false);
	const [, setProfileState] = useRecoilState(profileJsonState);

	const profileInfo = useMemo(
		() =>
			fetch('api/profileInfo')
				.then((resData) => resData.json())
				.then((res) => {
					setProfileState(res);
				}),
		[],
	);

	return (
		<div className="min-h-screen w-screen">
			{animation ? (
				<IntroAnimation toggleAnimation={toggleAnimation} />
			) : (
				<div className="min-h-screen w-screen bg-[url(../images/background6.jpg)] bg-fixed bg-cover">
					<Navbar />
					<IntroPage />
				</div>
			)}
		</div>
	);
};

export default Home;

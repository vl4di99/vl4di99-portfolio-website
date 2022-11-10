import Image from 'next/image';
import React from 'react';
import penguinLogo from '../images/PenguinSystemsLogo_NoBG.png';
import tw from 'tailwind-styled-components';
import Link from 'next/link';

function Navbar() {
	return (
		<MainContainer>
			<div className="font-bold text-2xl">L.D.Vladut</div>
			<div>
				<ul className="flex flex-row justify-between p-2">
					<Link href="/">
						<Li>Home</Li>
					</Link>
					<Link href="/projects">
						<Li>Projects</Li>
					</Link>
					<Link href="/about">
						<Li>About</Li>
					</Link>
					<Link href="/contact">
						{' '}
						<Li>Contact</Li>
					</Link>
				</ul>
			</div>
		</MainContainer>
	);
}

export default Navbar;

const MainContainer = tw.div<any>`
flex flex-row justify-between px-5 items-center bg-teal-900 rounded-b-3xl border-stone-100 border-b-4 text-white
lg:mx-48
sm:mx-4
`;

const Li = tw.li`
text-xl font-bold mx-5 cursor-pointer p-2
 hover:underline hover:underline-offset-2  hover:rounded-2xl hover:text-purple-300
`;

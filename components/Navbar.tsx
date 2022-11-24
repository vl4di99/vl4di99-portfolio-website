import Image from "next/image";
import React, { useState } from "react";
import tw from "tailwind-styled-components";
import Link from "next/link";

function Navbar() {
	const [hiddenNavElements, setHiddenNavElements] = useState(true);

	return (
		<MainContainer>
			<div className="font-bold text-2xl">L.D.Vladut</div>
			<div className="flex flex-col items-center justify-center">
				<div
					className="space-y-2 lg:hidden"
					onClick={() => setHiddenNavElements(!hiddenNavElements)}
				>
					<div className="w-8 h-0.5 bg-emerald-200"></div>
					<div className="w-8 h-0.5 bg-emerald-200"></div>
					<div className="w-8 h-0.5 bg-emerald-200"></div>
				</div>

				<ul
					className={`lg:flex justify-between p-2 ${
						hiddenNavElements ? "hidden" : "block"
					}`}
				>
					<Link href="/">
						<Li>Home</Li>
					</Link>
					<Link href="/projects">
						<Li>Projects</Li>
					</Link>
					<Link href="/contact">
						{" "}
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
lg:mx-48 lg:flex-row lg:py-1
mx-4 py-5
`;

const Li = tw.li`
text-xl font-bold mx-5 cursor-pointer p-2
 hover:underline hover:underline-offset-2  hover:rounded-2xl hover:text-purple-300
`;

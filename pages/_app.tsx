import "../styles/globals.css";
import type { AppProps } from "next/app";
import {
	RecoilRoot,
	atom,
	selector,
	useRecoilState,
	useRecoilValue,
} from "recoil";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<RecoilRoot>
			<div className="min-h-screen">
				<Component {...pageProps} />
			</div>
		</RecoilRoot>
	);
}

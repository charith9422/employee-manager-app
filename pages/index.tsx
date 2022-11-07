import Head from "next/head";
import Link from "next/link";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Employee Manager</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Link href="/employee/list">Employee Manager App</Link>
		</div>
	);
}

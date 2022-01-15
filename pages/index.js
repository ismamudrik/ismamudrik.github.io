import dynamic from "next/dynamic";
import PropTypes from "prop-types";
const Navigation = dynamic(() => import("../components/Navigation"));
const Greetings = dynamic(() => import("../containers/Greetings"));
const Skills = dynamic(() => import("../containers/Skills"));
const Proficiency = dynamic(() => import("../containers/Proficiency"));
const Education = dynamic(() => import("../containers/Education"));
const Experience = dynamic(() => import("../containers/Experience"));
const Projects = dynamic(() => import("../containers/Projects"));
const Feedbacks = dynamic(() => import("../containers/Feedbacks"));
const GithubProfileCard = dynamic(() =>
	import("../components/GithubProfileCard")
);
import { openSource } from "../portfolio";
import SEO from "../components/SEO";

export default function Home({ githubProfileData }) {
	return (
		<div>
			<SEO
				data={{
					title: "Ismail Mudrik",
					description:
						"A passionate Full Stack Shopify/Shopify Plus/Shopify App Developer.",
					image: "https://avatars3.githubusercontent.com/u/59178380?v=4",
					url: "https://ismamudrik.github.io",
					keywords: [
						"Ismail",
						"Ismail Mudrik",
						"@ismamudrik",
						"ismamudrik",
						"Portfolio",
						"Ismail Portfolio ",
						"Ismail Mudrik Portfolio",
						"shopify developer",
						"full stack",
						"full stack web developer",
						"nodejs ",
						"expressjs",
						"reactjs ",
						"contextapi",
						"redux",
					],
				}}
			/>
			<Navigation />
			<Greetings />
			<Skills />
			<Proficiency />
			<Feedbacks />
			<Projects />
			<GithubProfileCard prof={githubProfileData} />
		</div>
	);
}

Home.prototype = {
	githubProfileData: PropTypes.object.isRequired,
};

export async function getStaticProps(_) {
	const githubProfileData = await fetch(
		`https://api.github.com/users/${openSource.githubUserName}`
	).then((res) => res.json());

	return {
		props: { githubProfileData },
	};
}

import { Project } from "@/lib/types";

export const PROJECT_DATA = [
	{
		title: "Currency Market",
		subtitle: "Full Stack Currency Order Matching Platform",
		description:
			"Platform connecting businesses with excess currency to those needing it.",
		slug: "currency-market",
		technologies: [
			"React",
			"Next.js",
			"Typescript",
			"Postgres",
			"Docker",
			"AWS",
		],
		github: "https://github.com/nkrumahthis/currency-market",
		thumbnail: "/thumbnails/currmark.gif",
	},
	{
		title: "Sentinel Workbench",
		subtitle: "CyberSecurity Orchestration Demo",
		description:
			"A simplified version of an alert enrichment system inspired by Expel's approach to AWS security monitoring.",
		slug: "sentinel-workbench",
		github: "https://github.com/nkrumahthis/sentinel-workbench",
		technologies: ["React", "Next.js", "Tailwind"],
		thumbnail: "/thumbnails/alertenrichment.gif",
	},
	{
		title: "Add Print 3d",
		subtitle: "Fullstack Online Shop",
		description:
			"A place to get your custom 3d printing done. Upload your model files and we print and ship",
		slug: "add-print-3d",
		thumbnail: "/thumbnails/addprint3d.png",
		url: "https://addprint3d.com",
		technologies: ["React", "Next.js", "MongoDB", "Tailwind"],
	},
	{
		title: "Ghana Parliament AI",
		subtitle: "Full Stack AI Web App and Data Pipeline",
		description:
			"AI chat app for understanding what is going on in Ghana's parliament",
		slug: "gh-parliament-ai",
		thumbnail: "/thumbnails/ghparliamentai.png",
		url: "https://gh-parliament-ai.nkrumahsarpong.com",
		github: "https://github.com/nkrumahthis/gh-parliament-ai",
		technologies: [
			"React",
			"Next.js",
			"Typescript",
			"Python",
			"MongoDB",
			"Pinecone",
			"OpenAI",
			"AWS",
		],
	},
	{
		title: "AutoCedi",
		subtitle: "Full stack Fintech Web App",
		description:
			"A user friendly platform to automate payments using Ghana's CBDC: The eCedi. Bank of Ghana Hackathon Finalist Award. ",
		slug: "autocedi",
		thumbnail: "/thumbnails/autocedi.png",
		markdown: "/data/markdown/autocedi.md",
		url: "https://autocedi.com",
		technologies: ["React", "Next.js", "Javascript", "MongoDB", "Node.js"],
	},
] as Project[];

// Source of truth for /cv. Kept in sync with emmanuel-nkrumah-sarpong-cv.pdf.
export const RESUME_DATA = {
	name: "Emmanuel Nkrumah-Sarpong",
	about: "Full Stack Software Engineer, 8 years of experience.",
	summary:
		"Full-stack software engineer building payments and fintech infrastructure in TypeScript. Most recently at Capi Money, helping African businesses pay overseas suppliers on a platform that has processed about $1.5B.",
	location: "Accra, Ghana",
	locationLink: "https://www.google.com/maps/place/Accra",
	contact: {
		email: "nkrumahthis@gmail.com",
		tel: "+233242359842",
	},
	skills: [
		{ label: "Languages", items: ["TypeScript", "JavaScript", "Python", "SQL"] },
		{ label: "Frontend", items: ["React", "Next.js", "Tailwind CSS"] },
		{ label: "Backend", items: ["Node.js", "GraphQL", "tRPC", "Zod", "OCR and LLM APIs"] },
		{ label: "Data", items: ["PostgreSQL", "Redis"] },
		{ label: "Testing & monitoring", items: ["Vitest", "Jest", "Datadog", "PostHog"] },
		{ label: "Cloud & DevOps", items: ["AWS", "Docker", "GitHub Actions", "CI/CD"] },
	],
	work: [
		{
			company: "Capi Money",
			link: "https://capimoney.com",
			location: "London, UK (remote from Accra)",
			title: "Software Engineer",
			start: "Jan 2025",
			end: "Oct 2026",
			achievements: [
				"Helped African businesses pay their overseas suppliers quickly and safely by building features end to end on a TypeScript payments platform that has processed about $1.5B.",
				"Stayed close to the people using the product: visited customers in person and was the lead point of contact during the internal team's support weeks, so fixes and new features were shaped by real problems.",
				"Cut the manual work compliance did to approve invoices by building an automatic approval system from scratch (TypeScript, OCR, LLM), as one of six engineers on the launch. It never approves an invoice with information missing, and where AI is used it only reads facts off the invoice while ordinary code makes the approve-or-reject decision. Tuning against a week of real mistakes fixed 48 wrongly rejected invoices without wrongly approving any new ones. Also removed an older AI approval tool that had run about 25,000 times without a single approval, deleting 5.9k lines of code and two AI calls from every transaction.",
				"Built features that let the operations team fix problems themselves instead of asking engineers (Next.js, GraphQL, PostgreSQL). Proposed, built and launched a tool for splitting one bank payment into many parts, which cut a 22-part settlement from hours to under a minute and is used several times a day, and replaced a database fix that only engineers could run with a self-serve tool the operations team uses themselves.",
				"Made automatic payouts safe to switch on. Built off-switches for each payment provider and account, an alert for every outcome, and settings that block payments instead of allowing unlimited ones when misconfigured; over half of all payouts were automated within four weeks, beating the target. After two incidents that affected customers within three weeks, built an hourly check (TypeScript, PostgreSQL) that found 44 mismatched records in production and fixes them automatically.",
				"Launched wallets in local currency, live since July 2026, so customers can fund payments from a virtual bank account. Built most of the connection to a partner bank (TypeScript, PostgreSQL, Next.js) on an accounting ledger that records each movement of money on both sides: a deposit is never counted twice if the bank repeats a notification, and a payment is undone cleanly if any step fails. Also built an activity feed, alerts and the customer-facing screens, and launched stablecoin payouts (USDC, USDT), the Ghanaian cedi as a platform currency, and English and French account-statement PDFs.",
				"Matched customer deposits to bank statements automatically. Handled statements from 20+ African banks in different formats, about 50 uploads a day, with statements fetched automatically each day, repeated uploads detected, and a check that rejects a statement uploaded to the wrong account. Most deposits now match without manual work, and a daily manual download for Finance was removed.",
				"Protected sensitive customer data. Merged three different data-masking tools into one tested library, built a statement lookup that does not reveal which records exist, and worked with identity and anti-money-laundering screening (KYC/AML) and document-reading (OCR) providers, checking every provider response before using it.",
				"Kept the team shipping safely: reviewed code for about 20 engineers, wrote 7 technical decision records (short documents explaining a choice and its trade-offs), led the response to 2 production incidents, and changed live databases holding money with no downtime. Monitored production with Datadog and used PostHog to investigate user errors, switch features on and off, and track versions of AI prompts.",
			],
		},
		{
			company: "Focaldata",
			link: "https://focaldata.com",
			location: "London, UK",
			title: "Software Engineer",
			start: "May 2024",
			end: "Sep 2024",
			achievements: [
				"Helped a survey data company launch surveys more reliably by improving the behind-the-scenes services that run them (Python, Scala, Kubernetes on Google Cloud), cutting survey launch failures by 40%.",
				"Rebuilt old text-command tools as a web application (JavaScript, Python, FastAPI, Docker on Google Cloud serverless), cutting support tickets by 60%.",
				"Added error tracking to the Scala services, so issues were fixed 50% faster.",
			],
		},
		{
			company: "Zeepay",
			link: "https://myzeepay.com",
			location: "Accra, Ghana",
			title: "Senior Technology Manager",
			start: "Mar 2023",
			end: "May 2024",
			achievements: [
				"Improved the systems behind an international money-transfer service (PHP Laravel, MySQL, DigitalOcean), handling over $93M a day.",
				"Expanded money transfer into three new countries by securely connecting to partners' systems (REST and SOAP APIs), with automated tests.",
				"Cut the delay in releasing updates by 90% by setting up automatic build and release pipelines (CI/CD with Jenkins and GitHub Actions), and trained developers, security, IT and infrastructure staff on best practices.",
				"Upgraded critical financial systems from a 2018 to a 2023 version of their main framework (Laravel 5 to 10), and built a real-time dashboard (Laravel, Vue.js) that pulls together several databases.",
			],
		},
		{
			company: "Plato Analytics",
			link: "https://platosolutions.io",
			location: "New York, USA",
			title: "Software Engineer",
			start: "Jun 2021",
			end: "Oct 2023",
			achievements: [
				"Built a system that automatically creates and launches online shops, saving the team manual work (TypeScript, PHP, Docker on Kubernetes, AWS, GitLab CI/CD), including an hourly job that keeps product data up to date, with automated tests.",
				"Developed small background services (Express.js, Docker, Selenium, Terraform) that automatically build, launch and test Magento online stores.",
				"Built a Chrome extension that cut the team's manual product discovery work by 90%.",
				"Published three open-source libraries (a PHP GraphQL package and two npm packages), each downloaded more than 2,000 times.",
			],
		},
		{
			company: "Dext Technology",
			link: "https://thescienceset.com",
			location: "Kumasi, Ghana",
			title: "Lead Software Engineer",
			start: "Aug 2018",
			end: "Jun 2021",
			achievements: [
				"Led a team building educational technology that combined software (PHP, Python, JavaScript) with hardware (Arduino, Raspberry Pi).",
				"Built a web application (MERN stack) that manages education data for 120,000+ students for the Ministry of Education.",
				"Built an online store (WordPress/WooCommerce) that generated $100,000 in sales, and kept cloud hosting on AWS under $100 a month.",
				"Created an award-winning Android augmented reality education app, and a smart board built from a camera, projector, Raspberry Pi and OpenCV.",
				"Taught thousands of children programming and robotics (Arduino, Scratch, Python).",
			],
		},
	],
	projects: [
		{
			title: "Ghana Parliament AI",
			description:
				"Full-stack retrieval-augmented generation (RAG) app and data pipeline that helps users find out what is happening in Ghana's parliament.",
			techStack: ["React", "TypeScript", "Vite", "Python", "MongoDB", "AWS", "OpenRouter"],
			link: "https://gh-parliament-ai.vercel.app",
		},
		{
			title: "Autocedi",
			description:
				"Flexible automated payments system built on Ghana's CBDC, the eCedi. Finalist at the Bank of Ghana's eCedi Hackathon.",
			techStack: ["React", "JavaScript", "MongoDB", "Node.js"],
			link: "https://autocedi.com",
		},
		{
			title: "Oqio Nexus",
			description:
				"Multi-agent AI platform for cybersecurity risk and threat prioritisation. Specialised agents ingest threat signals, score risk and orchestrate responses through Temporal workflows, running on a locally hosted Llama 3.",
			techStack: ["Python", "FastAPI", "Next.js", "Temporal", "ClickHouse"],
		},
	],
	education: [
		{
			school: "University of Mines and Technology, Tarkwa, Ghana",
			degree: "BSc in Computer Science and Engineering",
			end: "2017",
		},
	],
};

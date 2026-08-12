import { ExperienceInfo, FiverrReview, ProjectInfo } from "../types";

export const heroWords = [
	{icon: "mobile", text: "Mobile Apps"},
	{icon: "frontend", text: "Websites"},
	{icon: "backend", text: "Backend Services"},
	{icon: "machine learning", text: "Machine Learning Models"},
	{icon: "games", text: "Games"},
	{icon: "mobile", text: "Mobile Apps"},
	{icon: "frontend", text: "Websites"},
	{icon: "backend", text: "Backend Services"},
	{icon: "machine learning", text: "Machine Learning Models"},
	{icon: "games", text: "Games"},
]

export const experienceInfo : ExperienceInfo[] = [
	{
		icon: "/assets/octopus_energy.png",
		title: "Tech Intern",
		company: "Octopus Energy",
		duration: "July 2021 - September 2021",
		responsibilities: [
			"Collaborated with cross-functional teams to design and build an <b>internal dashboard page</b> presenting key Ops metrics, gathering requirements from stakeholders and delivering <b>full-stack functionality</b>",
			"Contributed to both frontend and backend development of the internal support platform using <b>Django and Git</b>,improving tools used by operations staff",
			"Participated in <b>agile practices</b> including daily standups and sprint reviews, gaining early exposure to collaborative software development in a production environment"
		]
	},
	{
		icon: "/assets/avco_systems.png",
		title: "Placement Software Engineer",
		company: "Avco Systems",
		duration: "June 2024 - August 2025",
		responsibilities: [
			"Implemented <b>27</b> new features on a production <b>React.js and C# .NET</b> web application serving <b>36,000+ users</b>",
			"Designed and built <b>XML/XSLT-based</b> certificate generation templates for an e-certificate platform",
			"Increased backend unit test coverage by <b>8%</b> using XUnit, improving reliability of critical production workflows"
		]
	},
	{
		icon: "/assets/tam.png",
		title: "Part Time Full-Stack Intern",
		company: "The Aspiring Medics",
		duration: "October 2025 - January 2026",
		responsibilities: [
			"Led development of <b>4 production features</b> for an AI-powered interview platform serving <b>2,600+ students</b>, owning design, implementation, and deployment",
			"Built full-stack features using <b>Next.js (TypeScript), FastAPI, PostgreSQL</b>, and deployed backend services on <b>Google Cloud Run</b>"
		]
	},
	{
		icon: "/assets/cisco.png",
		title: "Software Engineer",
		company: "Cisco",
		duration: "Starting in August 2026",
	}
]

export const projectsInfo : ProjectInfo[] = [
	{
		icon: "/assets/ft_poker.png",
		title: "FT Poker",
		description: `A multiplayer poker game built as part of my university individual dissertation.
		My disertaion was focused on building a poker game that is robust to player disconnections alongside
		using event-sourced architecture to enable replay functionality for an optimised gameplay experience.
		The application was built with React Native for the frontend, Fastify for the backend, and Socket.io
		for websocket communication, allowing players to join tables, place bets, and interact in real-time.`,
		technologies: ["React.js", "Node.js", "Socket.io", "Express.js", "PostgreSQL"],
		links: [{url: "https://github.com/Lucas-code/COMP3003-FT-Poker" }],
		media: [
			{
				type: "image",
				url: "/assets/ft_poker_gameplay.png"
			}
		]
	},
	{
		icon: "/assets/os_logo.png",
		title: "Ordnace Survey Hackathon",
		description: `My group entry to the OS Map & Hack 2021. Our goal was to identify the need for EV chargers
		 and where they should be located.
		 
		 The OS Places API was used to fetch a list of car parks, 2011 Census was used for population data, and
		 the National Chargepoint Registry was used to identify existing EV chargers and their capacity.
		 
		 My role in the project was mainly based on plotting creating the plots and visualisations presented in our
		 final submission.`,
		technologies: ["Python", "C++"],
		links: [{url: "https://github.com/MurrayGroves/os-hackathon" }],
		media: [
			{
				type: "image",
				url: "/assets/os_hackathon_map.png"
			}
		]
	},
	// {
	// 	icon: "/assets/unity.png",
	// 	title: "Game Development - Escape The Facility",
	// 	description: "A 3D third-person puzzle game built with Unity and C#, where players must solve puzzles and navigate through a mysterious facility to escape.",
	// 	technologies: ["Unity", "C#"],
	// 	links: [{url: "https://github.com/Lucas-code/example" }]
	// },
	{
		icon: "/assets/lpap.png", // MUST ATTRIBUTE <a href="https://www.flaticon.com/free-icons/private-key" title="private key icons">Private key icons created by Iconjam - Flaticon</a>
		title: "Lucas Pango Authentication Platform (LPAP)",
		description: `Lucas Pango's Authentication Platform (aka LPAP) serves as an authentication manager
		for all of my future personal projects, centralising all authentication and user details instead
		of having to make new accounts for every new project. This app comes built with a simple frontend application
		 that interacts with the backend authentication endpoints.`,
		technologies: ["React.js", "Node.js", "Express.js", "PostgreSQL"],
		links: [{url: "https://github.com/Lucas-code/lp-auth-platform" }]
	},
	// {
	// 	icon: "/assets/aoc.png",
	// 	title: "Advent of Code",
	// 	description: "A collection of solutions to the Advent of Code programming challenges, implemented in Python.",
	// 	technologies: ["Python"],
	// 	links: [
	// 		{
	// 			label: "2020",
	// 			url: "https://github.com/Lucas-code/Advent-of-Code-2020-Solutions"
	// 		},
	// 		{
	// 			label: "2024",
	// 			url: "https://github.com/Lucas-code/lp-advent-of-code-2024"
	// 		}
	// 	]
	// }
]

export const techToImg : Record<string, string> = {
	"react.js": "/assets/react.png",
	"express.js": "/assets/expressjs.png",
	"spring boot": "/assets/springboot.png",
	"postgresql": "/assets/postgresql.png",
	"python": "/assets/python.png",
	"node.js": "/assets/nodejs.svg",
	"socket.io": "/assets/socketio.png",
}

export const fiverrReviews : FiverrReview[] = [
	{
		client: "mugerwacharles",
		rating: 5,
		review: "lucaspango is an excellent communicator and delivers the work in a perfect time limit even ealier than expected. I will work with him again and definitely recommend him for any python project you might want to get done."
	},
	{
		client: "mugerwacharles",
		rating: 5,
		review: "Lucas's communication is really good and delivers on time. That's why I continue working with him and in the future, I will again. definitely recommend him for yr python project"
	},
	{
		client: "mugerwacharles",
		rating: 5,
		review: "I'm satisfied every time that's why I keep coming back. I recommend lucas for any project of yours you might have. he will surely deliver"
	},
	{
		client: "kaan5221",
		rating: 5,
		review: "Great quick response. Sent the program within hours of order. Very satisfied."
	},
	{
		client: "blakecook320",
		rating: 5,
		review: "I liked that the seller was willing to work more if I had more work, and that the work that he did do was what I wanted."
	},
	{
		client: "davidevt21",
		rating: 5,
		review: "I hired many Fiverr developers to make the same automation. I gave each of them the same exact information. However, Lucas is the only person that was able to deliver what I wanted. I would highly recommend everyone on Fiverr to work with Lucas!"
	},
	{
		client: "davidevt21",
		rating: 5,
		review: "Excellent service once again! One of the best developer I worked with on Fiverr. Highly recommend working with him."
	},
	{
		client: "davidevt21",
		rating: 5,
		review: "Exemplary developer. Always a pleasure to work with him."
	},
	{
		client: "tokyoung",
		rating: 4.7,
		review: "Lucas went above and beyond creating the perfect project for me, we worked on a tight deadline and he completed everything without any issues. I’ve been using his expertise and services for two years now and I am very pleased with the work he delivers. Terrific guy!"
	},
	{
		client: "mark_b_s",
		rating: 4.7,
		review: "Lucas was incredibly helpful in both ensuring that my brief was understandable and achievable, which I needed help with as this was my first time in requesting this type of work. Delivery of all of the revisions was exceptionally prompt."
	},
]

export const uniModules = [
	[
		"Mathematics for Computer Scientists I",
		"Mathematics for Computer Scientists II",
		"Programming & Algorithms",
		"Systems & Architecture",
		"Computer Fundamentals",
		"Introduction to Software Engineering",
		"Databases & Interfaces",
		"Fundamentals of Artificial Intelligence",
		"Programming Paradigms",
	],
	[
		"Software Engineering Group Project",
		"Operating Systems & Concurrency",
		"Developing Maintainable Software",
		"Introduction to Formal Reasoning",
		"Artificial Inrelligence Methods",
		"Languages & Computation",
		"Algorithms, Data Structures & Efficiency",
		"Introduction to Cyber Physical Systems",
	],
	[
		"Individual Dissertation",
		"Machine Learning",
		"Mobile Device Programming",
		"Professional Ethics in Computing",
		"Computer Security",
		"Games"
	]
]
export type ExperienceInfo = {
	icon: string;
	title: string;
	company: string;
	duration: string;
	responsibilities?: string[];
}

export type ProjectInfo = {
	icon: string;
	title: string;
	description: string;
	technologies: string[];
	links: { label?: string; url: string }[];
	media?: { type: "image" | "video"; url: string }[];
}

export type FiverrReview = {
	client: string;
	rating: number;
	review: string;
}
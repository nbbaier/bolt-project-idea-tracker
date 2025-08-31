import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { ProjectIdea, SortOption } from "@/types";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

const priorityMap = {
	high: 3,
	medium: 2,
	low: 1,
};

export const sortIdeas = (ideas: ProjectIdea[], sortBy: SortOption) => {
	const sortedIdeas = [...ideas];

	sortedIdeas.sort((a, b) => {
		switch (sortBy) {
			case "dateCreated-desc":
				return (
					new Date(b.dateCreated).getTime() - new Date(a.dateCreated).getTime()
				);
			case "dateCreated-asc":
				return (
					new Date(a.dateCreated).getTime() - new Date(b.dateCreated).getTime()
				);
			case "dateUpdated-desc":
				return (
					new Date(b.dateUpdated).getTime() - new Date(a.dateUpdated).getTime()
				);
			case "dateUpdated-asc":
				return (
					new Date(a.dateUpdated).getTime() - new Date(b.dateUpdated).getTime()
				);
			case "priority-desc":
				return priorityMap[b.priority] - priorityMap[a.priority];
			case "priority-asc":
				return priorityMap[a.priority] - priorityMap[b.priority];
			case "title-asc":
				return a.title.localeCompare(b.title);
			case "title-desc":
				return b.title.localeCompare(a.title);
			default:
				return 0;
		}
	});

	return sortedIdeas;
};

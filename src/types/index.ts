type Priority = "low" | "medium" | "high";

export interface ProjectIdea {
	id: string;
	title: string;
	description: string;
	tags: string[];
	priority: Priority;
	dateCreated: string;
	dateUpdated: string;
}

export interface ProjectIdeaInput {
	title: string;
	description: string;
	tags: string[];
	priority: Priority;
}

export interface FilterOptions {
	search: string;
	selectedTags: string[];
	priority: string;
}

export type SortOption =
	| "dateCreated-desc"
	| "dateCreated-asc"
	| "dateUpdated-desc"
	| "dateUpdated-asc"
	| "priority-desc"
	| "priority-asc"
	| "title-asc"
	| "title-desc";

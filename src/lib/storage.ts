import type { ProjectIdea, ProjectIdeaInput } from "@/types";

const STORAGE_KEY = "project-ideas";

export const storageApi = {
	getIdeas: (): ProjectIdea[] => {
		try {
			const stored = localStorage.getItem(STORAGE_KEY);
			return stored ? JSON.parse(stored) : [];
		} catch (error) {
			console.error("Error reading from localStorage:", error);
			return [];
		}
	},

	saveIdeas: (ideas: ProjectIdea[]): void => {
		try {
			localStorage.setItem(STORAGE_KEY, JSON.stringify(ideas));
		} catch (error) {
			console.error("Error saving to localStorage:", error);
			throw new Error("Failed to save ideas");
		}
	},

	createIdea: (input: ProjectIdeaInput): ProjectIdea => {
		const ideas = storageApi.getIdeas();
		const newIdea: ProjectIdea = {
			id: crypto.randomUUID(),
			...input,
			tags: input.tags || [],
			dateCreated: new Date().toISOString(),
			dateUpdated: new Date().toISOString(),
		};

		const updatedIdeas = [newIdea, ...ideas];
		storageApi.saveIdeas(updatedIdeas);
		return newIdea;
	},

	updateIdea: (id: string, updates: Partial<ProjectIdeaInput>): ProjectIdea => {
		const ideas = storageApi.getIdeas();
		const ideaIndex = ideas.findIndex((idea) => idea.id === id);

		if (ideaIndex === -1) {
			throw new Error("Idea not found");
		}

		const updatedIdea = {
			...ideas[ideaIndex],
			...updates,
			dateUpdated: new Date().toISOString(),
		};

		ideas[ideaIndex] = updatedIdea;
		storageApi.saveIdeas(ideas);
		return updatedIdea;
	},

	deleteIdea: (id: string): void => {
		const ideas = storageApi.getIdeas();
		const filteredIdeas = ideas.filter((idea) => idea.id !== id);

		if (filteredIdeas.length === ideas.length) {
			throw new Error("Idea not found");
		}

		storageApi.saveIdeas(filteredIdeas);
	},
};

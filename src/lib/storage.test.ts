import { beforeEach, describe, expect, it, vi } from "vitest";
import type { ProjectIdea, ProjectIdeaInput } from "@/types";
import { storageApi } from "./storage";

// Mock localStorage
const createLocalStorageMock = () => {
	let store: Record<string, string> = {};
	return {
		getItem: vi.fn((key: string) => store[key] || null),
		setItem: vi.fn((key: string, value: string) => {
			store[key] = value;
		}),
		removeItem: vi.fn((key: string) => {
			delete store[key];
		}),
		clear: vi.fn(() => {
			store = {};
		}),
	};
};

// Mock crypto.randomUUID
Object.defineProperty(global.self, "crypto", {
	value: {
		randomUUID: () => "mock-uuid",
	},
});

describe("storageApi", () => {
	beforeEach(() => {
		const localStorageMock = createLocalStorageMock();
		Object.defineProperty(window, "localStorage", {
			value: localStorageMock,
			writable: true,
		});
		localStorageMock.clear();
	});

	const mockIdeas: ProjectIdea[] = [
		{
			id: "1",
			title: "Test Idea 1",
			description: "Description 1",
			priority: "low",
			tags: ["react"],
			dateCreated: new Date().toISOString(),
			dateUpdated: new Date().toISOString(),
		},
		{
			id: "2",
			title: "Test Idea 2",
			description: "Description 2",
			priority: "medium",
			tags: ["typescript"],
			dateCreated: new Date().toISOString(),
			dateUpdated: new Date().toISOString(),
		},
	];

	describe("getIdeas", () => {
		it("should return an empty array if localStorage is empty", () => {
			const ideas = storageApi.getIdeas();
			expect(ideas).toEqual([]);
		});

		it("should return ideas from localStorage", () => {
			window.localStorage.setItem("project-ideas", JSON.stringify(mockIdeas));
			const ideas = storageApi.getIdeas();
			expect(ideas).toEqual(mockIdeas);
		});

		it("should return an empty array if localStorage parsing fails", () => {
			window.localStorage.setItem("project-ideas", "invalid-json");
			const ideas = storageApi.getIdeas();
			expect(ideas).toEqual([]);
		});
	});

	describe("createIdea", () => {
		it("should create a new idea and add it to localStorage", () => {
			const newIdeaInput: ProjectIdeaInput = {
				title: "New Idea",
				description: "New Description",
				priority: "low",
				tags: ["new"],
			};
			const newIdea = storageApi.createIdea(newIdeaInput);

			expect(newIdea).toMatchObject(newIdeaInput);
			expect(newIdea.id).toBe("mock-uuid");

			const ideas = storageApi.getIdeas();
			expect(ideas).toHaveLength(1);
			expect(ideas[0]).toEqual(newIdea);
		});
	});

	describe("updateIdea", () => {
		beforeEach(() => {
			storageApi.saveIdeas([...mockIdeas]);
		});

		it("should update an existing idea", () => {
			const updates: Partial<ProjectIdeaInput> = { title: "Updated Title" };
			const updatedIdea = storageApi.updateIdea("1", updates);

			expect(updatedIdea.title).toBe("Updated Title");

			const ideas = storageApi.getIdeas();
			const ideaInStorage = ideas.find((idea) => idea.id === "1");
			expect(ideaInStorage?.title).toBe("Updated Title");
		});

		it("should throw an error if the idea is not found", () => {
			const updates: Partial<ProjectIdeaInput> = { title: "Updated Title" };
			expect(() => storageApi.updateIdea("non-existent-id", updates)).toThrow(
				"Idea not found",
			);
		});
	});

	describe("deleteIdea", () => {
		beforeEach(() => {
			storageApi.saveIdeas([...mockIdeas]);
		});

		it("should delete an existing idea", () => {
			storageApi.deleteIdea("1");
			const ideas = storageApi.getIdeas();
			expect(ideas).toHaveLength(1);
			expect(ideas.find((idea) => idea.id === "1")).toBeUndefined();
		});

		it("should throw an error if the idea is not found", () => {
			expect(() => storageApi.deleteIdea("non-existent-id")).toThrow(
				"Idea not found",
			);
		});
	});
});

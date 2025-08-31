import type React from "react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { useDeleteIdea, useUpdateIdea } from "@/hooks/useIdeas";
import { sortIdeas } from "@/lib/utils";
import type { FilterOptions, ProjectIdea, SortOption } from "@/types";
import { IdeaCard } from "./IdeaCard";
import { SearchFilter } from "./SearchFilter";

interface IdeaListProps {
	ideas: ProjectIdea[];
}

export const IdeaList: React.FC<IdeaListProps> = ({ ideas }) => {
	const [filters, setFilters] = useState<FilterOptions>({
		search: "",
		selectedTags: [],
		priority: "",
	});
	const [sortOption, setSortOption] = useState<SortOption>("dateCreated-desc");

	const updateMutation = useUpdateIdea();
	const deleteMutation = useDeleteIdea();

	const filteredIdeas = ideas.filter((idea) => {
		const matchesSearch =
			idea.title.toLowerCase().includes(filters.search.toLowerCase()) ||
			idea.description.toLowerCase().includes(filters.search.toLowerCase());

		const matchesTags =
			filters.selectedTags.length === 0 ||
			filters.selectedTags.some((tag) => idea.tags.includes(tag));
		const matchesPriority =
			!filters.priority || idea.priority === filters.priority;

		return matchesSearch && matchesTags && matchesPriority;
	});

	const sortedIdeas = sortIdeas(filteredIdeas, sortOption);

	const handleUpdate = async (id: string, updates: Partial<ProjectIdea>) => {
		try {
			await updateMutation.mutateAsync({ id, updates });
			toast({
				title: "Success",
				description: "Project idea updated successfully!",
			});
		} catch (error) {
			console.error(error);
			toast({
				title: "Error",
				description: "Failed to update project idea. Please try again.",
				variant: "destructive",
			});
		}
	};

	const handleDelete = async (id: string) => {
		try {
			await deleteMutation.mutateAsync(id);
			toast({
				title: "Success",
				description: "Project idea deleted successfully!",
			});
		} catch (error) {
			console.error(error);
			toast({
				title: "Error",
				description: "Failed to delete project idea. Please try again.",
				variant: "destructive",
			});
		}
	};

	return (
		<div className="space-y-6">
			<SearchFilter
				ideas={ideas}
				filters={filters}
				onFiltersChange={setFilters}
				sortOption={sortOption}
				onSortChange={setSortOption}
			/>

			{sortedIdeas.length === 0 ? (
				<div className="py-12 text-center">
					<div className="mb-2 text-lg text-muted-foreground">
						{ideas.length === 0
							? "No project ideas yet"
							: "No ideas match your filters"}
					</div>
					<p className="text-sm text-muted-foreground">
						{ideas.length === 0
							? "Add your first project idea to get started!"
							: "Try adjusting your search or filter criteria."}
					</p>
				</div>
			) : (
				<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
					{sortedIdeas.map((idea) => (
						<IdeaCard
							key={idea.id}
							idea={idea}
							onUpdate={handleUpdate}
							onDelete={handleDelete}
							isUpdating={updateMutation.isPending}
							isDeleting={deleteMutation.isPending}
						/>
					))}
				</div>
			)}
		</div>
	);
};

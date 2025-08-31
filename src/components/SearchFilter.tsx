import { Hash, Search, X } from "lucide-react";
import type React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import type { FilterOptions, ProjectIdea, SortOption } from "@/types";

interface SearchFilterProps {
	ideas: ProjectIdea[];
	filters: FilterOptions;
	onFiltersChange: (filters: FilterOptions) => void;
	sortOption: SortOption;
	onSortChange: (sortOption: SortOption) => void;
}

export const SearchFilter: React.FC<SearchFilterProps> = ({
	ideas,
	filters,
	onFiltersChange,
	sortOption,
	onSortChange,
}) => {
	const allTags = Array.from(new Set(ideas.flatMap((idea) => idea.tags)));

	const handleSearchChange = (search: string) => {
		onFiltersChange({ ...filters, search });
	};

	const handleTagToggle = (tag: string) => {
		const isSelected = filters.selectedTags.includes(tag);
		const newSelectedTags = isSelected
			? filters.selectedTags.filter((t) => t !== tag)
			: [...filters.selectedTags, tag];
		onFiltersChange({ ...filters, selectedTags: newSelectedTags });
	};

	const handlePriorityChange = (priority: string) => {
		onFiltersChange({
			...filters,
			priority: priority === "all" ? "" : priority,
		});
	};

	const clearFilters = () => {
		onFiltersChange({ search: "", selectedTags: [], priority: "" });
	};

	const hasActiveFilters =
		filters.search || filters.selectedTags.length > 0 || filters.priority;

	return (
		<div className="space-y-4">
			<div className="relative">
				<Search className="absolute left-3 top-1/2 w-4 h-4 transform -translate-y-1/2 text-muted-foreground" />
				<Input
					placeholder="Search ideas by title or description..."
					value={filters.search}
					onChange={(e) => handleSearchChange(e.target.value)}
					className="pl-10"
				/>
			</div>

			<div className="space-y-3">
				{allTags.length > 0 && (
					<div>
						<div className="flex flex-row flex-wrap gap-2 mb-2">
							<Hash className="w-4 h-4 text-muted-foreground" />
							<span className="text-sm font-medium text-muted-foreground">
								Filter by tags:
							</span>
							{allTags.map((tag) => {
								const isSelected = filters.selectedTags.includes(tag);
								return (
									<Badge
										key={tag}
										variant={isSelected ? "default" : "outline"}
										className="transition-colors cursor-pointer hover:bg-primary/80"
										onClick={() => handleTagToggle(tag)}
									>
										{tag}
									</Badge>
								);
							})}
						</div>
					</div>
				)}
				<div className="flex flex-col gap-3 sm:flex-row">
					<div className="flex-1">
						<Select
							value={filters.priority || "all"}
							onValueChange={handlePriorityChange}
						>
							<SelectTrigger>
								<SelectValue placeholder="All Priorities" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="all">All Priorities</SelectItem>
								<SelectItem value="high">High Priority</SelectItem>
								<SelectItem value="medium">Medium Priority</SelectItem>
								<SelectItem value="low">Low Priority</SelectItem>
							</SelectContent>
						</Select>
					</div>
					<div className="flex-1">
						<Select value={sortOption} onValueChange={onSortChange}>
							<SelectTrigger>
								<SelectValue placeholder="Sort by" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="dateCreated-desc">
									Date Created (Newest First)
								</SelectItem>
								<SelectItem value="dateCreated-asc">
									Date Created (Oldest First)
								</SelectItem>
								<SelectItem value="dateUpdated-desc">
									Date Updated (Newest First)
								</SelectItem>
								<SelectItem value="dateUpdated-asc">
									Date Updated (Oldest First)
								</SelectItem>
								<SelectItem value="priority-desc">
									Priority (High to Low)
								</SelectItem>
								<SelectItem value="priority-asc">
									Priority (Low to High)
								</SelectItem>
								<SelectItem value="title-asc">Title (A-Z)</SelectItem>
								<SelectItem value="title-desc">Title (Z-A)</SelectItem>
							</SelectContent>
						</Select>
					</div>

					{hasActiveFilters && (
						<Button variant="outline" onClick={clearFilters} size="icon">
							<X className="w-4 h-4" />
						</Button>
					)}
				</div>
			</div>
		</div>
	);
};

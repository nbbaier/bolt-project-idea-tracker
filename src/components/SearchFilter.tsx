import React from 'react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FilterOptions, ProjectIdea } from '@/types';
import { Search, X, Hash } from 'lucide-react';

interface SearchFilterProps {
  ideas: ProjectIdea[];
  filters: FilterOptions;
  onFiltersChange: (filters: FilterOptions) => void;
}

export const SearchFilter: React.FC<SearchFilterProps> = ({
  ideas,
  filters,
  onFiltersChange,
}) => {
  const allTags = Array.from(new Set(ideas.flatMap(idea => idea.tags)));
  
  const handleSearchChange = (search: string) => {
    onFiltersChange({ ...filters, search });
  };

  const handleTagToggle = (tag: string) => {
    const isSelected = filters.selectedTags.includes(tag);
    const newSelectedTags = isSelected
      ? filters.selectedTags.filter(t => t !== tag)
      : [...filters.selectedTags, tag];
    onFiltersChange({ ...filters, selectedTags: newSelectedTags });
  };

  const handlePriorityChange = (priority: string) => {
    onFiltersChange({ ...filters, priority: priority === 'all' ? '' : priority });
  };

  const clearFilters = () => {
    onFiltersChange({ search: '', selectedTags: [], priority: '' });
  };

  const hasActiveFilters = filters.search || filters.selectedTags.length > 0 || filters.priority;

  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
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
            <div className="flex flex-row items-center gap-2 mb-2 flex-wrap">
              <Hash className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium text-muted-foreground">Filter by tags:</span>
              {allTags.map((tag) => {
                const isSelected = filters.selectedTags.includes(tag);
                return (
                  <Badge
                    key={tag}
                    variant={isSelected ? "default" : "outline"}
                    className="cursor-pointer hover:bg-primary/80 transition-colors self-center"
                    onClick={() => handleTagToggle(tag)}
                  >
                    {tag}
                  </Badge>
                );
              })}
            </div>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1">
            <Select value={filters.priority || 'all'} onValueChange={handlePriorityChange}>
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

          {hasActiveFilters && (
            <Button variant="outline" onClick={clearFilters} size="icon">
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
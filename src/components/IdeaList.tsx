import React, { useState } from 'react';
import { ProjectIdea, FilterOptions } from '@/types';
import { IdeaCard } from './IdeaCard';
import { SearchFilter } from './SearchFilter';
import { useUpdateIdea, useDeleteIdea } from '@/hooks/useIdeas';
import { toast } from '@/hooks/use-toast';

interface IdeaListProps {
  ideas: ProjectIdea[];
}

export const IdeaList: React.FC<IdeaListProps> = ({ ideas }) => {
  const [filters, setFilters] = useState<FilterOptions>({
    search: '',
    selectedTags: [],
    priority: '',
  });

  const updateMutation = useUpdateIdea();
  const deleteMutation = useDeleteIdea();

  const filteredIdeas = ideas.filter((idea) => {
    const matchesSearch = 
      idea.title.toLowerCase().includes(filters.search.toLowerCase()) ||
      idea.description.toLowerCase().includes(filters.search.toLowerCase());
    
    const matchesTags = filters.selectedTags.length === 0 || 
      filters.selectedTags.some(tag => idea.tags.includes(tag));
    const matchesPriority = !filters.priority || idea.priority === filters.priority;

    return matchesSearch && matchesTags && matchesPriority;
  });

  const handleUpdate = async (id: string, updates: Partial<ProjectIdea>) => {
    try {
      await updateMutation.mutateAsync({ id, updates });
      toast({
        title: 'Success',
        description: 'Project idea updated successfully!',
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to update project idea. Please try again.',
        variant: 'destructive',
      });
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteMutation.mutateAsync(id);
      toast({
        title: 'Success',
        description: 'Project idea deleted successfully!',
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to delete project idea. Please try again.',
        variant: 'destructive',
      });
    }
  };

  return (
    <div className="space-y-6">
      <SearchFilter
        ideas={ideas}
        filters={filters}
        onFiltersChange={setFilters}
      />
      
      {filteredIdeas.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-muted-foreground text-lg mb-2">
            {ideas.length === 0 ? 'No project ideas yet' : 'No ideas match your filters'}
          </div>
          <p className="text-sm text-muted-foreground">
            {ideas.length === 0 
              ? 'Add your first project idea to get started!' 
              : 'Try adjusting your search or filter criteria.'}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
          {filteredIdeas.map((idea) => (
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
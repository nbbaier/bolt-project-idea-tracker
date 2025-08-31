import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { IdeaForm } from './IdeaForm';
import { useCreateIdea } from '@/hooks/useIdeas';
import { ProjectIdeaInput } from '@/types';
import { Plus } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

export const AddIdeaDialog: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const createMutation = useCreateIdea();

  const handleSubmit = async (data: ProjectIdeaInput) => {
    try {
      await createMutation.mutateAsync(data);
      setIsOpen(false);
      toast({
        title: 'Success',
        description: 'Project idea added successfully!',
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to add project idea. Please try again.',
        variant: 'destructive',
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="shadow-lg hover:shadow-xl transition-shadow">
          <Plus className="h-4 w-4 mr-2" />
          Add New Idea
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Add New Project Idea</DialogTitle>
        </DialogHeader>
        <IdeaForm 
          onSubmit={handleSubmit} 
          isLoading={createMutation.isPending}
          submitLabel="Add Idea"
        />
      </DialogContent>
    </Dialog>
  );
};
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { ProjectIdea, ProjectIdeaInput } from '@/types';
import { storageApi } from '@/lib/storage';

const QUERY_KEY = ['project-ideas'];

export const useIdeas = () => {
  return useQuery({
    queryKey: QUERY_KEY,
    queryFn: () => {
      // Simulate API delay
      return new Promise<ProjectIdea[]>((resolve) => {
        setTimeout(() => {
          resolve(storageApi.getIdeas());
        }, 100);
      });
    },
  });
};

export const useCreateIdea = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (input: ProjectIdeaInput) => {
      return new Promise<ProjectIdea>((resolve, reject) => {
        setTimeout(() => {
          try {
            const newIdea = storageApi.createIdea(input);
            resolve(newIdea);
          } catch (error) {
            reject(error);
          }
        }, 200);
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEY });
    },
  });
};

export const useUpdateIdea = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, updates }: { id: string; updates: Partial<ProjectIdeaInput> }) => {
      return new Promise<ProjectIdea>((resolve, reject) => {
        setTimeout(() => {
          try {
            const updatedIdea = storageApi.updateIdea(id, updates);
            resolve(updatedIdea);
          } catch (error) {
            reject(error);
          }
        }, 200);
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEY });
    },
  });
};

export const useDeleteIdea = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => {
      return new Promise<void>((resolve, reject) => {
        setTimeout(() => {
          try {
            storageApi.deleteIdea(id);
            resolve();
          } catch (error) {
            reject(error);
          }
        }, 200);
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEY });
    },
  });
};
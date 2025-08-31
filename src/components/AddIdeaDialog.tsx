import { Plus } from "lucide-react";
import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "@/hooks/use-toast";
import { useCreateIdea } from "@/hooks/useIdeas";
import type { ProjectIdeaInput } from "@/types";
import { IdeaForm } from "./IdeaForm";

export const AddIdeaDialog: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	const createMutation = useCreateIdea();

	const handleSubmit = async (data: ProjectIdeaInput) => {
		try {
			await createMutation.mutateAsync(data);
			setIsOpen(false);
			toast({
				title: "Success",
				description: "Project idea added successfully!",
			});
		} catch (error) {
			console.error(error);
			toast({
				title: "Error",
				description: "Failed to add project idea. Please try again.",
				variant: "destructive",
			});
		}
	};

	return (
		<Dialog open={isOpen} onOpenChange={setIsOpen}>
			<DialogTrigger asChild>
				<Button
					className="shadow-lg transition-shadow hover:shadow-md"
					size="icon"
				>
					<Plus className="w-5 h-5" />
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

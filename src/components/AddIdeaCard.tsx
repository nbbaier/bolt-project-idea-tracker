import { Plus } from "lucide-react";
import type React from "react";
import { useState } from "react";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "@/hooks/use-toast";
import { useCreateIdea } from "@/hooks/useIdeas";
import type { ProjectIdeaInput } from "@/types";
import { IdeaForm } from "./IdeaForm";

export const AddIdeaCard: React.FC = () => {
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

	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === "Enter" || e.key === " ") {
			e.preventDefault();
			setIsOpen(true);
		}
	};

	return (
		<>
			<Card 
				className="group cursor-pointer transition-all duration-200 hover:scale-[1.02] border-dashed border-2 border-primary/30 bg-primary/5 hover:bg-primary/10 hover:border-primary/50"
				onClick={() => setIsOpen(true)}
				onKeyDown={handleKeyDown}
				tabIndex={0}
				role="button"
				aria-label="Add new project idea"
			>
				<CardHeader className="pb-3">
					<CardTitle className="flex items-center gap-3 text-lg font-semibold text-primary">
						<div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
							<Plus className="w-5 h-5" />
						</div>
						Add New Project Idea
					</CardTitle>
				</CardHeader>
				<CardContent>
					<p className="text-sm text-muted-foreground">
						Click here to create a new project idea with title, description, tags, and priority level.
					</p>
				</CardContent>
			</Card>

			<Dialog open={isOpen} onOpenChange={setIsOpen}>
				<DialogContent className="sm:max-w-[500px] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] duration-200">
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
		</>
	);
};
import { format } from "date-fns";
import { Calendar, Edit, Trash2 } from "lucide-react";
import type React from "react";
import { useState } from "react";
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import type { ProjectIdea, ProjectIdeaInput } from "@/types";
import { IdeaForm } from "./IdeaForm";

interface IdeaCardProps {
	idea: ProjectIdea;
	onUpdate: (id: string, updates: Partial<ProjectIdeaInput>) => void;
	onDelete: (id: string) => void;
	isUpdating?: boolean;
	isDeleting?: boolean;
}

const priorityColors = {
	low: "bg-green-100 text-green-800 border-green-200",
	medium: "bg-amber-100 text-amber-800 border-amber-200",
	high: "bg-red-100 text-red-800 border-red-200",
};

export const IdeaCard: React.FC<IdeaCardProps> = ({
	idea,
	onUpdate,
	onDelete,
	isUpdating = false,
	isDeleting = false,
}) => {
	const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

	const handleUpdate = (updates: ProjectIdeaInput) => {
		onUpdate(idea.id, updates);
		setIsEditDialogOpen(false);
	};

	const formattedDate = format(new Date(idea.dateCreated), "MMM dd, yyyy");

	return (
		<Card className="group transition-all duration-200 hover:scale-[1.02] border-border/50 rounded-md">
			<CardHeader className="pb-3 hover:text-red-sm">
				<div className="flex gap-3 justify-between items-start">
					<CardTitle className="text-lg font-semibold leading-tight transition-colors line-clamp-2 group-hover:text-primary">
						{idea.title}
					</CardTitle>
					<Badge
						variant="outline"
						className={`${priorityColors[idea.priority]} flex-shrink-0 font-medium`}
					>
						{idea.priority.charAt(0).toUpperCase() + idea.priority.slice(1)}
					</Badge>
				</div>
			</CardHeader>

			<CardContent className="pb-4">
				<p className="mb-4 text-sm leading-relaxed text-muted-foreground line-clamp-3">
					{idea.description || <span className="italic">No description</span>}
				</p>

				<div className="flex gap-4 items-center text-xs text-muted-foreground">
					<div className="flex gap-1 items-center">
						<Calendar className="w-3 h-3" />
						<span>{formattedDate}</span>
					</div>
				</div>

				{idea.tags.length > 0 && (
					<div className="flex flex-wrap gap-1 mt-3">
						{idea.tags.slice(0, 3).map((tag) => (
							<Badge
								key={tag}
								variant="outline"
								className="text-xs px-2 py-0.5 bg-muted/50"
							>
								{tag}
							</Badge>
						))}
						{idea.tags.length > 3 && (
							<Badge
								variant="outline"
								className="text-xs px-2 py-0.5 bg-muted/50"
							>
								+{idea.tags.length - 3} more
							</Badge>
						)}
					</div>
				)}
			</CardContent>

			<CardFooter className="flex gap-2 pt-0">
				<Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
					<DialogTrigger asChild>
						<Button variant="outline" size="sm" className="flex-1">
							<Edit className="mr-2 w-4 h-4" />
							Edit
						</Button>
					</DialogTrigger>
					<DialogContent className="sm:max-w-[500px] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] duration-200">
						<DialogHeader>
							<DialogTitle>Edit Project Idea</DialogTitle>
						</DialogHeader>
						<IdeaForm
							onSubmit={handleUpdate}
							isLoading={isUpdating}
							initialValues={idea}
							submitLabel="Update Idea"
						/>
					</DialogContent>
				</Dialog>

				<AlertDialog>
					<AlertDialogTrigger asChild>
						<Button variant="outline" size="sm" disabled={isDeleting}>
							<Trash2 className="mr-2 w-4 h-4" />
							Delete
						</Button>
					</AlertDialogTrigger>
					<AlertDialogContent>
						<AlertDialogHeader>
							<AlertDialogTitle>Delete Project Idea</AlertDialogTitle>
							<AlertDialogDescription>
								Are you sure you want to delete "{idea.title}"? This action
								cannot be undone.
							</AlertDialogDescription>
						</AlertDialogHeader>
						<AlertDialogFooter>
							<AlertDialogCancel>Cancel</AlertDialogCancel>
							<AlertDialogAction
								onClick={() => onDelete(idea.id)}
								className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
							>
								Delete
							</AlertDialogAction>
						</AlertDialogFooter>
					</AlertDialogContent>
				</AlertDialog>
			</CardFooter>
		</Card>
	);
};

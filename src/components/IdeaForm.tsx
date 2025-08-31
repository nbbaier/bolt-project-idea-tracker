import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Plus, X } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import type { ProjectIdeaInput } from "@/types";

const formSchema = z.object({
	title: z
		.string()
		.min(1, "Title is required")
		.max(100, "Title must be less than 100 characters"),
	description: z
		.string()
		.max(1000, "Description must be less than 1000 characters"),
	tags: z.array(z.string()).default([]),
	priority: z.enum(["low", "medium", "high"]),
});

interface IdeaFormProps {
	onSubmit: (data: ProjectIdeaInput) => void;
	isLoading?: boolean;
	initialValues?: Partial<ProjectIdeaInput>;
	submitLabel?: string;
}

export const IdeaForm: React.FC<IdeaFormProps> = ({
	onSubmit,
	isLoading = false,
	initialValues,
	submitLabel = "Add Idea",
}) => {
	const [newTag, setNewTag] = React.useState("");

	const form = useForm<ProjectIdeaInput>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			title: initialValues?.title || "",
			description: initialValues?.description || "",
			tags: initialValues?.tags || [],
			priority: initialValues?.priority || "medium",
		},
	});

	const currentTags = form.watch("tags");

	const addTag = () => {
		const trimmedTag = newTag.trim();
		if (trimmedTag && !currentTags.includes(trimmedTag)) {
			form.setValue("tags", [...currentTags, trimmedTag]);
			setNewTag("");
		}
	};

	const removeTag = (tagToRemove: string) => {
		form.setValue(
			"tags",
			currentTags.filter((tag) => tag !== tagToRemove),
		);
	};

	const handleKeyPress = (e: React.KeyboardEvent) => {
		if (e.key === "Enter") {
			e.preventDefault();
			addTag();
		}
	};

	const handleSubmit = React.useCallback(
		(data: ProjectIdeaInput) => {
			onSubmit(data);
			if (!initialValues) {
				form.reset();
				setNewTag("");
			}
		},
		[onSubmit, initialValues, form],
	);

	React.useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
				e.preventDefault();
				form.handleSubmit(handleSubmit)();
			}
		};

		document.addEventListener("keydown", handleKeyDown);
		return () => document.removeEventListener("keydown", handleKeyDown);
	}, [form, handleSubmit]);

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
				<FormField
					control={form.control}
					name="title"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Title</FormLabel>
							<FormControl>
								<Input
									placeholder="Enter your project idea title..."
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="description"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Description</FormLabel>
							<FormControl>
								<Textarea
									placeholder="Describe your project idea in detail..."
									className="min-h-[120px] resize-none"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="tags"
					render={() => (
						<FormItem>
							<FormLabel>Tags</FormLabel>
							<div className="space-y-3">
								<div className="flex gap-2">
									<Input
										placeholder="Add a tag..."
										value={newTag}
										onChange={(e) => setNewTag(e.target.value)}
										onKeyPress={handleKeyPress}
										className="flex-1"
									/>
									<Button
										type="button"
										variant="outline"
										size="icon"
										onClick={addTag}
										disabled={
											!newTag.trim() || currentTags.includes(newTag.trim())
										}
									>
										<Plus className="w-4 h-4" />
									</Button>
								</div>
								{currentTags.length > 0 && (
									<div className="flex flex-wrap gap-2">
										{currentTags.map((tag) => (
											<Badge
												key={tag}
												variant="secondary"
												className="flex gap-1 items-center pr-1"
											>
												{tag}
												<Button
													type="button"
													variant="ghost"
													size="icon"
													className="p-0 w-4 h-4 hover:bg-destructive hover:text-destructive-foreground"
													onClick={() => removeTag(tag)}
												>
													<X className="w-3 h-3" />
												</Button>
											</Badge>
										))}
									</div>
								)}
							</div>
							<FormMessage />
						</FormItem>
					)}
				/>

				<div className="w-full">
					<FormField
						control={form.control}
						name="priority"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Priority</FormLabel>
								<Select
									onValueChange={field.onChange}
									defaultValue={field.value}
								>
									<FormControl>
										<SelectTrigger>
											<SelectValue placeholder="Select priority" />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										<SelectItem value="low">Low</SelectItem>
										<SelectItem value="medium">Medium</SelectItem>
										<SelectItem value="high">High</SelectItem>
									</SelectContent>
								</Select>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>

				<Button type="submit" disabled={isLoading} className="w-full">
					{isLoading && <Loader2 className="mr-2 w-4 h-4 animate-spin" />}
					{submitLabel}
				</Button>
			</form>
		</Form>
	);
};

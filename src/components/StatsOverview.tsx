import { Clock, Lightbulb, Target, TrendingUp } from "lucide-react";
import type React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { ProjectIdea } from "@/types";

interface StatsOverviewProps {
	ideas: ProjectIdea[];
}

export const StatsOverview: React.FC<StatsOverviewProps> = ({ ideas }) => {
	const totalIdeas = ideas.length;
	const highPriorityCount = ideas.filter(
		(idea) => idea.priority === "high",
	).length;
	const tagsCount = new Set(ideas.flatMap((idea) => idea.tags)).size;
	const recentIdeas = ideas.filter((idea) => {
		const ideaDate = new Date(idea.dateCreated);
		const weekAgo = new Date();
		weekAgo.setDate(weekAgo.getDate() - 7);
		return ideaDate > weekAgo;
	}).length;

	const stats = [
		{
			title: "Total Ideas",
			value: totalIdeas,
			icon: Lightbulb,
			description: "Project ideas tracked",
			color: "text-blue-600",
			bgColor: "bg-blue-50",
		},
		{
			title: "High Priority",
			value: highPriorityCount,
			icon: Target,
			description: "Ideas needing attention",
			color: "text-red-600",
			bgColor: "bg-red-50",
		},
		{
			title: "Tags",
			value: tagsCount,
			icon: TrendingUp,
			description: "Unique tags used",
			color: "text-green-600",
			bgColor: "bg-green-50",
		},
		{
			title: "This Week",
			value: recentIdeas,
			icon: Clock,
			description: "New ideas added",
			color: "text-purple-600",
			bgColor: "bg-purple-50",
		},
	];

	return (
		<div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
			{stats.map((stat) => {
				const IconComponent = stat.icon;
				return (
					<Card key={stat.title} className="border-border/50">
						<CardHeader className="flex flex-row justify-between items-center pb-2 space-y-0">
							<CardTitle className="text-sm font-medium text-muted-foreground">
								{stat.title}
							</CardTitle>
							<div className={`p-2 rounded-lg ${stat.bgColor}`}>
								<IconComponent className={`h-4 w-4 ${stat.color}`} />
							</div>
						</CardHeader>
						<CardContent>
							<div className="text-2xl font-bold">{stat.value}</div>
							<p className="mt-1 text-xs text-muted-foreground">
								{stat.description}
							</p>
						</CardContent>
					</Card>
				);
			})}
		</div>
	);
};

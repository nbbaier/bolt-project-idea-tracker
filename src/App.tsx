import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Lightbulb, Loader2 } from "lucide-react";
import type React from "react";
import { AddIdeaDialog } from "@/components/AddIdeaDialog";
import { IdeaList } from "@/components/IdeaList";
import { Layout } from "@/components/Layout";
import { StatsOverview } from "@/components/StatsOverview";
import { Toaster } from "@/components/ui/toaster";
import { useIdeas } from "@/hooks/useIdeas";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 5 * 60 * 1000, // 5 minutes
			gcTime: 10 * 60 * 1000, // 10 minutes
		},
	},
});

const AppContent: React.FC = () => {
	const { data: ideas = [], isLoading, error } = useIdeas();

	if (isLoading) {
		return (
			<Layout>
				<div className="text-center">
					<Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-primary" />
					<p className="text-muted-foreground">Loading your project ideas...</p>
				</div>
			</Layout>
		);
	}

	if (error) {
		return (
			<Layout>
				<div className="text-center">
					<p className="text-destructive mb-4">Failed to load project ideas</p>
					<p className="text-sm text-muted-foreground">
						Please refresh the page to try again
					</p>
				</div>
			</Layout>
		);
	}

	return (
		<Layout>
			<div className="py-8 space-y-8">
				{/* Header */}
				<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
					<div className="flex items-center gap-5">
						<div className="p-2 bg-primary/10 rounded-lg">
							<Lightbulb className="h-6 w-6 text-primary" />
						</div>
						<div>
							<h1 className="text-3xl font-bold tracking-tight">
								Project Ideas
							</h1>
							<p className="text-muted-foreground">
								Capture and organize your creative project concepts
							</p>
						</div>
					</div>
					<AddIdeaDialog />
				</div>

				{/* Stats Overview */}
				<div>
					<StatsOverview ideas={ideas} />
				</div>

				{/* Ideas List */}
				<div>
					<IdeaList ideas={ideas} />
				</div>
			</div>
			<Toaster />
		</Layout>
	);
};

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<AppContent />
		</QueryClientProvider>
	);
}

export default App;

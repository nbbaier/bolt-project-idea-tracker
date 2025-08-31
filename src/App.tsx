import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Lightbulb, Loader2 } from "lucide-react";
import type React from "react";
import { IdeaList } from "@/components/IdeaList";
import { Layout } from "@/components/Layout";
import { Toaster } from "@/components/ui/toaster";
import { useIdeas } from "@/hooks/useIdeas";
import { ModeToggle } from "./components/ThemeToggle";

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
					<Loader2 className="mx-auto mb-4 w-8 h-8 animate-spin text-primary" />
					<p className="text-muted-foreground">Loading your project ideas...</p>
				</div>
			</Layout>
		);
	}

	if (error) {
		return (
			<Layout>
				<div className="text-center">
					<p className="mb-4 text-destructive">Failed to load project ideas</p>
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
				<div className="flex items-center justify-between gap-4 rounded-lg border">
					<div className="flex gap-5 items-center">
						<div className="p-2 rounded-lg bg-primary/10">
							<Lightbulb className="w-6 h-6 text-primary" />
						</div>
						<div>
							<h1 className="text-3xl font-bold tracking-tight">
								Project Ideas
							</h1>
						</div>
					</div>
					
						<ModeToggle />
					
				</div>

				{/* Stats Overview */}
				{/* <div>
					<StatsOverview ideas={ideas} />
				</div> */}

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

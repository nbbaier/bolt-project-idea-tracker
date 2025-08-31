import type React from "react";

interface LayoutProps {
	children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<div className="min-h-screen font-sans bg-background">
			<div className="px-4 mx-auto w-full max-w-4xl sm:px-6 lg:px-8">
				{children}
			</div>
		</div>
	);
};

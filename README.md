# Project Idea Tracker

A modern, responsive web application for tracking and managing project ideas built with React, TypeScript, and Tailwind CSS.

## Features

- **Add Ideas**: Create new project ideas with title, description, category, and priority
- **View Ideas**: Browse all ideas in a beautiful card-based layout
- **Edit Ideas**: Update existing ideas with inline editing
- **Delete Ideas**: Remove ideas with confirmation dialogs
- **Search & Filter**: Find ideas by title/description and filter by category or priority
- **Local Storage**: Automatic persistence using localStorage
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Statistics**: Overview dashboard showing key metrics

## Tech Stack

- **React 18+** with TypeScript for type safety
- **Vite** for fast development and building
- **Tailwind CSS** for utility-first styling
- **shadcn/ui** for beautiful, accessible UI components
- **TanStack Query** for state management and data fetching
- **React Hook Form** with Zod validation for forms
- **date-fns** for date formatting
- **Lucide React** for icons

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Usage

### Adding a New Idea

1. Click the "Add New Idea" button
2. Fill in the required fields (title and description)
3. Optionally add a category and set priority level
4. Click "Add Idea" to save

### Managing Ideas

- **Edit**: Click the "Edit" button on any idea card to modify its details
- **Delete**: Click the "Delete" button and confirm to remove an idea
- **Search**: Use the search bar to find ideas by title or description
- **Filter**: Use the category and priority dropdowns to filter ideas

### Data Persistence

All project ideas are automatically saved to localStorage and will persist between browser sessions.

## Project Structure

```
src/
├── components/           # React components
│   ├── ui/              # shadcn/ui base components
│   ├── AddIdeaDialog.tsx # Dialog for adding new ideas
│   ├── IdeaCard.tsx     # Individual idea display component
│   ├── IdeaForm.tsx     # Form component for idea input
│   ├── IdeaList.tsx     # List container with filtering
│   ├── SearchFilter.tsx # Search and filter controls
│   └── StatsOverview.tsx # Statistics dashboard
├── hooks/               # Custom React hooks
│   ├── useIdeas.ts     # TanStack Query hooks for CRUD operations
│   └── use-toast.ts    # Toast notification hook
├── lib/                # Utility functions
│   ├── storage.ts      # localStorage API wrapper
│   └── utils.ts        # Common utilities
├── types/              # TypeScript type definitions
│   └── index.ts        # Project idea interfaces
├── App.tsx             # Main application component
├── main.tsx            # React application entry point
└── index.css           # Global styles and Tailwind imports
```

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the MIT License.
# Project Idea Tracker

A modern, responsive web application for tracking and managing project ideas

[![Built with React](https://img.shields.io/badge/React-18+-61DAFB?style=flat&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5+-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4+-646CFF?style=flat&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4+-06B6D4?style=flat&logo=tailwindcss)](https://tailwindcss.com/)

## Features
- **Add Ideas**: Create new project ideas with title, description, category, and priority
- **View Ideas**: Browse all ideas in a beautiful card-based layout
- **Edit Ideas**: Update existing ideas with inline editing
- **Delete Ideas**: Remove ideas with confirmation dialogs
- **Search & Filter**: Find ideas by title/description and filter by category or priority
- **Local Storage**: Automatic persistence using localStorage
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

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

- **Node.js** (version 18.0 or higher) and **npm** 

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/nbbaier/bolt-project-idea-tracker.git
   cd bolt-project-idea-tracker
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   
   The application will start and be available at: `http://localhost:5173`

4. **Open in your browser**
   
   Navigate to `http://localhost:5173` and start tracking your project ideas!

### 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Create optimized production build |
| `npm run preview` | Preview production build locally |
| `npm run test` | Run unit tests with Vitest |
| `npm run test:ui` | Run tests with interactive UI |
| `npm run lint` | Run ESLint for code quality checks |

## 📖 Usage

### 💡 Adding a New Idea

1. Click the **"Add New Idea"** card
2. Fill in the form with your idea details:
   - **Title**: A concise name for your project idea
   - **Description**: Detailed explanation of your concept
   - **Tags**: Add relevant keywords (optional, press Enter to add)
   - **Priority**: Set importance level (Low, Medium, High)
3. Click **"Add Idea"** to save your project idea

###  Managing Your Ideas

#### Viewing Ideas
- All ideas are displayed as cards in a clean, organized layout
- Each card shows title, description, tags, priority level, and creation date
- Ideas are sorted by creation date (newest first)

#### Editing Ideas
- Click the **"Edit"** button (pencil icon) on any idea card
- Modify any field in the popup dialog
- Click **"Update Idea"** to save your changes

#### Deleting Ideas
- Click the **"Delete"** button (trash icon) on any idea card
- Confirm deletion in the popup dialog
- The idea will be permanently removed

### Search & Filter

#### Smart Search
- Use the search bar to find ideas by **title** or **description**
- Search is real-time and case-insensitive
- Results update as you type

#### Tag Filtering
- Click on any tag badge to filter ideas containing that tag
- Multiple tags can be selected for AND filtering
- Active filters are highlighted in blue

#### Priority Filtering
- Use the priority dropdown to filter by importance level
- Choose from: All Priorities, High, Medium, Low
- Combine with search and tag filters for precise results

#### Clear Filters
- Click the **X** button to clear all active filters
- Returns to showing all project ideas

### Data Persistence

- **Automatic Saving**: All project ideas are automatically saved to your browser's localStorage
- **No Account Required**: Everything works offline without any sign-up process
- **Cross-Session Persistence**: Your data persists between browser sessions
- **Privacy First**: All data stays on your device - nothing is sent to external servers

### Statistics Dashboard

The top of the application shows key metrics:

- **Total Ideas**: Count of all project ideas you've created
- **High Priority**: Number of ideas marked as high priority
- **Tags**: Total number of unique tags used across all ideas
- **This Week**: Number of new ideas added in the past 7 days

## 📁 Project Structure

```

src/                      # Source code
├── components/           # React components
│   ├── ui/              # shadcn/ui base components
│   ├── AddIdeaDialog.tsx    # Modal for creating new ideas
│   ├── IdeaCard.tsx        # Individual idea display component
│   ├── IdeaForm.tsx        # Reusable form for idea input
│   ├── IdeaList.tsx        # Main list container with filtering
│   ├── Layout.tsx          # Application layout wrapper
│   ├── SearchFilter.tsx    # Search and filter controls
│   ├── StatsOverview.tsx   # Statistics dashboard
│   └── ThemeToggle.tsx     # Dark/light mode toggle
├── hooks/               # Custom React hooks
│   ├── useIdeas.ts     # TanStack Query hooks for CRUD operations
│   └── use-toast.ts    # Toast notification management
├── lib/                # Utility functions and configurations
│   ├── storage.ts      # localStorage API wrapper
│   └── utils.ts        # Common utility functions
├── test/               # Test configuration and setup
├── types/              # TypeScript type definitions
├── App.tsx             # Main application component
├── main.tsx            # React application entry point
└── index.css           # Global styles and Tailwind imports
```

## 🤝 Contributing

### Development Setup

1. Fork the repository on GitHub
2. Clone your fork locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/bolt-project-idea-tracker.git
   cd bolt-project-idea-tracker
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

5. Make your changes and test thoroughly:
   ```bash
   npm run test
   npm run lint
   npm run build
   ```

6. Commit your changes with a descriptive message:
   ```bash
   git commit -m "feat: add new search functionality"
   ```

7. Push to your fork and submit a pull request

### Contribution Guidelines

- **Code Style**: Follow existing patterns and run `npm run lint`
- **Testing**: Add tests for new features and ensure all tests pass
- **Documentation**: Update README and code comments as needed
- **Commits**: Use conventional commit messages (feat, fix, docs, etc.)

### Areas for Contribution

- 🐛 **Bug Fixes**: Fix issues and improve stability
- ✨ **Features**: Add new functionality (export/import, categories, etc.)
- 📚 **Documentation**: Improve guides and code documentation  
- 🎨 **UI/UX**: Enhance design and user experience
- ⚡ **Performance**: Optimize loading and rendering
- 🧪 **Testing**: Increase test coverage and add integration tests

## 📄 License

This project is open source and available under the [MIT License](https://opensource.org/licenses/MIT).

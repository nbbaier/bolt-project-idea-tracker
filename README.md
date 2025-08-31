# Project Idea Tracker

A modern, responsive web application for tracking and managing project ideas

[![Built with React](https://img.shields.io/badge/React-18+-61DAFB?style=flat&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5+-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4+-646CFF?style=flat&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4+-06B6D4?style=flat&logo=tailwindcss)](https://tailwindcss.com/)

## ✨ Features

### Core Functionality
- **💡 Add Ideas**: Create new project ideas with title, description, tags, and priority levels
- **👀 View Ideas**: Browse all ideas in a beautiful, responsive card-based layout
- **✏️ Edit Ideas**: Update existing ideas with smooth inline editing
- **🗑️ Delete Ideas**: Remove ideas with confirmation dialogs for safety
- **🔍 Smart Search**: Find ideas instantly by title or description with real-time filtering
- **🏷️ Tag System**: Organize ideas with custom tags and filter by categories
- **📊 Statistics Dashboard**: Visual overview showing key metrics and insights

### User Experience
- **💾 Automatic Persistence**: All data saved to localStorage - no setup required
- **📱 Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **🌓 Dark/Light Mode**: Toggle between themes with system preference detection
- **⚡ Fast Performance**: Built with Vite for lightning-fast development and production builds
- **♿ Accessibility**: Built with accessibility in mind using shadcn/ui components

## 🛠️ Tech Stack

### Frontend Framework
- **[React 18+](https://reactjs.org/)** - Modern React with hooks and concurrent features
- **[TypeScript 5.5+](https://www.typescriptlang.org/)** - Full type safety and enhanced developer experience
- **[Vite 5.4+](https://vitejs.dev/)** - Next-generation frontend tooling for fast builds

### Styling & UI
- **[Tailwind CSS 3.4+](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Beautiful, accessible, and customizable UI components
- **[Lucide React](https://lucide.dev/)** - Comprehensive icon library
- **[Tailwind Animate](https://github.com/jamiebuilds/tailwindcss-animate)** - Smooth animations

### State Management & Data
- **[TanStack Query](https://tanstack.com/query/latest)** - Powerful data fetching and state management
- **[React Hook Form](https://react-hook-form.com/)** - Performant forms with minimal re-renders
- **[Zod](https://zod.dev/)** - TypeScript-first schema validation
- **[date-fns](https://date-fns.org/)** - Modern date utility library

### Development & Testing
- **[Vitest](https://vitest.dev/)** - Fast unit testing framework
- **[ESLint](https://eslint.org/)** - Code linting and formatting
- **[TypeScript ESLint](https://typescript-eslint.io/)** - TypeScript-specific linting rules

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18.0 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **pnpm** as alternative package manager

You can verify your installation by running:
```bash
node --version  # Should show v18.0.0 or higher
npm --version   # Should show npm version
```

### 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/nbbaier/bolt-project-idea-tracker.git
   cd bolt-project-idea-tracker
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   
   *Or if you prefer pnpm:*
   ```bash
   pnpm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   
   The application will start and be available at: **http://localhost:5173**

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

1. Click the **"Add New Idea"** button in the top-right corner
2. Fill in the form with your idea details:
   - **Title**: A concise name for your project idea
   - **Description**: Detailed explanation of your concept
   - **Tags**: Add relevant keywords (optional, press Enter to add)
   - **Priority**: Set importance level (Low, Medium, High)
3. Click **"Add Idea"** to save your project idea

### 🛠️ Managing Your Ideas

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

### 🔍 Search & Filter

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

### 💾 Data Persistence

- **Automatic Saving**: All project ideas are automatically saved to your browser's localStorage
- **No Account Required**: Everything works offline without any sign-up process
- **Cross-Session Persistence**: Your data persists between browser sessions
- **Privacy First**: All data stays on your device - nothing is sent to external servers

### 📊 Statistics Dashboard

The top of the application shows key metrics:

- **Total Ideas**: Count of all project ideas you've created
- **High Priority**: Number of ideas marked as high priority
- **Tags**: Total number of unique tags used across all ideas
- **This Week**: Number of new ideas added in the past 7 days

## 🏗️ Development

### 🧪 Testing

Run the test suite to ensure everything is working correctly:

```bash
# Run all tests
npm run test

# Run tests with interactive UI
npm run test:ui

# Run tests in watch mode
npm test -- --watch
```

The project includes comprehensive unit tests for:
- Storage API functions
- Component rendering and behavior
- Form validation and submission
- Search and filtering logic

### 🔍 Code Quality

Maintain code quality with built-in linting:

```bash
# Check for linting errors
npm run lint

# Auto-fix fixable linting errors
npm run lint -- --fix
```

The project uses:
- **ESLint** for JavaScript/TypeScript linting
- **TypeScript** for static type checking
- **Prettier** integration for consistent formatting

### 🏗️ Building for Production

Create an optimized production build:

```bash
npm run build
```

This will:
- Compile TypeScript to JavaScript
- Bundle and optimize all assets
- Generate optimized CSS
- Create a `dist/` directory with production files

Preview the production build locally:

```bash
npm run preview
```

## 📁 Project Structure

```
bolt-project-idea-tracker/
├── public/                    # Static assets
│   └── favicon files         # App icons and manifest
├── src/                      # Source code
│   ├── components/           # React components
│   │   ├── ui/              # shadcn/ui base components
│   │   │   ├── button.tsx   # Button component
│   │   │   ├── card.tsx     # Card component
│   │   │   ├── dialog.tsx   # Modal dialog component
│   │   │   ├── input.tsx    # Input field component
│   │   │   ├── select.tsx   # Dropdown select component
│   │   │   ├── toast.tsx    # Toast notification component
│   │   │   └── toaster.tsx  # Toast container
│   │   ├── AddIdeaDialog.tsx    # Modal for creating new ideas
│   │   ├── IdeaCard.tsx        # Individual idea display component
│   │   ├── IdeaForm.tsx        # Reusable form for idea input
│   │   ├── IdeaList.tsx        # Main list container with filtering
│   │   ├── Layout.tsx          # Application layout wrapper
│   │   ├── SearchFilter.tsx    # Search and filter controls
│   │   ├── StatsOverview.tsx   # Statistics dashboard
│   │   └── ThemeToggle.tsx     # Dark/light mode toggle
│   ├── hooks/               # Custom React hooks
│   │   ├── useIdeas.ts     # TanStack Query hooks for CRUD operations
│   │   └── use-toast.ts    # Toast notification management
│   ├── lib/                # Utility functions and configurations
│   │   ├── storage.ts      # localStorage API wrapper
│   │   └── utils.ts        # Common utility functions
│   ├── test/               # Test configuration and setup
│   │   └── setup.ts        # Vitest test environment setup
│   ├── types/              # TypeScript type definitions
│   │   └── index.ts        # Core application interfaces
│   ├── App.tsx             # Main application component
│   ├── main.tsx            # React application entry point
│   └── index.css           # Global styles and Tailwind imports
├── .gitignore              # Git ignore rules
├── biome.json              # Biome configuration (future linting alternative)
├── components.json         # shadcn/ui component configuration
├── eslint.config.js        # ESLint configuration
├── index.html              # HTML entry point
├── package.json            # Dependencies and scripts
├── postcss.config.js       # PostCSS configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
├── tsconfig.app.json       # TypeScript app-specific config
├── tsconfig.node.json      # TypeScript Node.js config
├── vite.config.ts          # Vite build tool configuration
└── README.md              # Project documentation
```

### Key Architecture Decisions

- **Component-Based Architecture**: Modular React components for maintainability
- **Custom Hooks**: Encapsulated business logic in reusable hooks
- **Type Safety**: Full TypeScript coverage for reliable development
- **Local Storage**: Client-side persistence without external dependencies
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Accessibility**: ARIA-compliant components from shadcn/ui

## 🔧 Configuration

### Environment Variables

This project doesn't require environment variables for basic functionality. All configuration is handled through:

- `vite.config.ts` - Build and development server settings
- `tailwind.config.js` - Styling and theme configuration  
- `tsconfig.json` - TypeScript compiler options

### Browser Compatibility

- **Modern Browsers**: Chrome 88+, Firefox 88+, Safari 14+, Edge 88+
- **Mobile Browsers**: iOS Safari 14+, Chrome Mobile 88+
- **Features Used**: ES2020, CSS Grid, Flexbox, localStorage API

## 🚀 Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/nbbaier/bolt-project-idea-tracker)

1. Fork this repository
2. Import project to Vercel
3. Deploy with zero configuration

### Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/nbbaier/bolt-project-idea-tracker)

1. Fork this repository  
2. Connect to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Manual Deployment

```bash
# Build for production
npm run build

# The dist/ folder contains static files ready for deployment
# Upload contents to any static hosting service
```

### Docker Deployment

```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## 🛠️ Troubleshooting

### Common Issues

#### Build Errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Clear build cache
rm -rf dist .vite
npm run build
```

#### TypeScript Errors
```bash
# Restart TypeScript language server in your editor
# Or run type checking manually
npx tsc --noEmit
```

#### LocalStorage Issues
- **Data Not Persisting**: Check if browser has localStorage enabled
- **Storage Full**: Browser localStorage has ~5-10MB limit
- **Private Browsing**: Some browsers disable localStorage in private mode

#### Performance Issues
- **Large Dataset**: Consider implementing pagination for 100+ ideas
- **Search Lag**: Search is optimized but very large text blocks may slow filtering

### Getting Help

1. **Check Issues**: Browse [existing issues](https://github.com/nbbaier/bolt-project-idea-tracker/issues)
2. **Create Issue**: Report bugs or request features
3. **Discussions**: Join community discussions for questions

## 🤝 Contributing

We love contributions! Here's how you can help improve Project Idea Tracker:

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

```
MIT License

Copyright (c) 2024 Project Idea Tracker Contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

<div align="center">

**Built with ❤️ using React, TypeScript, and modern web technologies**

[⭐ Star this project](https://github.com/nbbaier/bolt-project-idea-tracker) • [🐛 Report Issues](https://github.com/nbbaier/bolt-project-idea-tracker/issues) • [💬 Discussions](https://github.com/nbbaier/bolt-project-idea-tracker/discussions)

</div>

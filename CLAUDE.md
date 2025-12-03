# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A React + TypeScript application for tracking and managing project ideas with localStorage persistence. Built with Vite, TanStack Query, shadcn/ui, and Tailwind CSS.

## Development Commands

### Core Commands
```bash
npm run dev        # Start development server (Vite)
npm run build      # TypeScript compile + Vite build
npm run preview    # Preview production build
npm run lint       # Run ESLint
```

### Testing
```bash
npm run test       # Run Vitest in watch mode
npm run test:ui    # Run Vitest with interactive UI
```

The test suite uses Vitest with jsdom environment. Test setup is in `src/test/setup.ts`.

## Architecture & Data Flow

### State Management Pattern

This app uses **TanStack Query as a state management layer** over localStorage, simulating an async API:

1. **Storage Layer** (`src/lib/storage.ts`): Pure localStorage CRUD operations
2. **Query Layer** (`src/hooks/useIdeas.ts`): TanStack Query hooks that wrap storage with artificial delays (100-200ms) to simulate API latency
3. **UI Layer**: Components consume query hooks (`useIdeas`, `useCreateIdea`, `useUpdateIdea`, `useDeleteIdea`)

**Important**: All mutations automatically invalidate the `["project-ideas"]` query key to trigger UI updates.

### Data Model

Core types in `src/types/index.ts`:

- `ProjectIdea`: Full idea object with id, timestamps, title, description, tags, priority
- `ProjectIdeaInput`: Create/update payload (no id or timestamps)
- `Priority`: `"low" | "medium" | "high"`
- `FilterOptions`: Search, tag filtering, priority filtering state
- `SortOption`: Various sorting strategies

### Component Architecture

**App.tsx** → Renders either:
- Loading state
- Error state
- `<IdeaList>` with ideas data

**IdeaList.tsx** → Main container managing:
- Search/filter state
- Sorting logic
- Grid layout of `<IdeaCard>` components
- `<AddIdeaCard>` trigger

**IdeaForm.tsx** → Reusable form component using:
- `react-hook-form` with `zod` validation
- Supports both create and edit modes via `initialValues` prop
- Tag management with add/remove UI
- Keyboard shortcuts: Enter to add tag, Cmd/Ctrl+Enter to submit

### Key Patterns

**Forms**: All forms use `react-hook-form` + `@hookform/resolvers` + `zod` for validation

**UI Components**: shadcn/ui components in `src/components/ui/` - these are copied into the project and can be modified

**Styling**: Tailwind CSS with `tailwind-merge` via `cn()` utility in `src/lib/utils.ts`

**Animations**: Framer Motion used for dialog and component animations

**Path Alias**: `@/` maps to `src/` (configured in `vite.config.ts`)

## Important Implementation Details

### localStorage Key
All ideas stored under the key `"project-ideas"` as a JSON array.

### UUID Generation
New ideas use `crypto.randomUUID()` for ID generation.

### Timestamps
- `dateCreated`: Set once on creation
- `dateUpdated`: Updated on every modification
- Both stored as ISO strings

### Query Configuration
TanStack Query client configured with:
- `staleTime: 5 minutes`
- `gcTime: 10 minutes`

### Form Submission
Forms support both button click and Cmd/Ctrl+Enter keyboard shortcut for submission.

### Error Handling
Storage operations wrapped in try/catch. Errors logged to console and thrown for query layer to handle.

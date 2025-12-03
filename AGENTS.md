# Project Guidelines

## Commands
- **Build**: `npm run build` (Type-checks and builds)
- **Lint**: `npm run lint` (ESLint)
- **Test**: `npm run test` (Vitest)
- **Single Test**: `npx vitest <path/to/test>`

## Code Style
- **Framework**: React 18, TypeScript, Vite, Tailwind CSS, TanStack Query.
- **Imports**: Use `import type React` for React. Use `@/` alias for `src` imports. Group imports: external, internal.
- **Components**: Functional components preferred. Use `React.FC<Props>` or `function Comp(props: Props)`.
- **Typing**: Strict TypeScript. Use `interface` for object shapes, `type` for unions/aliases.
- **Naming**: PascalCase for components and files. camelCase for functions and variables.
- **UI**: Use Shadcn UI components in `@/components/ui`. Use `lucide-react` for icons.
- **Formatting**: Follow Prettier/EditorConfig settings. Tabs seem to be used for indentation.
- **State**: Use TanStack Query for server state, `useState`/`useReducer` for local state.

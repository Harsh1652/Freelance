# Components Directory

This directory contains reusable React components used throughout the application.

## Directory Structure

```
components/
├── ui/              # Basic UI components (buttons, inputs, cards, etc.)
├── layout/          # Layout components (headers, footers, sidebars, etc.)
├── features/        # Feature-specific components
└── shared/          # Shared components used across multiple features
```

## Best Practices

1. Each component should be in its own directory with its related files:
   ```
   Button/
   ├── Button.tsx
   ├── Button.test.tsx
   ├── Button.module.css
   └── index.ts
   ```

2. Use index.ts files to export components for cleaner imports
3. Keep components small and focused on a single responsibility
4. Use TypeScript for all components
5. Include proper prop types and documentation 
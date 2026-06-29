# Tailwind CSS & Shadcn/UI Setup

## Overview
This document outlines the Tailwind CSS and Shadcn/UI configuration added to the project.

## What Was Installed

### Dependencies
```bash
# Production dependencies
npm install clsx tailwind-merge

# Development dependencies
npm install -D tailwindcss postcss autoprefixer tailwindcss-animate
```

## Files Created/Modified

### 1. `tailwind.config.ts`
- Tailwind CSS configuration with shadcn/ui theme variables
- Content paths configured for all components
- Dark mode support
- Custom color variables using CSS custom properties

### 2. `postcss.config.mjs`
- PostCSS configuration for Tailwind CSS processing
- Autoprefixer for browser compatibility

### 3. `tsconfig.json` (Modified)
- Added path aliases: `@/*` points to project root
- Enables absolute imports (e.g., `@/components/ui/button`)

### 4. `app/global.css` (Modified)
- Added Tailwind directives at the top:
  - `@tailwind base`
  - `@tailwind components`
  - `@tailwind utilities`
- Added shadcn/ui CSS variables for theming
- Light and dark mode color schemes

### 5. `lib/utils.ts`
- Utility function `cn()` for merging Tailwind classes
- Uses `clsx` and `tailwind-merge` for optimal class handling

### 6. `components.json`
- Shadcn/UI configuration file
- Defines component paths and aliases
- Specifies Tailwind config and CSS file locations

## Path Aliases Configuration

The following aliases are now available:

- `@/components` → `./components`
- `@/lib` → `./lib`
- `@/utils` → `./lib/utils`
- `@/ui` → `./components/ui`
- `@/hooks` → `./hooks`

## Usage Examples

### Using Tailwind Classes
```tsx
<div className="flex items-center justify-center p-4 bg-blue-500">
  <h1 className="text-2xl font-bold text-white">Hello</h1>
</div>
```

### Using the cn() Utility
```tsx
import { cn } from "@/lib/utils";

<button className={cn(
  "px-4 py-2 rounded-lg",
  isActive && "bg-blue-500",
  disabled && "opacity-50"
)}>
  Click me
</button>
```

### Installing Shadcn Components
Now you can install shadcn/ui components:

```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add dialog
# etc.
```

## Theme Configuration

### CSS Variables
The project uses CSS variables for theming, defined in `app/global.css`:

- `--background`, `--foreground`
- `--primary`, `--secondary`
- `--muted`, `--accent`
- `--destructive`
- `--border`, `--input`, `--ring`
- Dark mode variants

### Customizing Colors
Edit the CSS variables in `app/global.css` under `:root` and `.dark` to customize the theme.

## Next Steps

1. **Install Shadcn Components**: Use `npx shadcn@latest add [component]` to add UI components
2. **Create Custom Components**: Build components in `components/ui/` using Tailwind classes
3. **Use Dark Mode**: Add `className="dark"` to the `<html>` tag to enable dark mode

## Compatibility

- ✅ Next.js 15+
- ✅ React 19+
- ✅ TypeScript 5+
- ✅ Tailwind CSS 3+
- ✅ Shadcn/UI latest

## Troubleshooting

### If Tailwind classes don't work:
1. Clear the Next.js cache: `rm -rf .next`
2. Restart the dev server: `npm run dev`

### If path aliases don't work:
1. Restart your IDE/VS Code
2. Check `tsconfig.json` has the `paths` configuration

### If shadcn add fails:
1. Make sure `components.json` exists
2. Verify `lib/utils.ts` exists and has the `cn()` function

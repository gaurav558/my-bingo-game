# Copilot Instructions for Soc Ops (Social Bingo)

## Development Checklist ✅
Before committing changes, **always run**:
```bash
npm run lint   # ESLint validation
npm run build  # TypeScript + Vite build check
npm test       # Vitest unit tests
```

## Quick Facts
React 19 + TypeScript + Vite + Tailwind v4. Social bingo game: find people matching prompts, get 5-in-a-row to win.

## Architecture
- **State**: Single `useBingoGame` hook centralizes ALL logic. Components are presentational only.
- **Persistence**: localStorage with versioned validation (`STORAGE_VERSION`). SSR guards via `typeof window === 'undefined'`.
- **Pure functions**: All game logic in `src/utils/bingoLogic.ts` (Fisher-Yates shuffle, immutable updates, 12 winning lines).

## Critical Patterns
**Bingo detection** uses `queueMicrotask` in `handleSquareClick` to avoid sync setState warnings - this is intentional.

**Board generation**: 5x5 grid, center index 12 is FREE_SPACE (always marked). Requires exactly 24 questions from `src/data/questions.ts`.

**Styling**: Tailwind v4 `@theme` directive in `index.css` for custom colors (`--color-marked`, `--color-marked-border`).

## Design Guide ☕
**Theme**: Cozy Coffee Shop

**Color Palette**
- Espresso: `#2c1810` (deep brown backgrounds, rich depth)
- Mocha: `#4a2c1a` (secondary browns)
- Coffee: `#6f4e37` (main coffee color)
- Latte: `#d4a574` (warm backgrounds)
- Caramel: `#c8a882` (marked squares)
- Cream: `#f5f0e8` (paper texture)
- Crema: `#e8b86d` (golden accents)

**Typography**
- Headings: Playfair Display (elegant serif, artisanal cafe feel)
- Body: Quicksand (friendly rounded sans-serif)
- Accents: Caveat (handwritten, coffee shop chalkboard style)

**Visual Elements**
- Steam animations (wiggling opacity shifts)
- Coffee coaster-styled bingo squares with subtle textures
- Rich gradients for depth and warmth
- Winning squares glow golden (crema color)
- Paper-textured cards with coffee stain rings
- Wooden coffee table aesthetic for board frame

**Component Themes**
- StartScreen: Coffee shop entrance with steam wisps
- BingoSquare: Cream paper coasters with caramel marked state
- BingoModal: Premium reward card with coffee mist backdrop
- Free space: Handwritten "FREE" with Caveat font

**Animations**
- Steam wisps: Subtle wiggle and opacity changes
- Buttons: Lift on hover with smooth shadows
- Modal: Slide-up entry with backdrop blur
- Winning squares: Golden pulsing glow
- Coffee beans: Gentle rotation

## Testing
Vitest with jsdom. Mock `Math.random` when testing board generation. Tests co-located: `*.test.ts`.

## Deployment
Auto-deploys to GitHub Pages on `main` push. Base path via `VITE_REPO_NAME` env var.

## Gotchas
- Never mutate board arrays (always spread/map)
- Center square is index 12, not 13 (0-indexed)
- Don't "fix" queueMicrotask to direct setState
- localStorage wrapped in try/catch (fails in private browsing)

# Coffee Shop Theme - Design Specification

**Project**: Soc Ops (Social Bingo) - Cozy Coffee Shop Redesign  
**Date**: January 5, 2026  
**Goal**: Transform the social bingo game into a warm, inviting coffee shop experience

---

## Design Philosophy

Create an immersive coffee shop atmosphere where users feel like they're playing bingo in their favorite cozy cafe. The design should evoke:
- Warmth and comfort
- Artisanal craft and quality
- Social connection
- Relaxed, playful energy

---

## Color Palette

### Primary Colors (Coffee-Inspired)
- **Deep Espresso**: `#2C1810` - Dark chocolate brown for text and accents
- **Rich Coffee**: `#4A2C1A` - Medium roast brown for primary UI
- **Warm Mocha**: `#6F4E37` - Coffee bean brown for interactive elements
- **Café Latte**: `#C8A882` - Creamy beige for backgrounds
- **Steamed Milk**: `#F5EDE0` - Light cream for cards and highlights
- **Foam White**: `#FAF7F2` - Off-white for base backgrounds

### Accent Colors
- **Cinnamon**: `#D2691E` - For warm highlights
- **Caramel**: `#D9A566` - For marked squares
- **Golden Crema**: `#E8B864` - For winning/bingo states
- **Mint Leaf**: `#98C9A3` - Subtle accent for fresh touches

---

## Typography

### Font Selection
Moving away from system fonts to create distinctive coffee shop character:

- **Display/Headings**: "Playfair Display" or "Merriweather" (serif, elegant)
  - Evokes handwritten cafe menu boards and artisanal craft
  - Fallback: Georgia, serif
  
- **Body Text**: "Quicksand" or "Nunito" (rounded sans-serif)
  - Friendly, approachable, warm
  - Fallback: system-ui

- **Accent/Special**: "Caveat" or "Indie Flower" (handwritten)
  - For playful elements like "FREE" square
  - Evokes chalkboard menus

### Scale
- Display: 2.5rem (40px)
- H1: 2rem (32px)
- H2: 1.5rem (24px)
- Body: 0.875rem (14px)
- Small: 0.75rem (12px)

---

## Component Design Decisions

### StartScreen
**Theme**: Coffee shop entrance with welcoming ambiance
- Background: Subtle coffee bean pattern or gradient (espresso → latte)
- Title treatment: Large serif display with steam-like decorative elements
- Card: Elevated, paper-textured appearance like a menu board
- CTA Button: Rich coffee brown with hover lift effect
- Decorative elements: Coffee cup icon, steam wisps, or bean scatter

### GameScreen
**Theme**: Cozy table view in a cafe
- Background: Warm wood grain texture or muted café wall color
- Header: Coffee shop menu bar aesthetic with wooden texture
- Instructions: Handwritten-style font on cream background
- Bingo indicator: Celebratory coffee cup confetti or golden banner

### BingoBoard
**Theme**: Grid of coffee coasters or table tiles
- Grid gap: 0.375rem (6px) for breathing room
- Overall container: Subtle shadow suggesting depth on table
- Border: Rich coffee brown frame

### BingoSquare
**Theme**: Interactive coffee coasters
- Unmarked: Cream/beige with subtle texture, soft shadow
- Marked: Caramel color with checkmark stamp effect
- Winning: Golden crema glow with pulsing animation
- Free space: Special coffee cup icon or handwritten "FREE"
- Hover: Gentle lift with shadow increase
- Click: Satisfying stamp-down effect

### BingoModal
**Theme**: Victory celebration like receiving a reward card
- Backdrop: Warm semi-transparent brown (coffee mist)
- Card: Premium cream paper with coffee stain ring decoration
- Icon: Coffee cup raising toast or confetti beans
- Typography: Elegant serif celebration text in golden brown

---

## Animations & Micro-interactions

### Transitions
- Button hover: `transform: translateY(-2px)` + shadow increase (150ms)
- Square click: Scale down then up (stamp effect, 200ms)
- Winning squares: Subtle pulse glow (1.5s infinite)
- Modal entry: Bounce with slight rotation (500ms ease-out)

### Effects
- Steam wisp SVG animation on start screen
- Coffee stain rings as decorative backgrounds
- Particle confetti (coffee beans) on bingo win
- Gentle parallax on scroll/tilt (optional enhancement)

---

## Visual Elements & Textures

### Patterns
- Coffee bean scatter (subtle, low opacity)
- Wood grain texture for backgrounds
- Paper texture for cards
- Linen/canvas texture for squares

### Icons & Illustrations
- Coffee cup for logo/branding
- Steam wisps as decorative elements
- Checkmark as coffee bean stamp
- Confetti using coffee bean shapes

### Shadows & Depth
- Cards: `box-shadow: 0 4px 6px rgba(44, 24, 16, 0.1)`
- Elevated elements: `0 8px 16px rgba(44, 24, 16, 0.15)`
- Inset for pressed states: `inset 0 2px 4px rgba(44, 24, 16, 0.2)`

---

## Implementation Strategy

### Iteration 1: Foundation (Color System)
- [ ] Update `@theme` directive in index.css with coffee palette
- [ ] Add custom CSS properties for textures/patterns
- [ ] Test color contrast for accessibility

### Iteration 2: Typography
- [ ] Import Google Fonts (Playfair Display, Quicksand, Caveat)
- [ ] Update font-family declarations in theme
- [ ] Apply to all components

### Iteration 3: StartScreen Redesign
- [ ] Background treatment (gradient or pattern)
- [ ] Title styling with decorative elements
- [ ] Card redesign with texture
- [ ] Button transformation

### Iteration 4: GameScreen & Board
- [ ] Header coffee shop menu bar styling
- [ ] Background texture/gradient
- [ ] Board container frame styling
- [ ] Instructions text treatment

### Iteration 5: BingoSquare States
- [ ] Base coaster styling with texture
- [ ] Marked state with stamp effect
- [ ] Winning glow animation
- [ ] Free space special treatment
- [ ] Hover and click interactions

### Iteration 6: BingoModal Victory
- [ ] Backdrop coffee mist effect
- [ ] Card paper texture and stain decoration
- [ ] Icon replacement (coffee cup)
- [ ] Typography and color updates
- [ ] Entry animation enhancement

### Iteration 7: Polish & Refinement
- [ ] Add decorative SVG elements
- [ ] Fine-tune animations
- [ ] Responsive adjustments
- [ ] Cross-browser testing
- [ ] Performance optimization

---

## Notes & Decisions

### Implementation Progress

**✅ Iteration 1: Foundation (Color System & Typography) - COMPLETE**
- [x] Updated `@theme` directive in index.css with coffee palette
- [x] Added custom CSS properties for coffee colors (espresso, mocha, latte, caramel, crema)
- [x] Imported Google Fonts: Playfair Display (serif), Quicksand (rounded sans), Caveat (handwritten)
- [x] Set up font-family CSS variables and applied to body
- [x] Added subtle coffee bean background pattern with radial gradients

**✅ Iteration 2-6: Complete Component Redesign - COMPLETE**

All components have been transformed with the coffee shop aesthetic:

**StartScreen**:
- Rich coffee gradient background (espresso → mocha → espresso)
- Animated steam wisps using CSS wiggle animation
- Large coffee cup emoji with bounce animation
- "Social Bingo Café" handwritten subtitle using Caveat font
- Paper-textured "How to Play" card with coffee bean bullets
- "Start Brewing" button with gradient hover lift effect
- Decorative rotating coffee beans in corners

**GameScreen**:
- Warm latte-to-milk gradient background
- Coffee shop menu bar header with wood grain gradient
- Handwritten instructions using Caveat font
- Golden celebration banner for bingo wins with pulse animation
- Smooth transitions and hover effects on back button

**BingoBoard**:
- Wooden coffee table frame with gradient (dark → medium roast)
- Thick espresso-colored border (4px)
- Inner latte-colored divider grid
- Deep shadow for table depth
- Rounded corners for cozy feel

**BingoSquare**:
- Coffee coaster aesthetic with cream paper background
- Subtle paper texture overlay (SVG noise filter)
- Marked squares: Caramel color with coffee bean stamp checkmark
- Winning squares: Golden crema with animated glow effect
- Free space: Gradient gold with handwritten font + coffee stain ring
- Hover: Gentle lift with shadow increase
- Responsive text sizing (Quicksand font)

**BingoModal**:
- Warm coffee mist backdrop (mocha with blur)
- Premium cream paper card with caramel border
- Coffee stain ring decorations in corners
- Coffee cup emoji celebration with bounce
- "BINGO!" in elegant Playfair Display
- Handwritten victory message using Caveat
- Gradient button (mocha → cinnamon) with lift effect
- Smooth slide-up entry animation

**Animations Added**:
- `wiggle`: Steam wisp movement (3s infinite)
- `glow`: Winning square golden pulsing (1.5s infinite)
- `fadeIn`: Modal backdrop appearance (0.3s)
- `slideUp`: Modal card entry (0.5s)
- Built-in: bounce, pulse, spin (Tailwind utilities)

**Decision Log**:
- Initial spec created focusing on rich, distinctive coffee shop aesthetic
- Chosen Playfair Display for elegant, artisanal feel vs. generic sans-serifs
- Color palette based on actual coffee tones (espresso, mocha, latte) for authenticity
- **NEW**: Fixed CSS @import order (fonts before Tailwind) to resolve build warning
- **NEW**: All interactive elements have satisfying hover/click feedback
- **NEW**: Winning states use golden crema color with glow animation
- **NEW**: Handwritten Caveat font used strategically for playful, cafe menu board feel
- **NEW**: Paper textures and coffee stain rings add authentic coffee shop details
- **NEW**: All components maintain existing functionality while completely transforming visuals


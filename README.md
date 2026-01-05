<div align="center">

# 🎯 Soc Ops

### Break the Ice with Social Bingo!

*Turn any mixer, meetup, or team event into an interactive experience*

[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)

[🎮 Play Now](https://gaurav558.github.io/my-bingo-game/) • [📖 Lab Guide](.lab/GUIDE.md) • [🤝 Contributing](CONTRIBUTING.md)

</div>

---

## ✨ What is Soc Ops?

**Soc Ops** is a social bingo game designed to help people connect at in-person events. Instead of numbers, your bingo card is filled with conversation starters like "has lived in another country" or "speaks more than 2 languages." 

**Your mission:** Mingle with others, find people who match each prompt, and be the first to get **5 in a row** (horizontal, vertical, or diagonal) to win! 🏆

### 🎯 Perfect For

- 🏢 **Team building events** - Help new team members break the ice
- 🎓 **Workshops & conferences** - Energize networking sessions
- 🎉 **Social mixers** - Make meeting new people fun and purposeful
- 👥 **Community meetups** - Create meaningful connections

---

## 🚀 Features

✅ **Randomized boards** - Every player gets a unique card  
✅ **Mobile-friendly** - Play on any device  
✅ **Instant bingo detection** - Automatic win celebration  
✅ **Persistent state** - Resume your game anytime  
✅ **Customizable prompts** - Tailor questions to your event  
✅ **No backend required** - Runs entirely in the browser  

---

## 🎮 How to Play

1. **📱 Open the game** on your mobile device or laptop
2. **👋 Start mingling** and introduce yourself to others
3. **💬 Ask questions** to find people matching the prompts
4. **✅ Mark squares** when you find a match
5. **🎉 Get BINGO!** Complete 5 in a row and celebrate!

> **Pro tip:** The center square is a FREE SPACE - it's already marked! 🎁

---

## 🛠️ Quick Start

### Prerequisites

- [Node.js 22](https://nodejs.org/) or higher

### Installation & Development

```bash
# Clone the repository
git clone https://github.com/gaurav558/my-bingo-game.git
cd my-bingo-game

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to see your game! 🎉

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder, ready to deploy.

### Deployment

This project auto-deploys to **GitHub Pages** on every push to `main`. Your live game will be available at:
```
https://YOUR_USERNAME.github.io/my-bingo-game/
```

---

## 🎨 Customization

Want to customize the bingo prompts for your event? It's easy!

1. **Edit questions:** Open `src/data/questions.ts`
2. **Modify the array:** Add, remove, or change prompts (keep exactly 24 items)
3. **Save & reload:** Your changes appear instantly in dev mode

**Example:**
```typescript
export const questions: string[] = [
  "has attended 3+ conferences this year",
  "contributes to open source",
  "has a homelab setup",
  // ... add 21 more!
];
```

👉 **[See full customization guide](.lab/GUIDE.md)** for themes, colors, and advanced options.

---

## 🧪 Development

### Code Quality

```bash
npm run lint    # ESLint validation
npm test        # Vitest unit tests
npm run build   # TypeScript + Vite build check
```

### Tech Stack

- **React 19** - Modern UI with hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Utility-first styling with `@theme` directive
- **Vite** - Lightning-fast dev server
- **Vitest** - Unit testing
- **GitHub Pages** - Free hosting

---

## 📸 Screenshots

*Coming soon! The game features a clean, mobile-responsive design with smooth animations.*

---

## 🤝 Contributing

We love contributions! Whether it's:
- 🐛 Bug fixes
- ✨ New features  
- 📝 Documentation improvements
- 🎨 UI/UX enhancements

Please check our [Contributing Guide](CONTRIBUTING.md) and [Code of Conduct](CODE_OF_CONDUCT.md).

---

## 📄 License

MIT © [gaurav558](https://github.com/gaurav558)

---

## 💬 Support

- 📖 [Read the docs](.lab/GUIDE.md)
- 🐛 [Report a bug](https://github.com/gaurav558/my-bingo-game/issues)
- 💡 [Request a feature](https://github.com/gaurav558/my-bingo-game/issues)
- 💬 [Join discussions](https://github.com/gaurav558/my-bingo-game/discussions)

---

<div align="center">

**Made with ❤️ for building connections**

*Star ⭐ this repo if you find it useful!*

</div>

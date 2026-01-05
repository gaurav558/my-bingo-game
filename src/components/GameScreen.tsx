import type { BingoSquareData } from '../types';
import { BingoBoard } from './BingoBoard';

interface GameScreenProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  hasBingo: boolean;
  onSquareClick: (squareId: number) => void;
  onReset: () => void;
}

export function GameScreen({
  board,
  winningSquareIds,
  hasBingo,
  onSquareClick,
  onReset,
}: GameScreenProps) {
  return (
    <div className="flex flex-col min-h-full relative overflow-hidden">
      {/* Ambient gradient orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full opacity-20 blur-3xl"></div>
      
      {/* Glass header */}
      <header className="relative flex items-center justify-between p-4
                         bg-white/10 backdrop-blur-xl
                         border-b border-white/20
                         shadow-[0_4px_16px_0_rgba(31,38,135,0.2)]">
        <button
          onClick={onReset}
          className="text-white text-sm px-5 py-2.5 rounded-xl font-medium
                     bg-white/15 backdrop-blur-sm
                     border border-white/30
                     transition-all duration-300
                     hover:bg-white/25 hover:-translate-x-1 hover:shadow-lg
                     active:translate-x-0"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          ← Back
        </button>
        <h1 className="font-bold text-white text-xl tracking-tight drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]" 
            style={{ fontFamily: 'var(--font-display)' }}>
          Soc Ops
        </h1>
        <div className="w-20"></div>
      </header>

      {/* Glass instructions banner */}
      <div className="relative bg-white/10 backdrop-blur-md border-b border-white/10">
        <p className="text-center text-white/90 text-sm py-3 px-4 font-medium" 
           style={{ fontFamily: 'var(--font-body)' }}>
          Tap a square when you find someone who matches it ✨
        </p>
      </div>

      {/* Bingo celebration banner with glass effect */}
      {hasBingo && (
        <div className="relative bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500
                        text-white text-center py-4 font-bold text-base
                        shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]
                        border-y border-white/30
                        backdrop-blur-sm
                        animate-[pulse_1.5s_ease-in-out_infinite]"
             style={{ fontFamily: 'var(--font-display)' }}>
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
          <span className="relative z-10">🎉 BINGO! You got a line! ✨</span>
        </div>
      )}

      {/* Bingo board container */}
      <div className="flex-1 flex items-center justify-center p-4 relative z-10">
        <BingoBoard
          board={board}
          winningSquareIds={winningSquareIds}
          onSquareClick={onSquareClick}
        />
      </div>
    </div>
  );
}

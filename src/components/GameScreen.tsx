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
    <div className="flex flex-col min-h-full bg-gradient-to-b from-[#C8A882] to-[#F5EDE0]">
      {/* Coffee shop menu bar header */}
      <header className="flex items-center justify-between p-4 bg-gradient-to-r from-[#4A2C1A] to-[#6F4E37] border-b-4 border-[#2C1810] shadow-lg">
        <button
          onClick={onReset}
          className="text-[#F5EDE0] text-sm px-4 py-2 rounded-lg 
                     bg-[#6F4E37] border-2 border-[#C8A882]
                     transition-all duration-200
                     hover:bg-[#D2691E] hover:-translate-x-1
                     active:translate-x-0"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          ← Back
        </button>
        <h1 className="font-bold text-[#FAF7F2] text-xl tracking-wide drop-shadow-md" 
            style={{ fontFamily: 'var(--font-display)' }}>
          Soc Ops Café
        </h1>
        <div className="w-20"></div>
      </header>

      {/* Handwritten instructions on cream paper */}
      <div className="bg-[#F5EDE0] shadow-sm">
        <p className="text-center text-[#4A2C1A] text-sm py-3 px-4" 
           style={{ fontFamily: 'var(--font-hand)', fontSize: '1rem' }}>
          Tap a square when you find someone who matches it ☕
        </p>
      </div>

      {/* Bingo celebration banner */}
      {hasBingo && (
        <div className="bg-gradient-to-r from-[#E8B864] via-[#D9A566] to-[#E8B864] 
                        text-[#2C1810] text-center py-3 font-bold text-base
                        shadow-lg border-y-2 border-[#D2691E]
                        animate-[pulse_1.5s_ease-in-out_infinite]"
             style={{ fontFamily: 'var(--font-display)' }}>
          🎉 BINGO! You got a line! ☕
        </div>
      )}

      {/* Bingo board on cafe table */}
      <div className="flex-1 flex items-center justify-center p-4">
        <BingoBoard
          board={board}
          winningSquareIds={winningSquareIds}
          onSquareClick={onSquareClick}
        />
      </div>
    </div>
  );
}

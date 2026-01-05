import type { BingoSquareData } from '../types';
import { BingoSquare } from './BingoSquare';

interface BingoBoardProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  onSquareClick: (squareId: number) => void;
}

export function BingoBoard({ board, winningSquareIds, onSquareClick }: BingoBoardProps) {
  return (
    <div className="w-full max-w-md mx-auto">
      {/* Glass frame with gradient border */}
      <div className="relative p-1 rounded-3xl bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400">
        {/* Inner glass container */}
        <div className="bg-white/10 backdrop-blur-2xl p-4 rounded-[1.375rem]
                        border border-white/30
                        shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]">
          {/* Bingo grid */}
          <div className="grid grid-cols-5 gap-2 p-2 rounded-2xl aspect-square
                          bg-white/5 backdrop-blur-sm">
            {board.map((square) => (
              <BingoSquare
                key={square.id}
                square={square}
                isWinning={winningSquareIds.has(square.id)}
                onClick={() => onSquareClick(square.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

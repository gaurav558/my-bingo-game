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
      {/* Wooden coffee table frame */}
      <div className="bg-gradient-to-br from-[#4A2C1A] to-[#6F4E37] p-4 rounded-3xl shadow-2xl border-4 border-[#2C1810]">
        {/* Inner bingo grid */}
        <div className="grid grid-cols-5 gap-1.5 p-2 bg-[#C8A882] rounded-2xl aspect-square">
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
  );
}

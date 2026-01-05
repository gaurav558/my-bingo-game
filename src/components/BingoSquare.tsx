import type { BingoSquareData } from '../types';

interface BingoSquareProps {
  square: BingoSquareData;
  isWinning: boolean;
  onClick: () => void;
}

export function BingoSquare({ square, isWinning, onClick }: BingoSquareProps) {
  const baseClasses =
    'relative flex items-center justify-center p-2 text-center rounded-lg ' +
    'transition-all duration-200 select-none min-h-[60px] leading-tight ' +
    'border-2 shadow-md';

  const stateClasses = square.isMarked
    ? isWinning
      ? 'bg-[#E8B864] border-[#D2691E] text-[#2C1810] shadow-lg shadow-[#E8B864]/50 ' +
        'animate-[glow_1.5s_ease-in-out_infinite]'
      : 'bg-[#D9A566] border-[#C8A882] text-[#2C1810] shadow-md'
    : 'bg-[#FAF7F2] border-[#C8A882] text-[#4A2C1A] shadow-sm ' +
      'hover:bg-[#F5EDE0] hover:shadow-lg hover:-translate-y-0.5 ' +
      'active:translate-y-0 active:shadow-sm';

  const freeSpaceClasses = square.isFreeSpace 
    ? 'font-bold text-base bg-gradient-to-br from-[#E8B864] to-[#D9A566] border-[#D2691E]' 
    : 'text-xs';

  return (
    <button
      onClick={onClick}
      disabled={square.isFreeSpace}
      className={`${baseClasses} ${stateClasses} ${freeSpaceClasses}`}
      style={{ fontFamily: square.isFreeSpace ? 'var(--font-hand)' : 'var(--font-body)' }}
      aria-pressed={square.isMarked}
      aria-label={square.isFreeSpace ? 'Free space' : square.text}
    >
      {/* Paper texture overlay */}
      {!square.isFreeSpace && (
        <div className="absolute inset-0 rounded-lg opacity-30 pointer-events-none"
             style={{
               backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence baseFrequency=\'0.9\' numOctaves=\'4\'/%3E%3C/filter%3E%3Crect width=\'100\' height=\'100\' filter=\'url(%23noise)\' opacity=\'0.05\'/%3E%3C/svg%3E")',
             }}
        ></div>
      )}
      
      <span className="relative z-10 wrap-break-word hyphens-auto font-medium">
        {square.text}
      </span>
      
      {/* Coffee bean stamp checkmark */}
      {square.isMarked && !square.isFreeSpace && (
        <span className="absolute -top-1 -right-1 text-[#6F4E37] text-base bg-[#F5EDE0] rounded-full w-5 h-5 flex items-center justify-center border-2 border-[#6F4E37] font-bold shadow-sm">
          ✓
        </span>
      )}
      
      {/* Coffee stain ring for free space */}
      {square.isFreeSpace && (
        <div className="absolute inset-0 rounded-lg border-4 border-[#4A2C1A] opacity-20 pointer-events-none"></div>
      )}
    </button>
  );
}

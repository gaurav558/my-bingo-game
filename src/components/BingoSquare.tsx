import type { BingoSquareData } from '../types';

interface BingoSquareProps {
  square: BingoSquareData;
  isWinning: boolean;
  onClick: () => void;
}

export function BingoSquare({ square, isWinning, onClick }: BingoSquareProps) {
  const baseClasses =
    'relative flex items-center justify-center p-2 text-center rounded-xl ' +
    'transition-all duration-300 select-none min-h-[60px] leading-tight ';

  const stateClasses = square.isMarked
    ? isWinning
      ? 'bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 text-white ' +
        'border border-white/40 backdrop-blur-sm ' +
        'shadow-[0_0_20px_rgba(249,147,251,0.6)] ' +
        'animate-[glassGlow_1.5s_ease-in-out_infinite]'
      : 'bg-white/30 backdrop-blur-md text-white ' +
        'border border-white/40 ' +
        'shadow-[0_4px_16px_0_rgba(31,38,135,0.2)]'
    : 'bg-white/15 backdrop-blur-md text-white/90 ' +
      'border border-white/30 ' +
      'shadow-[0_4px_16px_0_rgba(31,38,135,0.15)] ' +
      'hover:bg-white/25 hover:shadow-[0_4px_20px_0_rgba(31,38,135,0.25)] hover:scale-105 ' +
      'active:scale-100 active:shadow-[0_4px_16px_0_rgba(31,38,135,0.15)]';

  const freeSpaceClasses = square.isFreeSpace 
    ? 'font-extrabold text-lg bg-gradient-to-br from-yellow-300 via-pink-300 to-purple-300 text-purple-900 border-white/50' 
    : 'text-xs font-semibold';

  return (
    <button
      onClick={onClick}
      disabled={square.isFreeSpace}
      className={`${baseClasses} ${stateClasses} ${freeSpaceClasses}`}
      style={{ fontFamily: 'var(--font-body)' }}
      aria-pressed={square.isMarked}
      aria-label={square.isFreeSpace ? 'Free space' : square.text}
    >
      {/* Subtle gradient overlay */}
      {!square.isFreeSpace && (
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/10 to-transparent opacity-50 pointer-events-none"></div>
      )}
      
      <span className="relative z-10 wrap-break-word hyphens-auto">
        {square.text}
      </span>
      
      {/* Glass checkmark badge */}
      {square.isMarked && !square.isFreeSpace && (
        <span className="absolute -top-1.5 -right-1.5 text-white text-sm
                         bg-gradient-to-br from-green-400 to-emerald-500
                         rounded-full w-6 h-6 flex items-center justify-center
                         border-2 border-white/60 font-bold
                         shadow-[0_4px_16px_0_rgba(16,185,129,0.4)]">
          ✓
        </span>
      )}
      
      {/* Sparkle effect for free space */}
      {square.isFreeSpace && (
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-transparent pointer-events-none"></div>
      )}
    </button>
  );
}

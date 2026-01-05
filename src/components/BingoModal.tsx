interface BingoModalProps {
  onDismiss: () => void;
}

export function BingoModal({ onDismiss }: BingoModalProps) {
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-lg flex items-center justify-center p-4 z-50 animate-[fadeIn_0.3s_ease-out]">
      <div className="relative max-w-sm w-full text-center animate-[slideUp_0.5s_ease-out]">
        {/* Gradient border wrapper */}
        <div className="p-1 rounded-3xl bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400">
          {/* Glass modal content */}
          <div className="bg-white/20 backdrop-blur-2xl rounded-[1.375rem] p-10
                          border border-white/30
                          shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]
                          relative overflow-hidden">
            
            {/* Decorative gradient orbs */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full opacity-30 blur-2xl"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-br from-blue-300 to-cyan-300 rounded-full opacity-30 blur-2xl"></div>
            
            {/* Content */}
            <div className="relative z-10">
              {/* Trophy icon with glass effect */}
              <div className="inline-block mb-6 p-4 rounded-3xl
                              bg-white/20 backdrop-blur-sm
                              border border-white/40
                              shadow-[0_4px_16px_0_rgba(31,38,135,0.2)]
                              animate-[float_3s_ease-in-out_infinite]">
                <div className="text-7xl">🏆</div>
              </div>
              
              <h2 className="text-6xl font-extrabold text-white mb-4 drop-shadow-[0_0_30px_rgba(255,255,255,0.5)]" 
                  style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }}>
                BINGO!
              </h2>
              
              <p className="text-white/95 mb-2 text-xl font-semibold" 
                 style={{ fontFamily: 'var(--font-body)' }}>
                You completed a line!
              </p>
              
              <p className="text-white/80 text-base mb-8 font-medium" 
                 style={{ fontFamily: 'var(--font-body)' }}>
                Amazing work! ✨
              </p>
              
              <button
                onClick={onDismiss}
                className="group relative w-full overflow-hidden
                           bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500
                           text-white font-bold py-4 px-6 rounded-2xl text-lg
                           shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]
                           border border-white/30
                           transition-all duration-300
                           hover:shadow-[0_8px_40px_0_rgba(102,126,234,0.6)] hover:scale-[1.02] hover:-translate-y-1
                           active:translate-y-0 active:scale-100"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {/* Glass overlay on hover */}
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">Keep Playing ✨</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

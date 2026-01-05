interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-full p-6 relative overflow-hidden">
      {/* Floating gradient orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-30 blur-3xl animate-[float_6s_ease-in-out_infinite]"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full opacity-25 blur-3xl animate-[float_8s_ease-in-out_infinite]" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-pink-300 to-purple-400 rounded-full opacity-20 blur-3xl animate-[float_10s_ease-in-out_infinite]" style={{ animationDelay: '4s' }}></div>
      
      {/* Content */}
      <div className="text-center max-w-lg relative z-10">
        {/* Glass icon container */}
        <div className="mb-8 inline-block p-6 rounded-3xl
                        bg-white/10 backdrop-blur-xl
                        border border-white/30
                        shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]
                        animate-[float_4s_ease-in-out_infinite]">
          <div className="text-7xl">✨</div>
        </div>
        
        <h1 className="text-6xl font-extrabold text-white mb-3 drop-shadow-[0_0_30px_rgba(255,255,255,0.5)]" 
            style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }}>
          Soc Ops
        </h1>
        <p className="text-2xl text-white/90 mb-10 font-medium tracking-wide"
           style={{ fontFamily: 'var(--font-body)' }}>
          Social Bingo
        </p>
        
        {/* Glass card - How to play */}
        <div className="bg-white/15 backdrop-blur-xl rounded-3xl p-8 mb-8
                        border border-white/30
                        shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]
                        transform transition-all duration-500
                        hover:bg-white/20 hover:scale-[1.02] hover:shadow-[0_8px_40px_0_rgba(31,38,135,0.5)]">
          <h2 className="font-bold text-white mb-6 text-xl" 
              style={{ fontFamily: 'var(--font-display)' }}>
            How to Play
          </h2>
          <ul className="text-left text-white/90 text-base space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-2xl">✨</span>
              <span className="pt-1">Find people who match the questions</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">🎯</span>
              <span className="pt-1">Tap a square when you find a match</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">🏆</span>
              <span className="pt-1">Get 5 in a row to win!</span>
            </li>
          </ul>
        </div>

        {/* Glass button with gradient */}
        <button
          onClick={onStart}
          className="group relative w-full overflow-hidden
                     bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500
                     text-white font-bold py-5 px-8 rounded-2xl text-lg
                     shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]
                     border border-white/30
                     transition-all duration-300
                     hover:shadow-[0_8px_40px_0_rgba(102,126,234,0.6)] hover:scale-[1.02] hover:-translate-y-1
                     active:translate-y-0 active:scale-100"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {/* Glass overlay */}
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <span className="relative z-10">Start Game ✨</span>
        </button>
      </div>
      
      {/* Decorative glass orbs */}
      <div className="absolute top-1/4 right-12 w-4 h-4 rounded-full bg-white/40 backdrop-blur-sm border border-white/60 animate-[float_5s_ease-in-out_infinite]"></div>
      <div className="absolute top-1/3 left-20 w-3 h-3 rounded-full bg-white/30 backdrop-blur-sm border border-white/50 animate-[float_7s_ease-in-out_infinite]" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/4 left-16 w-5 h-5 rounded-full bg-white/35 backdrop-blur-sm border border-white/55 animate-[float_6s_ease-in-out_infinite]" style={{ animationDelay: '3s' }}></div>
    </div>
  );
}

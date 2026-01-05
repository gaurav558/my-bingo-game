interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-full p-6 relative overflow-hidden">
      {/* Coffee shop atmosphere - warm gradients */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#6f4e37] rounded-full opacity-20 blur-3xl animate-[float_6s_ease-in-out_infinite]"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#e8b86d] rounded-full opacity-15 blur-3xl animate-[float_8s_ease-in-out_infinite]" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#d4a574] rounded-full opacity-12 blur-3xl animate-[float_10s_ease-in-out_infinite]" style={{ animationDelay: '4s' }}></div>
      
      {/* Steam wisps */}
      <div className="absolute top-[15%] left-[45%] w-16 h-32 bg-gradient-to-t from-white/20 to-transparent rounded-full blur-sm animate-[steam_4s_ease-in-out_infinite]"></div>
      <div className="absolute top-[15%] left-[48%] w-12 h-28 bg-gradient-to-t from-white/15 to-transparent rounded-full blur-sm animate-[steam_5s_ease-in-out_infinite]" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-[15%] left-[52%] w-14 h-30 bg-gradient-to-t from-white/18 to-transparent rounded-full blur-sm animate-[steam_4.5s_ease-in-out_infinite]" style={{ animationDelay: '2s' }}></div>
      
      {/* Content */}
      <div className="text-center max-w-lg relative z-10">
        {/* Coffee cup icon with steam */}
        <div className="mb-6 inline-block p-6 rounded-full
                        bg-[#f5f0e8] 
                        shadow-[0_8px_20px_rgba(44,24,16,0.3),inset_0_2px_4px_rgba(255,255,255,0.5),inset_0_-2px_4px_rgba(0,0,0,0.1)]
                        animate-[float_4s_ease-in-out_infinite]
                        relative">
          <div className="text-7xl">☕</div>
          {/* Steam from cup */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-8 h-16 bg-gradient-to-t from-white/30 to-transparent rounded-full blur-sm animate-[steam_3s_ease-in-out_infinite]"></div>
        </div>
        
        <h1 className="text-6xl font-extrabold text-[#2c1810] mb-3 drop-shadow-[0_2px_8px_rgba(232,184,109,0.4)]" 
            style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }}>
          Soc Ops
        </h1>
        <p className="text-2xl text-[#4a2c1a] mb-10 font-medium tracking-wide"
           style={{ fontFamily: 'var(--font-accent)', fontSize: '1.75rem' }}>
          Social Bingo
        </p>
        
        {/* Paper card with coffee stain effect - How to play */}
        <div className="bg-[#f5f0e8] rounded-2xl p-8 mb-8
                        shadow-[0_4px_20px_rgba(44,24,16,0.2),inset_0_1px_2px_rgba(255,255,255,0.8)]
                        transform transition-all duration-500
                        hover:scale-[1.02] hover:shadow-[0_6px_30px_rgba(44,24,16,0.3)]
                        relative
                        border-2 border-[#c8a882]/30">
          {/* Coffee stain ring decoration */}
          <div className="absolute -top-6 -right-6 w-16 h-16 rounded-full border-4 border-[#c8a882]/20 opacity-50"></div>
          <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full border-4 border-[#d4a574]/30 opacity-60"></div>
          
          <h2 className="font-bold text-[#2c1810] mb-6 text-xl" 
              style={{ fontFamily: 'var(--font-display)' }}>
            How to Play
          </h2>
          <ul className="text-left text-[#4a2c1a] text-base space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-2xl">👥</span>
              <span className="pt-1" style={{ fontFamily: 'var(--font-body)' }}>Find people who match the questions</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <span className="pt-1" style={{ fontFamily: 'var(--font-body)' }}>Tap a square when you find a match</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">🏆</span>
              <span className="pt-1" style={{ fontFamily: 'var(--font-body)' }}>Get 5 in a row to win!</span>
            </li>
          </ul>
        </div>

        {/* Wooden button with coffee gradient */}
        <button
          onClick={onStart}
          className="group relative w-full overflow-hidden
                     bg-gradient-to-r from-[#6f4e37] via-[#8b6239] to-[#6f4e37]
                     text-[#f5f0e8] font-bold py-5 px-8 rounded-2xl text-lg
                     shadow-[0_4px_20px_rgba(44,24,16,0.4),inset_0_1px_2px_rgba(255,255,255,0.2)]
                     border-2 border-[#4a2c1a]/30
                     transition-all duration-300
                     hover:shadow-[0_6px_30px_rgba(232,184,109,0.6),0_0_40px_rgba(232,184,109,0.3)] 
                     hover:scale-[1.02] hover:-translate-y-1
                     active:translate-y-0 active:scale-100
                     animate-[coffeeGlow_3s_ease-in-out_infinite]"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {/* Shine overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <span className="relative z-10">Start Game ☕</span>
        </button>
      </div>
      
      {/* Decorative coffee beans */}
      <div className="absolute top-1/4 right-12 w-4 h-6 rounded-full bg-[#4a2c1a] opacity-40 shadow-md animate-[float_5s_ease-in-out_infinite] transform rotate-12"></div>
      <div className="absolute top-1/3 left-20 w-3 h-5 rounded-full bg-[#6f4e37] opacity-35 shadow-md animate-[float_7s_ease-in-out_infinite] transform -rotate-12" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/4 left-16 w-5 h-7 rounded-full bg-[#4a2c1a] opacity-30 shadow-md animate-[float_6s_ease-in-out_infinite] transform rotate-45" style={{ animationDelay: '3s' }}></div>
      <div className="absolute bottom-1/3 right-20 w-4 h-5 rounded-full bg-[#6f4e37] opacity-38 shadow-md animate-[wiggle_2s_ease-in-out_infinite]"></div>
    </div>
  );
}

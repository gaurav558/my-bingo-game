interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-full p-6 relative overflow-hidden">
      {/* Coffee shop gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#4A2C1A] via-[#6F4E37] to-[#4A2C1A] opacity-95"></div>
      
      {/* Decorative coffee steam animation */}
      <div className="absolute top-20 right-1/4 opacity-20">
        <div className="w-1 h-24 bg-[#F5EDE0] rounded-full animate-[wiggle_3s_ease-in-out_infinite]" 
             style={{ animationDelay: '0s' }}></div>
      </div>
      <div className="absolute top-24 right-[27%] opacity-15">
        <div className="w-1 h-20 bg-[#F5EDE0] rounded-full animate-[wiggle_3s_ease-in-out_infinite]" 
             style={{ animationDelay: '0.5s' }}></div>
      </div>
      
      {/* Content */}
      <div className="text-center max-w-sm relative z-10">
        {/* Coffee cup icon */}
        <div className="mb-6 text-6xl animate-[bounce_2s_ease-in-out_infinite]" 
             style={{ animationDelay: '0.5s' }}>
          ☕
        </div>
        
        <h1 className="text-5xl font-bold text-[#FAF7F2] mb-2 drop-shadow-lg" 
            style={{ fontFamily: 'var(--font-display)' }}>
          Soc Ops
        </h1>
        <p className="text-xl text-[#E8B864] mb-8 tracking-wide" 
           style={{ fontFamily: 'var(--font-hand)' }}>
          Social Bingo Café
        </p>
        
        {/* How to play card - paper texture effect */}
        <div className="bg-[#F5EDE0] rounded-2xl p-6 shadow-2xl border-2 border-[#C8A882] mb-8 transform transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_40px_rgba(44,24,16,0.3)]">
          <h2 className="font-bold text-[#2C1810] mb-4 text-lg" 
              style={{ fontFamily: 'var(--font-display)' }}>
            How to Play
          </h2>
          <ul className="text-left text-[#4A2C1A] text-sm space-y-3">
            <li className="flex items-start gap-2">
              <span className="text-[#D2691E] font-bold">☕</span>
              <span>Find people who match the questions</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#D2691E] font-bold">☕</span>
              <span>Tap a square when you find a match</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#D2691E] font-bold">☕</span>
              <span>Get 5 in a row to win!</span>
            </li>
          </ul>
        </div>

        {/* Start button with coffee shop vibe */}
        <button
          onClick={onStart}
          className="w-full bg-[#6F4E37] text-[#FAF7F2] font-bold py-4 px-8 rounded-xl text-lg 
                     shadow-lg border-2 border-[#4A2C1A]
                     transition-all duration-200 
                     hover:bg-[#D2691E] hover:shadow-2xl hover:-translate-y-1
                     active:translate-y-0 active:shadow-md"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          Start Brewing ☕
        </button>
      </div>
      
      {/* Coffee bean decorations */}
      <div className="absolute bottom-10 left-10 text-4xl opacity-10 animate-[spin_20s_linear_infinite]">🫘</div>
      <div className="absolute top-32 left-16 text-3xl opacity-10 animate-[spin_25s_linear_infinite_reverse]">🫘</div>
      <div className="absolute bottom-32 right-20 text-5xl opacity-10 animate-[spin_30s_linear_infinite]">🫘</div>
    </div>
  );
}

/* Add wiggle animation to index.css later */

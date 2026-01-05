interface BingoModalProps {
  onDismiss: () => void;
}

export function BingoModal({ onDismiss }: BingoModalProps) {
  return (
    <div className="fixed inset-0 bg-[#4A2C1A]/80 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-[fadeIn_0.3s_ease-out]">
      <div className="bg-gradient-to-br from-[#FAF7F2] to-[#F5EDE0] rounded-3xl p-8 max-w-sm w-full text-center 
                      shadow-2xl border-4 border-[#D9A566]
                      animate-[slideUp_0.5s_ease-out]
                      relative overflow-hidden">
        
        {/* Coffee stain ring decoration */}
        <div className="absolute top-4 right-4 w-16 h-16 rounded-full border-4 border-[#C8A882] opacity-30"></div>
        <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full border-4 border-[#C8A882] opacity-20"></div>
        
        {/* Content */}
        <div className="relative z-10">
          {/* Coffee cup celebration */}
          <div className="text-7xl mb-4 animate-[bounce_0.6s_ease-out]">
            ☕
          </div>
          
          <h2 className="text-5xl font-bold text-[#6F4E37] mb-3 drop-shadow-sm" 
              style={{ fontFamily: 'var(--font-display)' }}>
            BINGO!
          </h2>
          
          <p className="text-[#4A2C1A] mb-2 text-lg font-semibold" 
             style={{ fontFamily: 'var(--font-body)' }}>
            You completed a line!
          </p>
          
          <p className="text-[#6F4E37] text-sm mb-6" 
             style={{ fontFamily: 'var(--font-hand)', fontSize: '1.1rem' }}>
            Enjoy your victory brew ☕
          </p>
          
          <button
            onClick={onDismiss}
            className="w-full bg-gradient-to-r from-[#6F4E37] to-[#D2691E] 
                       text-[#FAF7F2] font-bold py-4 px-6 rounded-xl text-lg
                       shadow-lg border-2 border-[#4A2C1A]
                       transition-all duration-200 
                       hover:shadow-2xl hover:-translate-y-1
                       active:translate-y-0 active:shadow-md"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Keep Playing ☕
          </button>
        </div>
      </div>
    </div>
  );
}

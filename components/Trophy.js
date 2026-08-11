export default function Trophy({ className = "w-40 h-56" }) {
  return (
    <div className={`relative flex flex-col items-center ${className}`}>
      <svg viewBox="0 0 120 170" className="w-full h-full drop-shadow-[0_0_25px_rgba(212,160,23,0.35)]">
        <defs>
          <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f2c46d" />
            <stop offset="50%" stopColor="#d4a017" />
            <stop offset="100%" stopColor="#8a640d" />
          </linearGradient>
        </defs>
        <path
          d="M60 5 C40 30 30 55 42 80 C30 90 25 105 35 120 C45 132 55 128 60 118 C65 128 75 132 85 120 C95 105 90 90 78 80 C90 55 80 30 60 5Z"
          fill="url(#goldGrad)"
        />
        <circle cx="60" cy="72" r="14" fill="#0a1628" stroke="#f2c46d" strokeWidth="2" />
        <rect x="48" y="128" width="24" height="14" fill="url(#goldGrad)" />
        <rect x="30" y="142" width="60" height="12" rx="2" fill="url(#goldGrad)" />
        <rect x="20" y="154" width="80" height="10" rx="2" fill="url(#goldGrad)" />
      </svg>
      <div className="-mt-6 bg-navy-950 border border-gold-600/60 rounded px-4 py-1.5 text-center">
        <p className="text-gold-500 font-display font-bold text-xs tracking-widest">GMEA</p>
        <p className="text-gold-400/80 text-[8px] tracking-widest">EXCELLENCE AWARDS</p>
      </div>
    </div>
  );
}

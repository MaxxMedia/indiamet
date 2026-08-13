export default function SideCard({ title, icon, children, className = "" }) {
  return (
    <div className={`rounded-xl border border-gold-600/30 bg-navy-850 p-5 ${className}`}>
      <h3 className="flex items-center gap-2 text-gold-500 font-display font-semibold text-sm tracking-wide mb-3">
        {icon && <span>{icon}</span>}
        {title}
      </h3>
      {children}
    </div>
  );
}

export function CheckItem({ children }) {
  return (
    <li className="flex items-start gap-2 text-sm text-black py-1">
      <span className="text-emerald-400 mt-0.5">✓</span>
      <span>{children}</span>
    </li>
  );
}

export function DateItem({ label, date, last }) {
  return (
    <div className="relative pl-5 pb-4 last:pb-0">
      {!last && <span className="absolute left-[3px] top-3 bottom-0 w-px bg-gold-600/30" />}
      <span className="absolute left-0 top-1 w-2 h-2 rounded-full bg-gold-500" />
      <p className="text-black text-sm font-medium">{label}</p>
      <p className="text-gold-400 text-xs">{date}</p>
    </div>
  );
}

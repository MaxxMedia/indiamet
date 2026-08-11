export default function TrustStrip({ items }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-navy-700 pt-6 mt-10">
      {items.map((item) => (
        <div key={item.label} className="flex items-center gap-3">
          <span className="text-gold-500 text-xl">{item.icon}</span>
          <span className="text-slate-300 text-sm leading-tight">{item.label}</span>
        </div>
      ))}
    </div>
  );
}

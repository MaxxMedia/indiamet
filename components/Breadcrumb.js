import Link from "next/link";

export default function Breadcrumb({ items }) {
  return (
    <nav className="text-xs text-slate-400 flex items-center gap-2 mb-6">
      {items.map((item, i) => (
        <span key={item.label} className="flex items-center gap-2">
          {item.href ? (
            <Link href={item.href} className="hover:text-gold-500 transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className={i === items.length - 1 ? "text-slate-200" : ""}>{item.label}</span>
          )}
          {i < items.length - 1 && <span>›</span>}
        </span>
      ))}
    </nav>
  );
}

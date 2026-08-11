export default function EventBar() {
  return (
    <div className="flex flex-col gap-3 text-sm">
      <div className="flex items-center gap-3">
        <span className="text-gold-500">📅</span>
        <span className="text-slate-200 tracking-wide">23 – 25 APRIL 2027</span>
      </div>
      <div className="flex items-start gap-3">
        <span className="text-gold-500">📍</span>
        <span className="text-slate-200 tracking-wide">
          AUTO CLUSTER EXHIBITION
          <br />
          CENTRE, PUNE, INDIA
        </span>
      </div>
      <div className="border-t border-gold-600/30 pt-3 mt-1">
        <p className="text-slate-100 font-semibold">CELEBRATING EXCELLENCE.</p>
        <p className="text-gold-500 font-semibold">INSPIRING INNOVATION.</p>
      </div>
      <div className="text-gold-500 tracking-[0.3em] text-lg">★ ★ ★</div>
    </div>
  );
}

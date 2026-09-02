'use client';

type PassData = {
  registrationNumber: string;
  qrToken: string;
  name?: string;
  company?: string;
  city?: string;
  state?: string;
  passUrl: string;
  event?: {
    name: string;
    dates: string;
    venue: string;
  };
};

export default function VisitorPassCard({
  pass,
  compact = false
}: {
  pass: PassData;
  compact?: boolean;
}) {
  const initial = (pass.name || 'V').trim().charAt(0).toUpperCase();
  const qrSrc = `https://api.qrserver.com/v1/create-qr-code/?size=280x280&data=${encodeURIComponent(pass.passUrl || pass.qrToken)}`;
  const location = [pass.city, pass.state].filter(Boolean).join(', ');

  return (
    <div className={`mx-auto overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl ${compact ? 'w-full max-w-sm' : 'w-full max-w-md'}`}>
      <div className="bg-gradient-to-r from-[#0092D7] to-[#F37021] px-6 py-3 text-center">
        <p className="text-xs font-bold tracking-[0.25em] text-white">VISITOR PASS</p>
      </div>
      <div className="px-6 py-6 text-center">
        <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#F37021] to-[#0092D7] text-2xl font-bold text-white">
          {initial}
        </div>
        <h3 className="text-xl font-bold text-[#02416E]">{pass.name || 'Visitor'}</h3>
        <p className="text-sm text-slate-500">{pass.company || 'INDIAMET 2027'}</p>
        {location && <p className="mt-1 text-xs text-slate-400">{location}</p>}

        <div className="relative mx-auto mt-5 w-fit rounded-2xl bg-slate-50 p-3">
          <img src={qrSrc} alt="Visitor pass QR code" className="h-48 w-48" />
          <span className="pointer-events-none absolute inset-x-6 top-1/2 h-0.5 -translate-y-1/2 bg-emerald-400/80" />
        </div>
        <p className="mt-3 text-xs font-medium text-slate-500">Scan at entry for instant check-in</p>
        <p className="mt-2 font-mono text-sm font-semibold text-[#0092D7]">{pass.registrationNumber}</p>
        <p className="mt-3 text-xs text-slate-500">
          {pass.event?.name || 'INDIAMET 2027'} · {pass.event?.dates || '23–25 April 2027'}
        </p>
        <p className="text-xs text-slate-400">{pass.event?.venue || 'Auto Cluster Exhibition Centre, Pune'}</p>
        <div className="mt-4 inline-flex rounded-full bg-[#0092D7]/10 px-4 py-1 text-xs font-bold uppercase tracking-wider text-[#0092D7]">
          Visitor
        </div>
      </div>
    </div>
  );
}

export function Field({ label, required, children, className = "" }) {
  return (
    <label className={`flex flex-col gap-1.5 text-sm ${className}`}>
      <span className="text-slate-200 font-medium">
        {label} {required && <span className="text-gold-500">*</span>}
      </span>
      {children}
    </label>
  );
}

export function TextInput({ placeholder, prefix, ...props }) {
  if (prefix) {
    return (
      <div className="flex">
        <span className="flex items-center px-3 rounded-l-md bg-navy-700 border border-r-0 border-navy-600 text-slate-300 text-sm">
          {prefix}
        </span>
        <input
          type="text"
          placeholder={placeholder}
          className="flex-1 rounded-r-md px-3 py-2.5 text-sm"
          {...props}
        />
      </div>
    );
  }
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="rounded-md px-3 py-2.5 text-sm"
      {...props}
    />
  );
}

export function TextArea({ placeholder, rows = 3, ...props }) {
  return (
    <textarea
      placeholder={placeholder}
      rows={rows}
      className="rounded-md px-3 py-2.5 text-sm resize-none"
      {...props}
    />
  );
}

export function Select({ placeholder, options = [], ...props }) {
  return (
    <select defaultValue="" className="rounded-md px-3 py-2.5 text-sm" {...props}>
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
  );
}

export function RadioCard({ name, title, price, note, defaultChecked }) {
  return (
    <label className="cursor-pointer flex flex-col gap-1 rounded-lg border border-navy-600 bg-navy-850 p-3 hover:border-gold-600/60 transition-colors has-[:checked]:border-gold-600 has-[:checked]:bg-navy-700">
      <span className="flex items-center gap-2">
        <input type="radio" name={name} defaultChecked={defaultChecked} className="accent-gold-600" />
        <span className="text-gold-500 text-xs font-bold tracking-wide">{title}</span>
      </span>
      <span className="text-slate-100 font-semibold text-sm">{price}</span>
      <span className="text-slate-400 text-xs">{note}</span>
    </label>
  );
}

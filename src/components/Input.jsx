export default function Input({
  title,
  placeholder,
  id,
  value,
  icon,
  onChange,
  error,
}) {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="mb-2 font-space-mono text-base text-clr-nuetral-500 empty:hidden">
          {title}
        </h2>
        {value <= 0 && (
          <p className="text-sm text-red-500 font-space-mono">{error}</p>
        )}
      </div>
      <div className="relative">
        <input
          className="w-full rounded bg-clr-nuetral-200 px-4 py-1.5 text-right font-space-mono text-clr-nuetral-600 placeholder:text-nuetral-400 focus:outline-clr-primary-400"
          type="text"
          placeholder={placeholder}
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        <img className="absolute left-3 top-3.5" src={icon} alt="" />
      </div>
    </div>
  );
}

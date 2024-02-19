// eslint-disable-next-line react/prop-types
export function InputBox({ label, placehold, onChange }) {
  return (
    <div>
      <div className="text-sm font-medium text-left py-2">{label}</div>
      <input
        onChange={onChange}
        placeholder={placehold}
        className="w-full px-2 py-1 border rounded border-slate-200"
      />
    </div>
  );
}

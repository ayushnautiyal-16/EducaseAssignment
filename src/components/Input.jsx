const style = "border border-light-gray rounded-md w-full h-[40px] px-[15px] focus:outline-none";

export function Input({ label, type, placeholder, required, onChange, value }) {
  return (
    <div className="relative mt-6">
      <label htmlFor={label} className="text-blue text-[13px] absolute top-[-10px] left-[9px] bg-body pl-1 pr-2">
        {label}
        {required && <span className="text-warning">*</span>}
      </label>
      <input
        type={type}
        onChange={onChange}
        id={label}
        placeholder={placeholder}
        className={style}
        required={required}
        value={value}
      />
    </div>
  );
}

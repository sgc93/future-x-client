export const InputField = ({
  value,
  setValue,
  label,
  placeholder,
  type = "text",
  required = true
}: {
  value: string;
  setValue: (v: string) => void;
  label: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}) => {
  return (
    <div className="flex flex-col gap-2">
      <span className="self-start text-n-50">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="bg-n-500 px-2 py-2.5 text-n-50 font-semibold rounded-lg placeholder:text-n-100/50 text-sm transition-all duration-300 outline-none border border-n-400 focus:border focus:border-n-200"
      />
    </div>
  );
};

export default InputField;

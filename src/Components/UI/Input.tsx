import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const Input = ({
  label,
  error,
  icon,
  type ,
  styles,
  ...props
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [inputType, setInputType] = useState(type);

  const togglePassword = () => {
    setShowPassword(!showPassword);
    setInputType(inputType === "password" ? "text" : "password");
  };

  return (
    <div className="w-full">
      {label && (
        <label className="block font-sans text-sm text-gray-500 font-medium mb-1">
          {label}
        </label>
      )}

      <div className="relative">
        {icon && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
            {icon}
          </span>
        )}

        <input
          type={inputType}
          autoComplete="off"
          className={`
            w-full px-4 h-10 rounded-lg border border-gray-300 font-mont
            focus-within:border-green-700 bg-background text-sm text-[#444] placeholder:text-gray-500 placeholder:text-sm
            ${icon ? "pl-10" : ""}
            ${type === "password" ? "pr-10" : ""}
            ${error ? "border-red-500" : "border-gray-300"}
            ${styles}
          `}
          {...props}
        />

        {type === "password" && (
          <button
            type="button"
            onClick={togglePassword}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#444]"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
      </div>

      {error && <p className="mt-1 text-xs font-sans font-medium text-red-500">{error}</p>}
    </div>
  );
};

export default Input;

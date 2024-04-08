/* eslint-disable react/prop-types */
import "../index.css";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

const InputField = ({
  label,
  name,
  placeholder,
  required,
  handleChange,
  value,
  isPassword,
  inputType = "text",
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const getMinLength = (inputType) => {
    if (inputType === "text") return 6;
    if (inputType === "password") return 8;
  };

  return (
    <div className="flex flex-col w-full my-3, space-y-2 relative">
      <label className="text-left font-semibold  text-lg md:text-[20px] mt-6">
        {label}
      </label>
      <div className="relative w-[310px]">
        <input
          required={required}
          className="w-[310px] border rounded-xl md:rounded-md border-slate-600 md:text-black h-12 text-xl pl-3"
          type={!isPassword ? inputType : showPassword ? "text" : "password"}
          name={name}
          placeholder={placeholder}
          onChange={handleChange}
          value={value}
          minLength={getMinLength(inputType)}
        />
        {inputType === "password" && (
          <button
            className="absolute top-1/2 right-[4px] transform -translate-y-1/2 text-gray-500"
            onClick={toggleShowPassword}
            tabIndex={-1}
            type="button"
          >
            {showPassword ? <FiEyeOff /> : <FiEye />}
          </button>
        )}
      </div>
    </div>
  );
};

export default InputField;

import React from "react";
import { FieldErrors, Path, UseFormRegister } from "react-hook-form";

interface IFormValues {
  Name: string;
  Email: string;
  Age: number;
}

const Input = React.forwardRef<
  HTMLInputElement,
  { label: string; errorMsg?: FieldErrors } & ReturnType<
    UseFormRegister<IFormValues>
  >
>(({ onChange, onBlur, name, label, errorMsg }, ref) => {
  const inputClass = errorMsg
    ? "mt-2 rounded-md border border-red-700 bg-red-100 p-2 focus:bg-red-100 focus:outline-none"
    : "mt-2 rounded-md border border-gray-700 bg-gray-100 p-2 focus:border-blue-400 focus:bg-white focus:outline-none";
  return (
    <div className="flex flex-col my-2">
      <label>{label}</label>
      <input
        className={inputClass}
        name={name}
        ref={ref}
        onChange={onChange}
        onBlur={onBlur}
      />
      {errorMsg && errorMsg.message}
    </div>
  );
});

export default Input;

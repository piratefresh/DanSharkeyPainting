import React from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";

// interface InputProps {
//   label: string;
//   name: string;
//   errorMsg?: FieldErrors;
// }

// function FormTextArea({ label, name, errorMsg }: InputProps) {
//   const inputClass = errorMsg
//     ? "mt-2 rounded-md border border-red-700 bg-red-100 p-2 focus:bg-red-100"
//     : "mt-2 rounded-md border border-gray-700 bg-gray-100 p-2 h-full focus:border-blue-400 focus:bg-white focus:outline-none";
//   return (
//     <div className="flex flex-col h-full">
//       <label htmlFor={name} className="text-gray-600 font-semibold">
//         {label}
//       </label>
//       <textarea className={inputClass} placeholder={label} name={name} />
//       {errorMsg && errorMsg.message}
//     </div>
//   );
// }

interface IFormValues {
  Name: string;
  Email: string;
  Age: number;
}

const TextArea = React.forwardRef<
  HTMLTextAreaElement,
  { label: string; errorMsg?: FieldErrors } & ReturnType<
    UseFormRegister<IFormValues>
  >
>(({ onChange, onBlur, name, label, errorMsg }, ref) => {
  const inputClass = errorMsg
    ? "mt-2 rounded-md border border-red-700 bg-red-100 p-2 focus:bg-red-100"
    : "mt-2 rounded-md border border-gray-700 bg-gray-100 p-2 h-full focus:border-blue-400 focus:bg-white focus:outline-none";
  return (
    <div className="flex flex-col h-full">
      <label className="text-gray-600 font-semibold">{label}</label>
      <textarea
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

export default TextArea;

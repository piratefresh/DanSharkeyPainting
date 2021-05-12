import { StringifyOptions } from "node:querystring";
import React from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";

interface IFormValues {
  PropertyType: string;
  PaintType: string;
  FirstName: string;
  LastName: number;
  Address: string;
}

interface IProps {
  label: string;
  value: string;
  errorMsg?: FieldErrors;
  onChecked: () => void;
  checked: boolean;
}

const Input = React.forwardRef<
  HTMLInputElement,
  IProps & ReturnType<UseFormRegister<IFormValues>>
>(
  (
    { onChecked, checked, onChange, onBlur, name, value, label, errorMsg },
    ref
  ) => {
    return (
      <div onClick={() => onChecked()} style={{ cursor: "pointer" }}>
        <label>{label}</label>
        <input
          style={{ display: "none" }}
          ref={ref}
          type="checkbox"
          name={name}
          value={value}
          checked={checked}
          onChange={() => {
            onChecked();
          }}
        />
        [{checked ? "X" : " "}]
      </div>
    );
  }
);

export default Input;

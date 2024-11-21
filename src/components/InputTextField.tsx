import { TextField } from "@fluentui/react";
import { Controller } from "react-hook-form";

import { FormFieldsProps } from "@/lib/types";

const InputTextField = ({
  label,
  placeholder,
  name,
  required = false,
  control,
  isMultiline = false,
  rows,
  type,
  ...props
}: FormFieldsProps) => (
  <Controller
    name={name}
    control={control}
    rules={{ required }}
    render={({ field: { onChange, onBlur, value } }) => (
      <TextField
        type={type}
        className="w-full"
        label={label}
        placeholder={placeholder}
        required={required}
        multiline={isMultiline}
        rows={rows}
        onChange={onChange}
        onBlur={onBlur}
        value={value || ""}
        revealPasswordAriaLabel="Mostrar contraseña"
        canRevealPassword
        {...props}
      />
    )}
  />
);

export default InputTextField;

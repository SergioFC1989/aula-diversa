import { TextField as FTextField } from "@fluentui/react";
import { Controller } from "react-hook-form";

import { IDynamicFormField } from "@/utils/types";

const TextField = ({ label, placeholder, name, required = false, control, isMultiline = false, rows, ...props }: IDynamicFormField) => (
  <Controller
    name={name}
    control={control}
    rules={{ required }}
    render={({ field: { onChange, onBlur, value } }) => (
      <FTextField
        className="w-full"
        label={label}
        placeholder={placeholder}
        required={required}
        multiline={isMultiline}
        rows={rows}
        onChange={onChange}
        onBlur={onBlur}
        value={value || ""}
        {...props}
      />
    )}
  />
);

export default TextField;

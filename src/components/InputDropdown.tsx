import { Dropdown } from "@fluentui/react";
import { Controller } from "react-hook-form";

import { FormFieldsProps } from "@/lib/types";

const InputDropdown = ({
  name = "",
  label = "",
  control,
  placeholder,
  required = false,
  options = [],
  isMultiSelect = false,
  ...props
}: FormFieldsProps) => (
  <Controller
    control={control}
    name={name}
    rules={{ required }}
    render={({ field: { onChange, onBlur, value } }) => (
      <Dropdown
        label={label}
        className="w-full"
        onBlur={onBlur}
        onChange={(_, option) =>
          !isMultiSelect
            ? onChange(option?.key)
            : option?.selected
            ? onChange([...(Array.isArray(value) ? value : []), option?.text])
            : onChange(
                (Array.isArray(value) ? value : []).filter(
                  (v) => v !== option?.text
                )
              )
        }
        selectedKey={!isMultiSelect ? value : undefined}
        selectedKeys={isMultiSelect ? value : undefined}
        placeholder={placeholder}
        options={options}
        multiSelect={isMultiSelect}
        required={required}
        {...props}
      />
    )}
  />
);

export default InputDropdown;

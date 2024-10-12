import { Slider } from "@fluentui/react";
import { Controller } from "react-hook-form";

import { FormFieldsProps } from "@/lib/types";

const InputSlider = ({
  label,
  name = "",
  required = false,
  control,
  min,
  max,
  step,
  ...props
}: FormFieldsProps) => (
  <Controller
    control={control}
    name={name}
    rules={{ required }}
    render={({ field: { onChange, onBlur, value } }) => (
      <Slider
        className="w-full"
        label={label}
        onChange={onChange}
        onBlur={onBlur}
        value={value || min}
        min={min}
        max={max}
        step={step}
        {...props}
      />
    )}
  />
);

export default InputSlider;

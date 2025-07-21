import { Slider as FSlider } from "@fluentui/react";
import { Controller } from "react-hook-form";

import { IDynamicFormField } from "@/utils/types";

const Slider = ({ label, name = "", required = false, control, min, max, step, ...props }: IDynamicFormField) => (
  <Controller
    control={control}
    name={name}
    rules={{ required }}
    render={({ field: { onChange, onBlur, value } }) => (
      <FSlider
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

export default Slider;

import { DatePicker, DayOfWeek } from "@fluentui/react";
import { Controller } from "react-hook-form";

import { formatDate } from "@/utils/functions";
import { datePickerStringsEs } from "@/utils/options";
import { FormFieldsProps } from "@/utils/types";

const InputDatePicker = ({
  name = "",
  label = "",
  control,
  placeholder,
  required = false,
}: FormFieldsProps) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={{ required }}
      render={({ field: { onChange, onBlur, value } }) => (
        <DatePicker
          className="w-full"
          formatDate={(date) => formatDate(date)}
          firstDayOfWeek={DayOfWeek.Monday}
          isMonthPickerVisible={false}
          label={label}
          placeholder={placeholder}
          onBlur={onBlur}
          onSelectDate={onChange}
          value={value}
          strings={datePickerStringsEs}
        />
      )}
    />
  );
};

export default InputDatePicker;

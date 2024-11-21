import { DatePicker, DayOfWeek } from "@fluentui/react";
import { Controller } from "react-hook-form";

import { formatDate } from "@/utils/utils";
import { DATE_PICKER_STRINGS } from "@/lib/options/date-picker-strings";
import { FormFieldsProps } from "@/lib/types";

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
          strings={DATE_PICKER_STRINGS}
        />
      )}
    />
  );
};

export default InputDatePicker;

import { Control, FieldValues } from "react-hook-form";
import { DefaultButton, PrimaryButton, Separator, Text } from "@fluentui/react";

import InputDropdown from "./input-dropdown/input-dropdown";
import InputSlider from "./input-slider/input-slider";
import InputTextField from "./input-text-field/input-text-field";

import { FormFieldsProps } from "@/utils/types";

interface FormProps {
  title?: string;
  handleSubmit: (
    callback: (data: FieldValues) => void
  ) => (e?: React.BaseSyntheticEvent) => Promise<void>;
  onSubmit: (data: FieldValues) => Promise<void>;
  reset?: () => void;
  control: Control<FieldValues>;
  listFields: FormFieldsProps[];
  labelButtonSubmit: string;
  labelButtonReset: string;
}

const groupByCol = (data: FormFieldsProps[]) => {
  return data.reduce((acc, field) => {
    const col = field.col;
    if (col !== undefined && !acc[col]) {
      acc[col] = [];
    }
    if (col !== undefined) {
      acc[col].push(field);
    }
    return acc;
  }, {} as { [key: number]: typeof data });
};

const Form = ({
  title,
  handleSubmit,
  onSubmit,
  reset,
  control,
  listFields = [],
  labelButtonSubmit,
  labelButtonReset,
}: FormProps) => {
  const groupedFields: { [key: string]: FormFieldsProps[] } =
    groupByCol(listFields);

  return (
    <>
      <Text variant="xLarge" className="text-base sm:text-lg">
        {title}
      </Text>
      <Separator />
      <form
        className="w-full flex flex-col gap-4"
        onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
        onSubmit={handleSubmit(onSubmit)}
        onReset={() => reset && reset()}
      >
        {Object.keys(groupedFields).map((col) => (
          <div
            key={col}
            className="w-full flex flex-col s:flex-row gap-2 s:gap-6"
          >
            {groupedFields[col].map((field) => (
              <div className="w-full flex flex-col s:flex-row" key={field.name}>
                {field.type === "text" && (
                  <InputTextField
                    label={field.label}
                    placeholder={field.placeholder}
                    name={field.name}
                    control={control}
                    required={field.required}
                    rows={field.rows}
                    isMultiline={field.isMultiline}
                  />
                )}
                {field.type === "slider" && (
                  <InputSlider
                    label={field.label}
                    name={field.name}
                    control={control}
                    min={field.min}
                    max={field.max}
                    step={field.step}
                  />
                )}
                {field.type === "dropdown" && (
                  <InputDropdown
                    label={field.label}
                    name={field.name}
                    control={control}
                    placeholder={field.placeholder}
                    required={field.required}
                    options={field.options}
                    isMultiSelect={field.isMultiSelect}
                  />
                )}
              </div>
            ))}
          </div>
        ))}
        <div className="w-full flex gap-4 justify-center">
          <PrimaryButton
            className="my-4 w-3/4 lg:w-2/4 items-center"
            text={labelButtonSubmit}
            type="submit"
          />
          {typeof reset === "function" && (
            <DefaultButton
              className="my-4 w-3/4 lg:w-2/4 items-center"
              text={labelButtonReset}
              type="reset"
            />
          )}
        </div>
      </form>
    </>
  );
};

export default Form;

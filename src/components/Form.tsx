import { DefaultButton, PrimaryButton } from "@fluentui/react";
import { Control, FieldValues } from "react-hook-form";

import { FormFieldsProps } from "@/lib/types";

import InputDatePicker from "./InputDatePicker";
import InputDropdown from "./InputDropdown";
import InputSlider from "./InputSlider";
import InputTextField from "./InputTextField";
import PageHeader from "./PageHeader";

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

  const renderField = (field: FormFieldsProps) => {
    switch (field.type) {
      case "text":
      case "number":
      case "password":
      case "email":
        return (
          <InputTextField
            key={field.name}
            type={field.type}
            label={field.label}
            placeholder={field.placeholder}
            name={field.name}
            control={control}
            required={field.required}
            rows={field.rows}
            isMultiline={field.isMultiline}
          />
        );
      case "slider":
        return (
          <InputSlider
            key={field.name}
            label={field.label}
            name={field.name}
            control={control}
            min={field.min}
            max={field.max}
            step={field.step}
          />
        );
      case "dropdown":
        return (
          <InputDropdown
            key={field.name}
            label={field.label}
            name={field.name}
            control={control}
            placeholder={field.placeholder}
            required={field.required}
            options={field.options}
            isMultiSelect={field.isMultiSelect}
          />
        );
      case "date":
        return (
          <InputDatePicker
            key={field.name}
            label={field.label}
            name={field.name}
            control={control}
            placeholder={field.placeholder}
            required={field.required}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <PageHeader title={title} />
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
            {groupedFields[col].map(renderField)}
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

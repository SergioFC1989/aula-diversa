import { Control, FieldValues, UseFormRegister } from "react-hook-form";

import InputDropdown from "../input-dropdown/input-dropdown";
import InputSlider from "../input-slider/input-slider";
import InputTextField from "../input-text-field/input-text-field";

import { groupByCol } from "@/lib/utils/functions";
import { FormDataProps } from "@/lib/utils/types";
import { PrimaryButton } from "@fluentui/react";

interface FormProps {
  handleSubmit: (
    callback: (data: FieldValues) => void
  ) => (e?: React.BaseSyntheticEvent) => Promise<void>;
  onSubmit: (data: FieldValues) => Promise<void>;
  register: UseFormRegister<FieldValues>;
  control: Control<FieldValues>;
  data: FormDataProps[];
  labelButtonPrimary: string;
}

const Form = ({
  handleSubmit,
  onSubmit,
  register,
  control,
  data = [],
  labelButtonPrimary,
}: FormProps) => {
  const groupedFields: { [key: string]: FormDataProps[] } = groupByCol(data);

  return (
    <form
      className="w-full flex flex-col gap-4"
      onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
      onSubmit={handleSubmit(onSubmit)}
    >
      {Object.keys(groupedFields).map((col) => (
        <div key={col} className="w-full flex gap-2">
          {groupedFields[col].map((field) => (
            <div className="w-full flex flex-col sm:flex-row" key={field.name}>
              {field.type === "text" && (
                <InputTextField
                  label={field.label}
                  placeholder={field.placeholder}
                  name={field.name}
                  register={register}
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
      <div className="w-full flex justify-center">
        <PrimaryButton
          className="my-4 sm:w-1/4 items-center"
          text={labelButtonPrimary}
          type="submit"
        />
      </div>
    </form>
  );
};

export default Form;

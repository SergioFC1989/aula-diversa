import { DefaultButton, PrimaryButton } from "@fluentui/react";

import { IDynamicFormField } from "@/utils/types";

import Dropdown from "../dropdown/Dropdown";
import Slider from "../slider/Slider";
import TextField from "../text-field/text-field";
import TitleNav from "../title-nav/title-nav";
import { IForm } from "./types/form.type";
import { groupByColForm } from "./utils/form.util";

const Form = ({ title, handleSubmit, onSubmit, reset, control, listFields = [], labelButtonSubmit, labelButtonReset }: IForm) => {
  const groupedFields: { [key: string]: IDynamicFormField[] } = groupByColForm(listFields);

  return (
    <>
      {title && <TitleNav title={title} />}
      <form
        className="w-full flex flex-col gap-4"
        onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
        onSubmit={handleSubmit(onSubmit)}
        onReset={() => reset && reset()}
      >
        {Object.keys(groupedFields).map((col) => (
          <div key={col} className="w-full flex flex-col s:flex-row gap-2 s:gap-6">
            {groupedFields[col].map((field) => (
              <div className="w-full flex flex-col s:flex-row" key={field.name}>
                {field.type === "text" && (
                  <TextField
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
                  <Slider label={field.label} name={field.name} control={control} min={field.min} max={field.max} step={field.step} />
                )}
                {field.type === "dropdown" && (
                  <Dropdown
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
          <PrimaryButton className="my-4 w-3/4 lg:w-2/4 items-center" text={labelButtonSubmit} type="submit" />
          {typeof reset === "function" && (
            <DefaultButton className="my-4 w-3/4 lg:w-2/4 items-center" text={labelButtonReset} type="reset" />
          )}
        </div>
      </form>
    </>
  );
};

export default Form;

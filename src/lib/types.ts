import { IDropdownOption } from "@fluentui/react";
import { Control, FieldValues, UseFormRegister } from "react-hook-form";

export type FormFieldsProps = {
  type?:
    | "text"
    | "dropdown"
    | "slider"
    | "date"
    | "number"
    | "password"
    | "email";
  label?: string;
  name: string;
  placeholder?: string;
  col?: number;
  required?: boolean;
  register?: UseFormRegister<FieldValues>;
  control?: Control<FieldValues>;
  min?: number;
  max?: number;
  step?: number;
  options?: IDropdownOption<string | number>[];
  rows?: number;
  isMultiSelect?: boolean;
  isMultiline?: boolean;
};

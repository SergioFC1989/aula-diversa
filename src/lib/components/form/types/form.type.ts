import { FieldValues, UseFormReturn } from "react-hook-form";

import { IDynamicFormField } from "@/utils/types";

export interface IForm extends Pick<UseFormReturn, "control" | "handleSubmit" | "reset"> {
  labelButtonReset: string;
  labelButtonSubmit: string;
  listFields: IDynamicFormField[];
  onSubmit: (data: FieldValues) => Promise<void>;
  title?: string;
}

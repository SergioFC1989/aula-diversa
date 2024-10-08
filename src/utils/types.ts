import { IDropdownOption } from "@fluentui/react";
import { Control, FieldValues, UseFormRegister } from "react-hook-form";

export interface AnnualPlanProps {
  "etapa educativa"?: string;
  modalidad?: string;
  nombre?: string;
  edad?: number;
  discapacidad?: string[];
  "psicomotricidad fina"?: string;
  "psicomotricidad gruesa"?: string;
  "coeficiente intelectual"?: string;
  "intencionalidad comunicativa"?: string;
  "comunicacion escrita"?: string;
  "comunicacion verbal"?: string;
  observaciones?: string;
}

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

export type PlanDataProps = {
  ambito: string;
  horas: string;
  contenidos: string;
  actividades: {
    nombre: string;
    descripcion: string;
    evaluacion: string;
  }[];
};

export type ReportStudentProps = {
  alumno: AnnualPlanProps;
  plan: PlanDataProps[];
};

export type ResponseAnnualPlanProps = {
  ptval: ReportStudentProps | null;
};

import { IDropdownOption } from "@fluentui/react";
import { UseFormReturn } from "react-hook-form";

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

export interface IDynamicFormField extends Partial<Pick<UseFormReturn, "control" | "register">> {
  col?: number;
  isMultiSelect?: boolean;
  isMultiline?: boolean;
  label?: string;
  max?: number;
  min?: number;
  name: string;
  options?: IDropdownOption[];
  placeholder?: string;
  required?: boolean;
  rows?: number;
  step?: number;
  type?: "text" | "dropdown" | "slider";
}

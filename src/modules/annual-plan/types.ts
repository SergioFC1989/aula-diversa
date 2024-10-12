export type StudentDataProps = {
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

export type SingleReportProps = {
  alumno: StudentDataProps;
  plan: PlanDataProps[];
};

export type SingleAnnualPlanProps = {
  ptval: SingleReportProps | null;
};

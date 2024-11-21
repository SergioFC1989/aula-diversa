"use client";

import Form from "@/components/Form";
import LoadingView from "@/components/LoadingView";

import { anualPlanFormConfig } from "./form/annual-plan-form-config";
import { useAnnualPlan } from "./hooks/useAnnualPlan";

const AnnualPlan = () => {
  const { handleSubmit, control, reset, onSubmit, isLoading } = useAnnualPlan();

  if (isLoading) {
    return (
      <LoadingView
        title="Por favor, espere..."
        message="Generando programación anual individualizado..."
      />
    );
  }

  return (
    <div className="w-full xl:w-1/2 flex flex-col">
      <Form
        title="Programación Anual Individualizado"
        control={control}
        reset={reset}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        listFields={anualPlanFormConfig}
        labelButtonSubmit="Aceptar"
        labelButtonReset="Limpiar"
      />
    </div>
  );
};

export default AnnualPlan;

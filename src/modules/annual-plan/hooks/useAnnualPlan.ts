import { useRouter } from "next/navigation";
import { useCallback, useMemo, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

import { useAppContext } from "@/contexts/app-context";
import { apiRequest } from "@/services/api";
import { sanitizerJSON } from "@/utils/utils";

import { annualPlanFormDefault } from "../form/annual-plan-form-default";
import { createSinglePlanPTVAL } from "../prompts/create-single-plan-ptval";
import { StudentDataProps } from "../types";

export const useAnnualPlan = () => {
  const router = useRouter();
  const { singleAnnualPlan, setSingleAnnualPlan } = useAppContext();
  const { handleSubmit, control, reset } = useForm<StudentDataProps>({
    defaultValues: annualPlanFormDefault,
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit = useCallback(
    async (data: FieldValues) => {
      setIsLoading(true);
      try {
        const response = await apiRequest(
          "/api/generate-content-text",
          "POST",
          {
            prompt: createSinglePlanPTVAL(data),
          }
        );

        const serializedResponse = {
          alumno: data,
          plan: sanitizerJSON(response),
        };

        //Refactorizar mas adelante con las demas etapas educativas
        if (data["etapa educativa"] === "PTVAL") {
          setSingleAnnualPlan((prev) => ({
            ...prev,
            ptval: serializedResponse,
          }));
          return router.push("/report/ptval");
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    },
    [router, setSingleAnnualPlan]
  );

  const values = useMemo(
    () => ({
      handleSubmit,
      control,
      reset,
      onSubmit,
      singleAnnualPlan,
      isLoading,
    }),
    [singleAnnualPlan, control, handleSubmit, isLoading, onSubmit, reset]
  );

  return values;
};

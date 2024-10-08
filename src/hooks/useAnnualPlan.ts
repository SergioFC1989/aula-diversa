import { useRouter } from "next/navigation";
import { useCallback, useMemo, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

import { AnnualPlanDefaultValues } from "../views/annual-form-plan/data";

import { useAppContext } from "@/context/app-context";
import { generateSinglePlanPTVAL } from "@/prompts/single-plan/single-plan-ptval";
import { apiRequest } from "@/services/api";
import { sanitizerJSON } from "@/utils/sanitizers";

export const useAnnualPlan = () => {
  const router = useRouter();
  const { content, setContent } = useAppContext();
  const { handleSubmit, control, reset } = useForm({
    defaultValues: AnnualPlanDefaultValues,
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit = useCallback(
    async (data: FieldValues) => {
      setIsLoading(true);
      try {
        const response = await apiRequest(
          "/api/gemini/generate-content-text",
          "POST",
          {
            prompt: generateSinglePlanPTVAL(data),
          }
        );

        const serializedResponse = {
          alumno: data,
          plan: sanitizerJSON(response),
        };

        //Refactorizar mas adelante con las demas etapas educativas
        if (data["etapa educativa"] === "PTVAL") {
          setContent((prev) => ({
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
    [router, setContent]
  );

  const values = useMemo(
    () => ({
      handleSubmit,
      control,
      reset,
      onSubmit,
      content,
      isLoading,
    }),
    [content, control, handleSubmit, isLoading, onSubmit, reset]
  );

  return values;
};

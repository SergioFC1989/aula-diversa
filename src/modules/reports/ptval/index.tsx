"use client";

import { useRouter } from "next/navigation";

import { useAnnualPlan } from "@/modules/annual-plan/hooks/useAnnualPlan";

import PageHeader from "@/components/PageHeader";

import PTVALPlanData from "./components/ptval-plan-data";
import PTVALStudentData from "./components/ptval-student-data";

const PTVALReport = () => {
  const router = useRouter();
  const { singleAnnualPlan } = useAnnualPlan();

  if (!singleAnnualPlan) {
    router.push("/");
    return null;
  }

  return (
    <section>
      <PageHeader
        title="Informe Programación Anual PTVAL"
        onClickNavigateBack={() => router.push("/")}
        isVisibleButtons
      />
      <div className="w-full flex flex-col md:flex-row print:flex-row gap-4">
        <PTVALStudentData content={singleAnnualPlan?.ptval?.alumno ?? null} />
        <PTVALPlanData content={singleAnnualPlan?.ptval?.plan ?? []} />
      </div>
    </section>
  );
};

export default PTVALReport;

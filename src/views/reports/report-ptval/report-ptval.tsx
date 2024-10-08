"use client";

import { useRouter } from "next/navigation";

import { useAnnualPlan } from "@/hooks/useAnnualPlan";

import PageHeader from "@/components/page-header/page-header";

import PTVALPlanData from "./components/ptval-plan-data";
import PTVALStudentData from "./components/ptval-student-data";

const PTVALReport = () => {
  const router = useRouter();
  const { content } = useAnnualPlan();

  if (!content) {
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
        <PTVALStudentData content={content?.ptval?.alumno ?? null} />
        <PTVALPlanData content={content?.ptval?.plan ?? []} />
      </div>
    </section>
  );
};

export default PTVALReport;

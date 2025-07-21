"use client";

import { useRouter } from "next/navigation";

import TitleNav from "@/lib/components/title-nav/title-nav";
import { useAnnualPlan } from "@/lib/hooks/useAnnualPlan";

import PTVALPlanData from "./components/ptval-plan-data";
import PTVALStudentData from "./components/ptval-student-data";

const PTVALReport = () => {
  const router = useRouter();
  const { content } = useAnnualPlan();

  return (
    <section>
      <TitleNav title="Informe Programación Anual PTVAL" onClickNavigateBack={() => router.push("/")} isVisibleButtons />
      <div className="w-full flex flex-col md:flex-row print:flex-row gap-2">
        <PTVALStudentData content={content?.ptval?.alumno ?? null} />
        <PTVALPlanData data={content?.ptval?.plan ?? []} />
      </div>
    </section>
  );
};

export default PTVALReport;

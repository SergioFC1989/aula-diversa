import { Separator, Text } from "@fluentui/react";

import { PlanDataProps } from "@/utils/types";

interface PTVALPlanDataProps {
  data: PlanDataProps[];
}

const renderDescription = (name: string, description: string) => (
  <div className="flex flex-col">
    <Text variant="medium" className="font-bold">
      {name}
    </Text>
    <Text variant="medium">{description}</Text>
  </div>
);

const PTVALPlanData = ({ data }: PTVALPlanDataProps) => {
  if (!data.length) return null;

  return (
    <div className="w-full flex flex-col px-3 gap-8">
      {data.map((info, index) => (
        <div key={index} className="flex flex-col print p-2 rounded-xl bg-gray-50">
          {/* Información del ámbito */}
          <div className="flex flex-col">
            <Text variant="xLargePlus">{info.ambito}</Text>
            <Text variant="medium">{info.horas} horas semanales</Text>
            <Text variant="mediumPlus" className="font-thin">
              {info.contenidos}
            </Text>
            <Separator className="print" />
          </div>

          {/* Actividades */}
          <div className="flex flex-col gap-10">
            {info.actividades.map((act, index) => (
              <div key={index} className="flex flex-col gap-2">
                <Text variant="large" className="text-gray-600">
                  {act.nombre}
                </Text>
                {renderDescription("Objetivo", act.descripcion)}
                {renderDescription("Evaluación", act.evaluacion)}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PTVALPlanData;

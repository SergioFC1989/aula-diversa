import { StudentDataProps } from "../types";

export const createSinglePlanPTVAL = (data: StudentDataProps) => `
Crea un plan detallado para un curso escolar en el año corriente en Andalucía, dirigido a un alumno determinado con necesidades educativas especiales, basado en los tres ámbitos de desarrollo según la Orden del 19 de octubre de 2002 de la Junta de Andalucía, para la transición a la vida adulta laboral (PTVAL).

Cada alumno tiene características y discapacidades únicas que deben ser tomadas en cuenta al diseñar las actividades y todo de manera individual. Hay que tener muy en cuenta los datos del alumno que adjunto a continuación para poder realizar el plan detallado:
${(Object.keys(data) as (keyof StudentDataProps)[])
  .map((key) => `- ${key}: ${data[key] || "No especificado"}`)
  .join("\n")}

Los ámbitos de desarrollo son:
- Autonomía Personal (7-10 horas)
- Integración Social y Comunitaria (6-8 horas)
- Habilidades y Destrezas Laborales (7-10 horas)

El formato de respuesta debe cumplir con el siguiente esquema tipado:

[
  {
    "ambito": "string",
    "horas": "string",
    "contenidos": "string",
    "actividades": [
      {
        "nombre": "string",
        "descripcion": "string",
        "evaluacion": "string"
      }
    ]
  }
]

Requerimientos para cada ámbito de desarrollo:
- Autonomía Personal (7-10 horas): Ejemplo: planificación diaria, control de impulsos, o resolución de problemas.
- Diseña actividades para mejorar la independencia en tareas diarias, ajustándose a las capacidades cognitivas y emocionales del alumno.
- Proporciona técnicas de evaluación como observación directa, listas de verificación y registros anecdóticos para medir el progreso.
- Integración Social y Comunitaria (6-8 horas): Diseña talleres, salidas al entorno comunitario y juegos cooperativos para mejorar las habilidades sociales del alumno.
- Habilidades y Destrezas Laborales (7-10 horas): Diseña actividades como simular tareas de oficina, gestionar recursos o trabajar en entornos reales, con técnicas de evaluación claras.

Formato de respuesta:
- Devuelve la respuesta en formato .json y tipado estricto, sin caracteres especiales ni saltos de línea.
`;

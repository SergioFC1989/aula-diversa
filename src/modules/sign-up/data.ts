import { FormFieldsProps } from "@/lib/types";

export const SignUpFormFields: FormFieldsProps[] = [
  {
    type: "text",
    label: "Nombre",
    name: "nombre",
    placeholder: "Introduzca un nombre...",
    col: 1,
    required: true,
  },
  {
    type: "number",
    label: "Teléfono",
    name: "telefono",
    placeholder: "Introduzca un teléfono...",
    col: 3,
    required: true,
  },
  {
    type: "text",
    label: "Correo electrónico",
    name: "email",
    placeholder: "Introduzca un correo electrónico...",
    col: 4,
    required: true,
  },
  {
    type: "password",
    label: "Contraseña",
    name: "password",
    placeholder: "Introduzca una contraseña...",
    col: 5,
    required: true,
  },
  {
    type: "date",
    label: "Fecha de nacimiento",
    name: "fecha_nacimiento",
    placeholder: "Seleccione una fecha...",
    col: 2,
    required: true,
  },
];

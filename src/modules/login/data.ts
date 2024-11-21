import { FormFieldsProps } from "@/lib/types";

export const LoginFormFields: FormFieldsProps[] = [
  {
    type: "email",
    label: "Correo electrónico",
    name: "email",
    placeholder: "Introduzca un correo electrónico...",
    col: 1,
    required: true,
  },
  {
    type: "password",
    label: "Contraseña",
    name: "password",
    placeholder: "Introduzca una contraseña...",
    col: 2,
    required: true,
  },
];

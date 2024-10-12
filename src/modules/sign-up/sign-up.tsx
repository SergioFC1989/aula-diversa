"use client";

import { Text } from "@fluentui/react";
import Link from "next/link";
import { useForm } from "react-hook-form";

import Form from "@/components/Form";
import { SignUpFormFields } from "./data";

const SignUp = () => {
  const { handleSubmit, control } = useForm();

  return (
    <div className="w-full flex flex-col items-center px-30%">
      <Text variant="xxLargePlus" className="font-bold">
        Crea tu cuenta en Aula Diversa
      </Text>
      <Link
        className="text-primary-color font-semibold cursor-pointer hover:text-gray-600"
        href="/login"
      >
        ¿Ya estás registrado? Accede aquí
      </Link>
      <Form
        handleSubmit={handleSubmit}
        control={control}
        listFields={SignUpFormFields}
        labelButtonSubmit="Crear cuenta"
        onSubmit={(data) => console.log(data)}
      />
    </div>
  );
};

export default SignUp;

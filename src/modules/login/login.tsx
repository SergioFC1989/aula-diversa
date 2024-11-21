"use client";

import { Text } from "@fluentui/react";
import Link from "next/link";
import { useForm } from "react-hook-form";

import Form from "@/components/Form";
import { LoginFormFields } from "./data";

const SignUp = () => {
  const { handleSubmit, control } = useForm();

  return (
    <div className="w-full flex flex-col items-center px-30%">
      <Text variant="xxLargePlus" className="font-bold">
        Iniciar sesión en Aula Diversa
      </Text>
      <Link
        className="text-primary-color font-semibold cursor-pointer hover:text-gray-600"
        href="/sign-up"
      >
        ¿Aún no tienes una cuenta? Accede aquí
      </Link>
      <Form
        handleSubmit={handleSubmit}
        control={control}
        listFields={LoginFormFields}
        labelButtonSubmit="Iniciar sesión"
        onSubmit={(data) => console.log(data)}
      />
    </div>
  );
};

export default SignUp;

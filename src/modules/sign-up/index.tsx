"use client";

import { Text } from "@fluentui/react";
import Link from "next/link";
import { useForm } from "react-hook-form";

import Form from "@/components/Form";

import { signUpFormConfig } from "./form/sign-up-form-config";
import { useSignUp } from "./hooks/useSignUp";

const SignUp = () => {
  const { handleSubmit, control } = useForm();
  const { handleSignUp } = useSignUp();

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
        listFields={signUpFormConfig}
        labelButtonSubmit="Crear cuenta"
        onSubmit={handleSignUp}
      />
    </div>
  );
};

export default SignUp;

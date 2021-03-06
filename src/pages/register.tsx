/* eslint-disable react/jsx-props-no-spreading */
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { useRouter } from "next/router";
import * as yup from "yup";

import { Button, Input } from "@/components/Form";
import { useMutationRegisterUser } from "@/hooks/useMutations";
import { SignUpFormData } from "@/interfaces/Forms";
import { SEO } from "@/SEO";
import { GuestSSR } from "@/utils/auth/GuestSSR";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  LeftContent,
  LoginContent,
  LoginWrapper,
  RightContent,
} from "@styles/Login.styles";

const LoginVariants = {
  visible: {
    opacity: 1,
    x: 0,
  },
  hidden: {
    opacity: 0,
    x: "-50%",
  },
};

const registerSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().email("E-mail inválido").required("E-mail obrigatório"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .min(6, "No mínimo 6 caracteres"),
  password_confirmation: yup
    .string()
    .oneOf([null, yup.ref("password")], "Senhas não conferem")
    .required("Senha obrigatória"),
});

export default function Register() {
  const router = useRouter();

  const createUser = useMutationRegisterUser();

  const { register, handleSubmit, formState, reset } = useForm<SignUpFormData>({
    resolver: yupResolver(registerSchema),
  });

  const handleRegister: SubmitHandler<SignUpFormData> = async (data) => {
    const response = await createUser.mutateAsync(data);

    toast(response.message ?? "Seja bem-vindo(a)", {
      type: `${response.success ? "success" : "error"}`,
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    router.push("/");
    reset();
  };

  return (
    <>
      <SEO title="Controle suas finanças de maneira fácil" />
      <LoginWrapper>
        <LeftContent />
        <RightContent
          initial="hidden"
          animate="visible"
          variants={LoginVariants}
          transition={{ duration: 0.7 }}
        >
          <div className="title">
            <h4>💸 Registro</h4>
            <span>
              Controle suas finanças de maneira <br /> simples e rápida
            </span>
          </div>
          <LoginContent onSubmit={handleSubmit(handleRegister)}>
            <Input
              type="text"
              label="Nome"
              error={formState.errors.name}
              {...register("name")}
              required
            />

            <Input
              type="email"
              label="E-mail"
              error={formState.errors.email}
              {...register("email")}
              required
            />

            <Input
              type="password"
              label="Senha"
              error={formState.errors.password}
              {...register("password")}
              required
            />

            <Input
              type="password"
              label="Repetir senha"
              error={formState.errors.password_confirmation}
              {...register("password_confirmation")}
              required
            />

            <Button
              type="submit"
              isLoading={formState.isSubmitting}
              disabled={formState.isSubmitting}
              bgColor="#363F5F"
            >
              Registrar
            </Button>

            <Button
              type="button"
              bgColor="#E52E4D"
              onClick={() => router.push("/")}
            >
              Voltar
            </Button>
          </LoginContent>
        </RightContent>
      </LoginWrapper>
    </>
  );
}

export const getServerSideProps = GuestSSR(async (ctx) => {
  return {
    props: {},
  };
});

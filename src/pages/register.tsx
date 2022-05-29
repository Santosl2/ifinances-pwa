/* eslint-disable react/jsx-props-no-spreading */
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { toast } from "react-toastify";

import { useRouter } from "next/router";
import * as yup from "yup";

import { Button, Input } from "@/components/Form";
import { SignUpFormData } from "@/interfaces/Forms";
import { SEO } from "@/SEO";
import { api } from "@/services/api";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginContent, LoginWrapper } from "@styles/Login.styles";

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

  const createUser = useMutation(async (user: SignUpFormData) => {
    const response = await api.post("/users/create", {
      user,
    });

    return response.data;
  });

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

    reset();
  };

  return (
    <>
      <SEO title="Controle suas finanças de maneira fácil" />
      <LoginWrapper
        initial="hidden"
        animate="visible"
        variants={LoginVariants}
        transition={{ duration: 0.7 }}
      >
        <h4>💸 Registro</h4>
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
            bgColor="#36314f"
            isLoading={formState.isSubmitting}
            disabled={formState.isSubmitting}
          >
            Registrar
          </Button>

          <Button type="button" onClick={() => router.push("/")}>
            Voltar
          </Button>
        </LoginContent>
      </LoginWrapper>
    </>
  );
}

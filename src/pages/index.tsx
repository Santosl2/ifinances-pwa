/* eslint-disable react/jsx-props-no-spreading */
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import { useRouter } from "next/router";
import * as yup from "yup";

import { Button, Input } from "@/components/Form";
import { SignInFormData } from "@/interfaces/Forms";
import { SEO } from "@/SEO";
import { api } from "@/services/api";
import { changeUser } from "@/store/users/UserReducers";
import { GuestSSR } from "@/utils/auth/GuestSSR";
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

const loginSchema = yup.object().shape({
  email: yup.string().email("E-mail inválido").required("E-mail obrigatório"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .min(6, "No mínimo 6 caracteres"),
});

export default function Login() {
  const router = useRouter();
  const dispatch = useDispatch();

  const loginUser = useMutation(async (user: SignInFormData) => {
    const response = await api.post("/users/login", {
      user,
    });

    return response.data;
  });
  const { register, handleSubmit, formState, reset } = useForm<SignInFormData>({
    resolver: yupResolver(loginSchema),
  });

  const handleLogin: SubmitHandler<SignInFormData> = async (data) => {
    const response = await loginUser.mutateAsync(data);

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

    if (response.success) {
      const userData = {
        id: response.user.id,
        name: response.user.name,
        email: response.user.email,
        refreshToken: response.refreshToken,
        accessToken: response.accessToken,
      };

      dispatch(changeUser(userData));
      router.push("/dashboard");
    }

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
        <h4>💸 iFinances</h4>
        <LoginContent onSubmit={handleSubmit(handleLogin)}>
          <Input type="email" label="E-mail" {...register("email")} />
          <Input type="password" label="Senha" {...register("password")} />
          <Button
            type="submit"
            isLoading={formState.isSubmitting}
            disabled={formState.isSubmitting}
            bgColor="#363F5F"
          >
            Entrar
          </Button>

          <Button
            type="button"
            bgColor="#e52e4d"
            onClick={() => router.push("/register")}
          >
            Registre-se
          </Button>
        </LoginContent>
      </LoginWrapper>
    </>
  );
}

export const getServerSideProps = GuestSSR(async (ctx) => {
  return {
    props: {},
  };
});

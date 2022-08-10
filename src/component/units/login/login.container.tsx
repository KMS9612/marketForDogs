import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";
import LogInPresenter from "./login.presenter";
import { LOGIN_USER } from "./login.queries";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useState } from "react";
import { Modal } from "antd";

export default function LogInContainer() {
  const router = useRouter();
  const onClickSignUp = () => {
    router.push(`/signup`);
  };

  const [token, setToken] = useRecoilState(accessTokenState);

  const schema = yup.object({
    email: yup
      .string()
      .matches(/^\w+@\w+\.\w+$/, "이메일 형식이 맞지않습니다")
      .required("이메일은 필수 입력입니다."),
    password: yup
      .string()
      .min(4, "비밀번호는 4자리 이상이여야 합니다.")
      .max(12, "비밀번호는 12자리 이하여야 합니다."),
  });

  const [loginUser] = useMutation(LOGIN_USER);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });
  const onChangeEmail = (event: any) => {
    setEmail(event.target.value);
  };
  const onChangePassword = (event: any) => {
    setPassword(event.target.value);
  };
  const onClickLogIn = async () => {
    const result = await loginUser({
      variables: {
        email,
        password,
      },
    });

    const accessToken = result.data?.loginUser.accessToken;
    setToken(accessToken);
    localStorage.setItem("accessToken", accessToken);
    Modal.success({ content: "로그인에 성공하였습니다!" });
    router.push(`/board/list`);
  };
  return (
    <LogInPresenter
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onClickLogIn={onClickLogIn}
      register={register}
      handleSubmit={handleSubmit}
      onClickSignUp={onClickSignUp}
    />
  );
}

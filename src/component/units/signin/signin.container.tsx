import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import SignInPresenter from "./signin.presenter";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const CREATE_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      _id
      email
      name
    }
  }
`;

export default function SignInContainer() {
  const router = useRouter();
  const [createUser] = useMutation(CREATE_USER);
  const schema = yup.object({
    name: yup.string().required("이름을 입력해 주세요!!"),
    email: yup.string().required("이메일을 입력해주세요"),
    password: yup.string().required(""),
  });

  const onClickMoveToLogin = () => {
    router.push(`/login`);
  };

  const onClickRegister = async (data: any) => {
    try {
      const result = await createUser({
        variables: {
          createUserInput: {
            email: data.email,
            password: String(data.password),
            name: data.name,
          },
        },
      });
      Modal.success({
        content: `${result.data?.createUser.name}님의 회원가입이 완료되었습니다.`,
      });
      router.push(`/board`);
      console.log(result);
    } catch (error) {
      Modal.error({ content: "회원가입에 실패하였습니다." });
    }
  };

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  return (
    <SignInPresenter
      register={register}
      handleSubmit={handleSubmit}
      onClickRegister={onClickRegister}
      onClickMoveToLogin={onClickMoveToLogin}
    />
  );
}

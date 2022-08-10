import * as S from "./login.styles";

export default function LogInPresenter(props: any) {
  return (
    <S.OutLine>
      <S.Wrapper>
        <S.InputWrapper>
          <S.Logo>Log In</S.Logo>
          <S.Input
            type="text"
            placeholder="이메일을 입력하세요!"
            onChange={props.onChangeEmail}
          ></S.Input>
          <S.Input
            type="password"
            placeholder="비밀번호를 입력하세요!"
            onChange={props.onChangePassword}
          ></S.Input>
          <S.Button onClick={props.onClickLogIn}>로그인!</S.Button>
          <S.SignIn onClick={props.onClickSignUp}>회원가입</S.SignIn>
        </S.InputWrapper>
      </S.Wrapper>
    </S.OutLine>
  );
}

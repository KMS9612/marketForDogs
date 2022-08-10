import * as S from "../../../component/units/signin/signin.styles";

export default function SignInPresenter(props: any) {
  return (
    <S.OutLine>
      <S.Wrapper>
        <form onSubmit={props.handleSubmit(props.onClickRegister)}>
          <S.Logo>회원가입</S.Logo>
          <S.inputWrapper>
            <S.inputBox>
              이름
              <S.input
                placeholder="이메일을 입력하세요"
                {...props.register("name")}
              ></S.input>
            </S.inputBox>
            <S.inputBox>
              이메일
              <S.input
                placeholder="이메일을 입력하세요"
                {...props.register("email")}
              ></S.input>
            </S.inputBox>
            <S.inputBox>
              비밀번호
              <S.input
                placeholder="비밀번호를 입력하세요"
                {...props.register("password")}
              ></S.input>
            </S.inputBox>
          </S.inputWrapper>
          <S.BtnWrapper>
            <S.SubmitBtn type="submit">가입하기</S.SubmitBtn>
            <S.CancelBtn type="button" onClick={props.onClickMoveToLogin}>
              취소하기
            </S.CancelBtn>
          </S.BtnWrapper>
        </form>
      </S.Wrapper>
    </S.OutLine>
  );
}

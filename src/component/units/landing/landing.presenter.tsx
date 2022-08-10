import LogInContainer from "../login/login.container";
import * as S from "./landing.styles";
export default function LandingPagePresenter(props: any) {
  return (
    <S.Wrapper>
      <S.Header>
        <S.Logo>Market For Dogs</S.Logo>
        {/* <S.Comment>
          <i>반려견에 의한</i> <br />
          <i>반려견을 위한</i>
        </S.Comment> */}
      </S.Header>
      <S.Section>
        <S.NoLogInBtn onClick={props.onClickMovetoList}>
          나중에 로그인하기
        </S.NoLogInBtn>
        <LogInContainer />
      </S.Section>
    </S.Wrapper>
  );
}

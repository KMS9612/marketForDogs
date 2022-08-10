import { gql, useMutation, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import BtnLogin from "../../btns/btn-login";

const FECTH_USER_LOGGEDIN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      email
      name
      userPoint {
        _id
        amount
      }
    }
  }
`;
const LOGOUT_USER = gql`
  mutation {
    logoutUser
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 50px 10px 50px;
  background-color: #fff;
`;

const Logo = styled.div`
  font-size: 50px;
  color: #ffd600;
  padding: 0px 50px;
  width: 600px;
  text-align: center;
  font-weight: 700;
  border-radius: 15px 15px 0px 0px;
  cursor: pointer;
`;
const LogoImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 250px;
`;

const Point = styled.div`
  font-size: 20px;
  font-weight: 700;
  border: 1px solid #bdbdbd;
`;

export default function LayoutHeader() {
  const router = useRouter();
  const { data, refetch } = useQuery(FECTH_USER_LOGGEDIN);
  const [logoutUser] = useMutation(LOGOUT_USER);
  const onClickMovetoHome = () => {
    router.push(`/`);
  };
  const onClickLogin = () => {
    router.push(`/login`);
  };
  const onClickSignUp = () => {
    router.push(`/signup`);
  };
  const onClickLogOut = () => {
    const result = logoutUser();
    localStorage.removeItem("accessToken");

    location.reload();
  };

  return (
    <Wrapper>
      <Logo onClick={onClickMovetoHome}>
        <LogoImg src="/LogoImg/marketForDogs.png"></LogoImg>
        Market For Dogs
      </Logo>

      {data ? (
        <div>
          <Point>{data?.fetchUserLoggedIn.userPoint.amount}Point!</Point>
          <div>{data?.fetchUserLoggedIn.name}님 환영합니다!</div>
          <BtnLogin
            BtnName={"로그아웃하기!"}
            onClickEvent={onClickLogOut}
          ></BtnLogin>
        </div>
      ) : (
        <LoginWrapper>
          <BtnLogin BtnName={"로그인하기!"} onClickEvent={onClickLogin} />
          <BtnLogin BtnName={"회원가입하기!"} onClickEvent={onClickSignUp} />
        </LoginWrapper>
      )}
    </Wrapper>
  );
}

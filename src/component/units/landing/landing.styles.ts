import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const NoLogInBtn = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: #bdbdbd;
  text-align: left;
  background-color: #fff;
  &:hover {
    border-bottom: 1px solid #bdbdbd;
  }
`;

export const Logo = styled.div`
  font-size: 100px;
  font-weight: 700;
`;

export const Comment = styled.div`
  font-size: 70px;
`;
export const Section = styled.div`
  border: 10px solid #fff;
  background-color: #fff;
`;
export const LogoImg = styled.div``;
export const StartBtn = styled.button`
  width: 500px;
  height: 100px;
  font-size: 35px;
  font-weight: 600;
  color: #bc5c47;
  border-radius: 2px 15px 2px 15px;
  border-top: 1px solid;
  background-color: beige;
  cursor: pointer;
`;

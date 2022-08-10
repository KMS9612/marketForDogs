import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { Fragment } from "react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 22px;
  padding: 20px 0px 20px 40px;
  margin: 15px 2px;
  border-radius: 50px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
`;
const NavList = styled.div`
  color: black;
  margin-right: 32px;
  cursor: pointer;
  padding: 10px 40px;
  border-radius: 15px 15px 0px 0px;
`;

export default function LayoutNav() {
  const router = useRouter();

  // 메뉴 데이터
  const NAV_MENU = [
    { name: "자랑게시판", page: "/board/list" },
    { name: "중고마켓", page: "/market/list" },
    { name: "포인트충전", page: "/payment" },
    { name: "마이페이지", page: "/mypage" },
  ];

  const onClickMovePage = (event: any) => {
    if (!event.target.id) {
      alert("준비 중 입니다.");
      return;
    }
    router.push(event.target.id);
  };
  return (
    <Wrapper>
      {NAV_MENU.map((el) => (
        <Fragment key={el.page}>
          <NavList id={el.page} onClick={onClickMovePage}>
            {el.name}
          </NavList>
        </Fragment>
      ))}
    </Wrapper>
  );
}

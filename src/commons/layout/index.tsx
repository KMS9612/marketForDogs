import LayoutBanner from "./banner";
import styled from "@emotion/styled";
import LayoutNav from "./nav";
import LayoutHeader from "./header";
import { useRouter } from "next/router";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

const HeadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const HIDDEN_LADNING = ["/"];
export default function Layout(props) {
  const router = useRouter();

  const ishidden = HIDDEN_LADNING.includes(router.asPath);
  return (
    <Wrapper>
      {!ishidden && (
        <div>
          <HeadWrapper>
            <LayoutHeader></LayoutHeader>
            <LayoutNav></LayoutNav>
          </HeadWrapper>
          <LayoutBanner></LayoutBanner>
        </div>
      )}
      <Body>{props.children}</Body>
    </Wrapper>
  );
}

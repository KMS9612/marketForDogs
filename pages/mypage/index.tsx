import { useCheck } from "../../src/commons/hooks/useCheck";
import MyPageMainContainer from "../../src/component/units/mypage/mypagemain.container";

export default function myPage() {
  useCheck();
  return <MyPageMainContainer />;
}

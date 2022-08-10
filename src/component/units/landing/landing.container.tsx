import LandingPagePresenter from "./landing.presenter";
import { useRouter } from "next/router";
export default function LandingPageContainer() {
  const router = useRouter();
  const onClickMovetoList = () => {
    router.push("/board/list");
  };

  return <LandingPagePresenter onClickMovetoList={onClickMovetoList} />;
}

import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import MyPageMain from "./mypagemain.presenter";
import { FETCH_USED_ITEMS_I_SOLD } from "./mypagemain.queries";
import { v4 as uuidv4 } from "uuid";
export default function MyPageMainContainer() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEMS_I_SOLD, {
    variables: {
      page: 1,
    },
  });
  const onClickMoveToBasket = () => {
    router.push(`/mypage/basket`);
  };
  const onClickMoveToInfo = () => {
    router.push(`/mypage/info`);
  };

  return (
    <MyPageMain
      data={data}
      onClickMoveToInfo={onClickMoveToInfo}
      onClickMoveToBasket={onClickMoveToBasket}
      uuidv4={uuidv4}
    />
  );
}

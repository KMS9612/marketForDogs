import { useQuery } from "@apollo/client";
import BasketPresenter from "./basket.presenter";
import { FETCH_USED_ITEMS_I_PICKED } from "./basket.queries";

export default function BasketContainerPage() {
  // 찜한 상품 가져오기
  const { data } = useQuery(FETCH_USED_ITEMS_I_PICKED, {
    variables: {
      search: "",
    },
  });
  console.log(data);
  // 찜한 상품 아이디 꺼내와서 fetch
  return <BasketPresenter data={data} />;
}

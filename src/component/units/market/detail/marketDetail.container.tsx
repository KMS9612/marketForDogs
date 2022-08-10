import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";

import MarketDetailPresenter from "./marketDetail.presenter";
import {
  FETCH_USED_ITEM,
  DELETE_USED_ITEM,
  TOGGLE_USED_ITEM_PICK,
  CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING,
} from "./marketDetail.queries";

export default function MarketDetailContainer() {
  const router = useRouter();
  const [deleteUseditem] = useMutation(DELETE_USED_ITEM);
  const [toggleUsedItemPick] = useMutation(TOGGLE_USED_ITEM_PICK);
  // 구매하기 api
  const [createPointTransactionOfBuyingAndSelling] = useMutation(
    CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING
  );

  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: {
      useditemId: router.query.MarketId,
    },
  });
  console.log(data?.fetchUseditem.images);

  const onClickDelete = () => {
    const result = deleteUseditem({
      variables: {
        useditemId: router.query.MarketId,
      },
    });
    alert("판매글이 삭제되었습니다!");
    router.push(`/market/list`);
  };
  const onClickMoveToList = () => {
    router.push(`/market/list`);
  };
  const onClickMoveToUpdate = () => {
    router.push(`/market/detail/${router.query.MarketId}/edit`);
    console.log("hello!!update is running!");
  };
  const onClickGetToBasket = async () => {
    console.log("hello");
    try {
      const basketResult = await toggleUsedItemPick({
        variables: {
          useditemId: router.query.MarketId,
        },
      });
      console.log(basketResult);
      Modal.success({ content: "장바구니에 담겼습니다!" });
      router.push(`/mypage/basket`);
    } catch (error) {
      Modal.error({ content: "장바구니에 담기지 않았습니다! ㅜㅜ" });
    }
  };

  // 구매하기
  const onClickBuy = () => {
    const result = createPointTransactionOfBuyingAndSelling({
      variables: {
        useritemId: router.query.MarketId,
      },
    });
    router.push(`/market/list`);
  };
  return (
    <MarketDetailPresenter
      data={data}
      onClickDelete={onClickDelete}
      onClickMoveToList={onClickMoveToList}
      onClickMoveToUpdata={onClickMoveToUpdate}
      onClickGetToBasket={onClickGetToBasket}
      uuidv4={uuidv4}
      onClickBuy={onClickBuy}
    />
  );
}

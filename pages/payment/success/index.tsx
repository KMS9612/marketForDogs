// import { gql } from "@apollo/client";

import { useRouter } from "next/router";

// const FETCH_POINT_TRANSACTIONS_COUNT_OF_LOADING = gql``;

export default function PaymentSuccess() {
  const router = useRouter();
  const onClickMoveToMarket = () => {
    router.push(`/market/list`);
  };
  return (
    <div>
      <div onClick={onClickMoveToMarket}>결제성공! 상품목록으로 돌아가기!</div>
    </div>
  );
}

import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";

import PaymentPresenter from "./payment.presenter";
import { CREATE_POINT_TRANSACTION_OF_LOADING } from "./payment.queries";

export default function PaymentContainer() {
  const [createPointTransactionOfLoading] = useMutation(
    CREATE_POINT_TRANSACTION_OF_LOADING
  );
  const [point, setPoint] = useState("");
  const router = useRouter();
  const onChange = (event: any) => {
    setPoint(event.target.value);
    console.log(point);
  };
  const onClickPayment = async (event: any) => {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp49910675"); // Example: imp00000000

    setPoint(event.target.value);
    IMP.request_pay(
      {
        pg: "html5_inicis",
        pay_method: "card",
        // merchant_uid: "ORD20180131-0000011",
        name: "테스트 결제",
        amount: point,
        buyer_email: "gildong@gmail.com",
        buyer_name: "김민승",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
      },
      async function (rsp: any) {
        // callback
        if (rsp.success) {
          // 결제 성공 시 로직,
          console.log(rsp);
          Modal.success({ content: "결제에 성공하셧습니다." });
          router.push(`/payment/success`);
          const result = await createPointTransactionOfLoading({
            variables: {
              impUid: rsp.imp_uid,
            },
          });
          Modal.success({
            content: `${result.data?.createPointTransactionOfLoading.amount}포인트가 충전되었습니다!!`,
          });
        } else {
          // 결제 실패 시 로직,
          Modal.error({ content: "결제에 실패하셧습니다" });
          router.push(`/payment`);
        }
      }
    );
  };

  // 모달 창
  // const [modal, setIsModal] = useState(false);
  // const onClickModal = () => {
  //   setIsModal((prev) => !prev);
  // };
  return (
    <PaymentPresenter
      // onClickModal={onClickModal}
      onClickPayment={onClickPayment}
      onChange={onChange}
    />
  );
}

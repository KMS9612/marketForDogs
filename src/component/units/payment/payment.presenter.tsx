import BtnLogin from "../../../commons/btns/btn-login";
import * as S from "./payment.styles";
import Head from "next/head";
export default function PaymentPresenter(props: any) {
  return (
    <S.Wrapper>
      <Head>
        {/* <!-- jQuery --> */}
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        {/* <!-- iamport.payment.js --> */}
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <S.Header>
        <S.HeaderText>포인트 충전하기</S.HeaderText>
      </S.Header>
      <S.Section>
        <S.SectionText>충전 금액을 정해주세요!</S.SectionText>
        <S.SectionSelect name="Point" onChange={props.onChange}>
          <S.SectionPrice value="100">100</S.SectionPrice>
          <S.SectionPrice value="1000">1000</S.SectionPrice>
          <S.SectionPrice value="2000">2000</S.SectionPrice>
          <S.SectionPrice value="3000">3000</S.SectionPrice>
        </S.SectionSelect>
        <BtnLogin
          onClickEvent={props.onClickPayment}
          BtnName={"충전하기"}
        ></BtnLogin>
      </S.Section>
    </S.Wrapper>
  );
}

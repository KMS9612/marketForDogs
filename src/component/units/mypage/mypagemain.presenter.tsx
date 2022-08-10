import * as S from "./mypagemain.styles";

export default function MyPageMainPresenter(props: any) {
  return (
    <S.Wrapper>
      <S.NavWrapper>
        <S.Nav onClick={props.onClickMoveToBasket}>장바구니</S.Nav>
        <S.Nav onClick={props.onClickMoveToInfo}>정보</S.Nav>
      </S.NavWrapper>
      <S.SoldListWrapper>
        판매목록
        {props.data?.fetchUseditemsISold.map((el: any) => (
          <S.SoldWrapper key={props.uuidv4}>
            <div>{el.seller?.name}</div>
            <div>{el.name}</div>
            <div>{el.remarks}</div>
            <div>{el.price}</div>
          </S.SoldWrapper>
        ))}
      </S.SoldListWrapper>
    </S.Wrapper>
  );
}

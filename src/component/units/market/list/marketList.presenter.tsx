import * as S from "./marketList.styles";
import { v4 as uuidv4 } from "uuid";
import MarketListCapsule from "./marketList.capsule";
import BtnLogin from "../../../../commons/btns/btn-login";
import InfiniteScroll from "react-infinite-scroller";
export default function MarketListPresenter(props: any) {
  return (
    <S.Wrapper>
      <S.HeaderWrapper>
        <S.Header>상품 리스트</S.Header>
        <BtnLogin
          BtnName={"상품 등록하기!"}
          onClickEvent={props.onClickCreate}
        />
      </S.HeaderWrapper>

      <S.ListWrapper>
        <InfiniteScroll loadMore={props.loadFunc} hasMore={true} pageStart={0}>
          {props.data ? (
            props.data?.fetchUseditems.map((el: any, index: number) => (
              <MarketListCapsule
                key={el._id}
                index={index}
                el={el}
                onClickMoveToDetail={props.onClickMoveToDetail}
              />
            ))
          ) : (
            <></>
          )}
        </InfiniteScroll>
      </S.ListWrapper>
    </S.Wrapper>
  );
}

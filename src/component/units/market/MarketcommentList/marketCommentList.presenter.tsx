import MarketCommentListPresenterItem from "./marketCommentList.presenterItem";
import * as S from "./marketCommentList.styles";

export default function MarketCommentListPresenter(props: any) {
  return (
    <S.Wrapper>
      <S.Header>댓글목록</S.Header>
      <S.List>
        {props.data?.fetchUseditemQuestions.map((el: any, index: number) => (
          <div key={props.uuidv4}>
            {/* 댓글리스트 */}
            <MarketCommentListPresenterItem
              el={el}
              data={props.data}
              dataUser={props.dataUser}
              onClickDeleteComment={props.onClickDeleteComment}
            />
          </div>
        ))}
      </S.List>
    </S.Wrapper>
  );
}

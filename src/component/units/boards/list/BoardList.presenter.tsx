import * as S from "./BoardList.styles";
import SearchPage from "../../../../commons/search/index";
export default function BoardListPresenter(props: any) {
  return (
    <S.Wrapper>
      <S.HeadWrapper>
        <SearchPage onChangeSearch={props.onChangeSearch}></SearchPage>
        <S.CreateBoardButton onClick={props.onClickMovetoCreate}>
          게시물 등록
        </S.CreateBoardButton>
      </S.HeadWrapper>

      <S.body>
        <S.BoardListWrapperPin>
          <S.BoardListNumberPin>번호</S.BoardListNumberPin>
          <S.BoardListTitlePin>제목</S.BoardListTitlePin>
          <S.BoardListWriterPin>작성자</S.BoardListWriterPin>
          <S.BoardListDatePin>날짜</S.BoardListDatePin>
        </S.BoardListWrapperPin>
        {props.data?.fetchBoards.map((el: any, index: any) => (
          <S.BoardListWrapper
            key={props.uuidv4}
            id={el._id}
            onClick={props.onClickMoveToDetail}
          >
            <S.BoardListNumber>{index + 1}</S.BoardListNumber>
            <S.BoardListTitle>
              {el.title
                .replaceAll(props.keyword, `#$%${props.keyword}#$%`)
                .split("#$%")
                .map((el: any) => (
                  <S.Word key={props.uuidv4} isMatched={props.keyword === el}>
                    {el}
                  </S.Word>
                ))}
            </S.BoardListTitle>
            <S.BoardListWriter>{el.writer}</S.BoardListWriter>
            <S.BoardListDate>{el.createdAt.slice(0, 10)}</S.BoardListDate>
          </S.BoardListWrapper>
        ))}
      </S.body>
    </S.Wrapper>
  );
}

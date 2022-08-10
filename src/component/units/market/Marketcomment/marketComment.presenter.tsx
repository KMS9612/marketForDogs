import BtnLogin from "../../../../commons/btns/btn-login";
import * as S from "./marketComment.styles";

export default function MarketCommentPresenter(props: any) {
  return (
    <S.OutLine>
      <S.Wrapper>
        <S.Header>{props.isComment ? "대댓글" : "댓글"} 작성하기</S.Header>
        <S.InfoWrapper>
          <S.InfoName></S.InfoName>
        </S.InfoWrapper>
        <S.InputWrapper>
          <S.CommentText>내용:</S.CommentText>
          <S.CommentInput
            onChange={
              props.isComment ? props.onChangeContents2 : props.onChangeContents
            }
            placeholder="댓글을 작성해주세요!"
          ></S.CommentInput>
        </S.InputWrapper>
        <S.BtnWrapper>
          <BtnLogin
            id={props.el?._id}
            BtnName={"등록하기"}
            onClickEvent={
              props.isComment
                ? props.onClickComment2Submit
                : props.onClickComment
            }
          />
        </S.BtnWrapper>
      </S.Wrapper>
    </S.OutLine>
  );
}

import * as S from "./BoardDetail.styles";
import ReactPlayer from "react-player";

export default function BoardDetailPresenter(props: any) {
  console.log(props.data?.fetchBoard.youtubeUrl);
  function Test4() {
    return <ReactPlayer url={props.data?.fetchBoard.youtubeUrl}></ReactPlayer>;
  }
  return (
    <>
      <S.Wrapper>
        <S.WriterWrapper>
          <S.WriterLeft>
            <S.Profile>
              <img src="/ProfileIcon.png"></img>
            </S.Profile>
            <S.infor>
              <S.ProfileName>{props.data?.fetchBoard.writer}</S.ProfileName>
              <S.ProfileDate>Date: 2022.05.14</S.ProfileDate>
            </S.infor>
          </S.WriterLeft>
          <S.WriterRight>
            <S.WriterRightImg src="/share.png" />
            <S.WriterRightImg src="/gps.png" />
          </S.WriterRight>
        </S.WriterWrapper>
        <S.devideLine></S.devideLine>
        <S.MainWrapper>
          <S.MainTitle>{props.data?.fetchBoard.title}</S.MainTitle>
          <S.MainImage
            width={"500px"}
            height={"500px"}
            src={`https://storage.googleapis.com/${props.data?.fetchBoard?.images[0]}`}
          />
          <S.MainContents>{props.data?.fetchBoard.contents}</S.MainContents>
          <S.youtube>{Test4()}</S.youtube>
          <S.likeCountWrapper>
            <S.likeWrapper>
              <S.likeImg src="/like.png" onClick={props.onClickLike} />
              <S.like>{props.data?.fetchBoard.likeCount}</S.like>
            </S.likeWrapper>
            <S.dislikeWrapper>
              <S.likeImg src="/dislike.png" onClick={props.onClickDislike} />
              <S.dislike>{props.data?.fetchBoard.dislikeCount}</S.dislike>
            </S.dislikeWrapper>
          </S.likeCountWrapper>
        </S.MainWrapper>
        <S.devideLine></S.devideLine>
        <S.BtnWrapper>
          <S.moveToListBtn onClick={props.onClickMoveToList}>
            목록으로
          </S.moveToListBtn>
          <S.updateBtn onClick={props.onClickMoveToEdit}>수정하기</S.updateBtn>
          <S.deleteBtn onClick={props.onClickDelete}>삭제하기</S.deleteBtn>
        </S.BtnWrapper>
      </S.Wrapper>
    </>
  );
}

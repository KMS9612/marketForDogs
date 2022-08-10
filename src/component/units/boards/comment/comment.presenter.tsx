import * as S from "./comment.styles";
import { Rate } from "antd";
import "antd/dist/antd.css";

export default function CommentPresenter(props: any) {
  return (
    <>
      <S.Wrapper>
        <S.Header>
          <S.commentTitle>
            <img src="/commentImg1.png" />{" "}
            {props.isEdit ? "댓글수정" : "댓글등록"}
          </S.commentTitle>

          <S.commentInforWrapper>
            <S.commentInforInput
              type="text"
              readOnly={!!props.el?.writer}
              defaultValue={props.el?.writer}
              placeholder="작성자"
              onChange={props.onChangeWriter}
            ></S.commentInforInput>
            <S.commentInforInput
              type="password"
              placeholder="비밀번호"
              onChange={props.onChangePwd}
            ></S.commentInforInput>
            <S.commentInforRating>
              <Rate onChange={props.onChangeRating} />
            </S.commentInforRating>
          </S.commentInforWrapper>
          <S.inputWrapper>
            <S.CommentInput
              maxLength={100}
              placeholder="개인정보를 공유 및 요청하거나, 명예 훼손,무단광고,불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
              defaultValue={props.el?.contents}
              onChange={props.onChangeContents}
            ></S.CommentInput>
            <S.inputFunctionWrapper>
              <S.inputFunctionLimit>
                {props.contents.length} /100
              </S.inputFunctionLimit>
              <S.inputFunctionBtn
                id={props.eventid}
                onClick={
                  props.isEdit
                    ? props.onClickUpdate
                    : props.onClickCreateComment
                }
              >
                {props.isEdit ? "수정" : "등록"}하기
              </S.inputFunctionBtn>
            </S.inputFunctionWrapper>
          </S.inputWrapper>
        </S.Header>
      </S.Wrapper>
    </>
  );
}

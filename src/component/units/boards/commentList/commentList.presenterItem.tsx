import * as S from "./commentList.styles";
import {
  FETCH_BOARD_COMMENTS,
  DELETE_BOARD_COMMENT,
} from "./commentList.queries";
import CommentContainer from "../comment/comment.container";
import { useState } from "react";
import { Rate, Modal } from "antd";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";

export default function CommentListPresenterItem(props: any) {
  const router = useRouter();

  const [isEdit, setIsEdit] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [password, setPassword] = useState("");

  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);
  // 수정하기 클릭
  const onClickChange = (event: any) => {
    setIsEdit(true);
  };
  // 삭제모달 열기
  const onClickOpenDeleteModal = () => {
    setOpenDeleteModal(true);
  };
  // 비밀번호 입력
  const onChangeDeletePassword = (event: any) => {
    setPassword(event.target.value);
  };
  // 모달 닫기
  const handleCancel = () => {
    setOpenDeleteModal(false);
  };
  // 삭제하기 api요청
  const onClickDelete = async () => {
    try {
      await deleteBoardComment({
        variables: {
          password,
          boardCommentId: props.el._id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query._id },
          },
        ],
      });
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };
  return (
    <>
      {openDeleteModal && (
        <Modal
          title="댓글 삭제하기"
          visible={true}
          onOk={onClickDelete}
          onCancel={handleCancel}
        >
          <div> 비밀번호를 입력하세요</div>
          <input onChange={onChangeDeletePassword}></input>
        </Modal>
      )}
      {!isEdit && (
        <S.CommentListWrapper>
          <S.ProfileImg>
            <img src="/ProfileIcon.png"></img>
          </S.ProfileImg>
          <S.inforWrapper>
            <S.inforHeader>
              <S.commentWriter>{props.el.writer}</S.commentWriter>
              <S.commentRating>
                <Rate value={props.el.rating} />
              </S.commentRating>
            </S.inforHeader>
            <S.inforContents>{props.el.contents}</S.inforContents>
            <S.inforCreatedAt>
              {props.el.createdAt.slice(0, 10)}
            </S.inforCreatedAt>
          </S.inforWrapper>
          <S.BtnWrapper>
            <S.updateBtn onClick={onClickChange} id={props.el._id}>
              <img src="/updateIcon.png"></img>
            </S.updateBtn>
            <S.deleteBtn id={props.el?._id} onClick={onClickOpenDeleteModal}>
              <img src="/deleteIcon.png"></img>
            </S.deleteBtn>
          </S.BtnWrapper>
          <S.devideLine></S.devideLine>
        </S.CommentListWrapper>
      )}
      {isEdit && (
        <CommentContainer
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          el={props.el}

          // onClickUpdate={onClickUpdate}
        />
      )}
    </>
  );
}

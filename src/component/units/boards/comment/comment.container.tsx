import CommentPresenter from "./comment.presenter";
import { CREATE_BOARD_COMMENT, UPDATE_BOARD_COMMENT } from "./comment.queries";
import { FETCH_BOARD_COMMENTS } from "../commentList/commentList.queries";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useRouter } from "next/router";

export default function CommentContainer(props: any) {
  const router = useRouter();

  // API
  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);
  const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);
  // State

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [rating, setRating] = useState(0);

  // 이벤트핸들러 - inputValue
  const onChangeWriter = (event: any) => {
    setWriter(event.target.value);
  };
  const onChangePwd = (event: any) => {
    setPassword(event.target.value);
  };
  const onChangeContents = (event: any) => {
    setContents(event.target.value);
  };
  const onChangeRating = (event: any) => {
    setRating(event);
  };

  // 등록하기 이벤트
  const onClickCreateComment = async () => {
    if (writer === "" || password === "" || contents === "") return;

    const result = await createBoardComment({
      variables: {
        boardId: router.query._id,
        createBoardCommentInput: {
          writer,
          password,
          contents,
          rating,
        },
      },
      refetchQueries: [
        {
          query: FETCH_BOARD_COMMENTS,
          variables: { boardId: router.query._id },
        },
      ],
    });

    console.log(result);
    console.log("create작동중");
  };

  const onClickUpdate = async (event: any) => {
    console.log("h");

    if (!contents) {
      alert("내용이 수정되지 않았습니다!");
      return;
    }
    if (!password) {
      alert("비밀번호를 입력하세요!");
      return;
    }
    try {
      interface IUpdateBoardCommentInput {
        contents?: string;
        rating?: number;
      }
      const updateBoardCommentInput: IUpdateBoardCommentInput = {};
      if (contents) updateBoardCommentInput.contents = contents;
      if (rating !== props.el?.rating) updateBoardCommentInput.rating = rating;

      await updateBoardComment({
        variables: {
          updateBoardCommentInput,
          password,
          boardCommentId: props.el?._id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query._id },
          },
        ],
      });
      props.setIsEdit(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <CommentPresenter
      onClickCreateComment={onClickCreateComment}
      onChangeWriter={onChangeWriter}
      onChangePwd={onChangePwd}
      onChangeContents={onChangeContents}
      setRating={setRating}
      onChangeRating={onChangeRating}
      onClickUpdate={onClickUpdate}
      contents={contents}
      el={props.el}
      isEdit={props.isEdit}
    />
  );
}

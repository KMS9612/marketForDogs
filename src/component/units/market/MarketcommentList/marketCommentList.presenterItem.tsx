import BtnLogin from "../../../../commons/btns/btn-login";
import styled from "@emotion/styled";
import MarketCommentPresenter from "../Marketcomment/marketComment.presenter";
import { ChangeEvent, useState } from "react";
import { gql, useMutation, useQuery } from "@apollo/client";
import { update } from "lodash";
import { input } from "../../signin/signin.styles";
import { FETCH_USED_ITEM_QUESTIONS } from "./marketCommentList.queries";
import { useRouter } from "next/router";
import CommentAnswer from "../commentAnswer/commentAnswer";

const FETCH_USED_ITEM_QUESTION_ANSWERS = gql`
  query fetchUseditemQuestionAnswers($page: Int, $useditemQuestionId: ID!) {
    fetchUseditemQuestionAnswers(
      page: $page
      useditemQuestionId: $useditemQuestionId
    ) {
      _id
      contents
    }
  }
`;
const CREATE_USED_ITEM_QUESTION_ANSWER = gql`
  mutation createUseditemQuestionAnswer(
    $createUseditemQuestionAnswerInput: CreateUseditemQuestionAnswerInput!
    $useditemQuestionId: ID!
  ) {
    createUseditemQuestionAnswer(
      createUseditemQuestionAnswerInput: $createUseditemQuestionAnswerInput
      useditemQuestionId: $useditemQuestionId
    ) {
      _id
      contents
    }
  }
`;
const UPDATE_USED_ITEM_QUESTION = gql`
  mutation updateUseditemQuestion(
    $updateUseditemQuestionInput: UpdateUseditemQuestionInput!
    $useditemQuestionId: ID!
  ) {
    updateUseditemQuestion(
      updateUseditemQuestionInput: $updateUseditemQuestionInput
      useditemQuestionId: $useditemQuestionId
    ) {
      _id
      contents
    }
  }
`;
const DELETE_USED_ITEM_QUESTION_ANSWER = gql`
  mutation deleteUseditemQuestionAnswer($useditemQuestionAnswerId: ID!) {
    deleteUseditemQuestionAnswer(
      useditemQuestionAnswerId: $useditemQuestionAnswerId
    )
  }
`;

const UPDATE_USED_ITEM_QUESTION_ANSWER = gql`
  mutation updateUseditemQuestionAnswer(
    $updateUseditemQuestionAnswerInput: UpdateUseditemQuestionAnswerInput!
    $useditemQuestionAnswerId: ID!
  ) {
    updateUseditemQuestionAnswer(
      updateUseditemQuestionAnswerInput: $updateUseditemQuestionAnswerInput
      useditemQuestionAnswerId: $useditemQuestionAnswerId
    ) {
      _id
      contents
    }
  }
`;
const Wrapper = styled.div`
  width: 1200px;
  margin-bottom: 50px;

  border: 1px solid #bdbdbd;
`;
const Writer = styled.div`
  font-size: 18px;
  font-weight: 600;
`;
const Contents = styled.div``;
const BtnWrapper = styled.div``;
const Comment2 = styled.div`
  font-size: 24px;
`;
const Comment2Wrapper = styled.div`
  width: 100%;
  height: 100px;
  box-shadow: 0px 4px 20px rgb(1 1 1 / 20%);
  padding-left: 50px;
  margin-bottom: 30px;
`;
export default function MarketCommentListPresenterItem(props: any) {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  const [editContents, setEditContents] = useState("");
  const [isEditAnswer, setIsEditAnswer] = useState(false);
  const [EditAnswerContents, setEditAnswerContents] = useState("");
  const [createUseditemQuestionAnswer] = useMutation(
    CREATE_USED_ITEM_QUESTION_ANSWER
  );
  const [deleteUseditemQuestionAnswer] = useMutation(
    DELETE_USED_ITEM_QUESTION_ANSWER
  );
  const [updateUseditemQuestion] = useMutation(UPDATE_USED_ITEM_QUESTION);
  const [updateUseditemQuestionAnswer] = useMutation(
    UPDATE_USED_ITEM_QUESTION_ANSWER
  );
  const [contents2, setContents2] = useState("");
  const [isComment, setIsComment] = useState(false);
  const { data, refetch } = useQuery(FETCH_USED_ITEM_QUESTION_ANSWERS, {
    variables: {
      useditemQuestionId: props.el._id,
    },
  });

  // ????????? ????????????
  const onClickDeleteAnswer = (event: any) => {
    deleteUseditemQuestionAnswer({
      variables: {
        useditemQuestionAnswerId: event.target.id,
      },
      refetchQueries: [
        {
          query: FETCH_USED_ITEM_QUESTION_ANSWERS,
          variables: {
            page: 1,
            useditemQuestionId: props.el._id,
          },
        },
      ],
    });
    setIsComment(false);
    refetch();
  };
  // ????????? ???????????? ??????
  const onClickEditAnswerToggle = () => {
    setIsEditAnswer((prev) => !prev);
  };
  // ????????? ???????????? ??????
  const onChangeEditAnswer = (ev: ChangeEvent<HTMLInputElement>) => {
    setEditAnswerContents(ev.target.value);
  };
  // ????????? ????????????
  const onClickEditAnswer = (event: any) => {
    updateUseditemQuestionAnswer({
      variables: {
        updateUseditemQuestionAnswerInput: {
          contents: EditAnswerContents,
        },
        useditemQuestionAnswerId: event.target.id,
      },
    });
    alert("????????????!");
    setIsEditAnswer((prev) => !prev);
    refetch();
  };

  // ???????????? ?????? ?????? ??????
  const onChangeEditContents = (event: any) => {
    setEditContents(event.target.value);
  };
  // ???????????? ?????????????????? ??????
  const onClickToggle = () => {
    setIsEdit((prev) => !prev);
  };
  // ?????? ???????????? ???????????? ?????? ??? update??? ?????? ?????????
  const onClickUpdateQuestion = async () => {
    await updateUseditemQuestion({
      variables: {
        updateUseditemQuestionInput: {
          contents: editContents,
        },
        useditemQuestionId: props.el._id,
      },
    });
    console.log("????????????!");
    setIsEdit((prev) => !prev);
    refetch();
  };

  const onClickComment2 = () => {
    setIsComment((prev) => !prev);
  };
  const onChangeContents2 = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents2(event.target.value);
    console.log(event.target.value);
  };
  const onClickComment2Submit = async (event: any) => {
    const result = await createUseditemQuestionAnswer({
      variables: {
        createUseditemQuestionAnswerInput: {
          contents: contents2,
        },
        useditemQuestionId: event.target.id,
      },
    });

    refetch();
    setIsComment((prev) => !prev);
  };
  return (
    <Wrapper>
      <Writer>{props.el.user.name}</Writer>
      {!isEdit && <Contents>??????: {props.el.contents}</Contents>}
      {isEdit && (
        <div>
          <input type={"text"} onChange={onChangeEditContents} />
          <button onClick={onClickUpdateQuestion}>????????????</button>
        </div>
      )}
      <BtnWrapper>
        <BtnLogin
          id={props.el._id}
          BtnName={"???????????????"}
          onClickEvent={onClickComment2}
        />
        <BtnLogin
          id={props.el._id}
          BtnName={"????????????"}
          onClickEvent={props.onClickDeleteComment}
        ></BtnLogin>
        <BtnLogin BtnName={"????????????"} onClickEvent={onClickToggle}></BtnLogin>
        {/* ????????? ????????? (????????? ???????????????) */}
        {data?.fetchUseditemQuestionAnswers.map((el: any) => (
          <Comment2Wrapper key={props.uuidv4}>
            {isEditAnswer ? (
              <CommentAnswer
                el={el}
                key={props.uuidv4}
                onChangeEditAnswer={onChangeEditAnswer}
                onClickEditAnswer={onClickEditAnswer}
              />
            ) : (
              <Comment2>??????:{el.contents}</Comment2>
            )}
            <BtnLogin
              BtnName={"????????????"}
              onClickEvent={onClickDeleteAnswer}
              id={el._id}
            />
            <BtnLogin
              BtnName={isEditAnswer ? "????????????" : "????????????"}
              onClickEvent={onClickEditAnswerToggle}
            />
          </Comment2Wrapper>
        ))}
        {/* ?????????????????? ????????? => ????????????????????? ????????? */}
        {isComment && (
          <MarketCommentPresenter
            isComment={isComment}
            onChangeContents2={onChangeContents2}
            onClickComment2Submit={onClickComment2Submit}
            el={props.el}
          />
        )}
      </BtnWrapper>
    </Wrapper>
  );
}

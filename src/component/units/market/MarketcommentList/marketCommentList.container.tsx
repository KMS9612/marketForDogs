import { useMutation, useQuery } from "@apollo/client";
import MarketCommentListPresenter from "./marketCommentList.presenter";
import {
  DELETE_USED_ITEM_QUESTION,
  FETCH_USED_ITEM_QUESTIONS,
  FETCH_USED_ITEM_QUESTION_ANSWERS,
} from "./marketCommentList.queries";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";

export default function MarketCommentListContainer() {
  const router = useRouter();
  const [deleteUseditemQuestion] = useMutation(DELETE_USED_ITEM_QUESTION);
  const { data } = useQuery(FETCH_USED_ITEM_QUESTIONS, {
    variables: {
      page: 1,
      useditemId: router.query.MarketId,
    },
  });
  const { data: dataAnswers, refetch } = useQuery(
    FETCH_USED_ITEM_QUESTION_ANSWERS,
    {
      variables: {
        useditemQuestionId: data?.fetchUseditemQuestions._id,
      },
    }
  );

  const onClickDeleteComment = (event: any) => {
    deleteUseditemQuestion({
      variables: {
        useditemQuestionId: event.target.id,
      },
    });
    refetch();
  };

  return (
    <MarketCommentListPresenter
      data={data}
      uuidv4={uuidv4}
      dataAnswers={dataAnswers}
      onClickDeleteComment={onClickDeleteComment}
    />
  );
}

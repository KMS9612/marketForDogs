import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { FETCH_USED_ITEM_QUESTIONS } from "../MarketcommentList/marketCommentList.queries";
import MarketCommentPresenter from "./marketComment.presenter";
import {
  CREATE_USED_ITEM_QUESTION,
  FETCH_USER_LOGGED_IN,
} from "./marketComment.queries";

export default function MarketCommentContainer() {
  const router = useRouter();
  const [createUseditemQuestion] = useMutation(CREATE_USED_ITEM_QUESTION);
  const [contents, setContents] = useState("");

  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  const onChangeContents = (ev: any) => {
    setContents(ev.target.value);
  };

  const onClickComment = async (ev: any) => {
    const result = await createUseditemQuestion({
      variables: {
        createUseditemQuestionInput: {
          contents,
        },
        useditemId: router.query.MarketId,
      },
      refetchQueries: [
        {
          query: FETCH_USED_ITEM_QUESTIONS,
          variables: {
            page: 1,
            useditemId: router.query.MarketId,
          },
        },
      ],
    });
  };

  return (
    <MarketCommentPresenter
      onClickComment={onClickComment}
      onChangeContents={onChangeContents}
      isComment={false}
      data={data}
    />
  );
}

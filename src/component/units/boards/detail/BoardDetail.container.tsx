import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import BoardDetailPresenter from "./BoardDetail.presenter";
import {
  FETCH_BOARD,
  DELETE_BOARD,
  DISLIKE_BOARD,
  LIKE_BOARD,
} from "./BoardDetail.qeries";

export default function BoardDetailContainer() {
  // ---router----
  const router = useRouter();
  // API
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query._id,
    },
  });
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [likeBoard] = useMutation(LIKE_BOARD);
  const [dislikeBoard] = useMutation(DISLIKE_BOARD);
  // 변수

  console.log(data?.fetchBoard._id);
  // 클릭 이벤트
  const onClickMoveToEdit = () => {
    router.push(`/board/board-detail/${router.query._id}/edit`);
  };

  const onClickMoveToList = () => {
    router.push(`/board/list`);
  };
  const onClickLike = async (event: any) => {
    const result = await likeBoard({
      variables: { boardId: router.query._id },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: router.query._id },
        },
      ],
    });
    console.log(result);
  };
  const onClickDislike = async (event: any) => {
    const result = await dislikeBoard({
      variables: { boardId: router.query._id },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: {
            boardId: router.query._id,
          },
        },
      ],
    });
    console.log(result);
  };

  const onClickDelete = async () => {
    const result = await deleteBoard({
      variables: { boardId: router.query._id },
    });
    router.push(`/board/list`);
    console.log(result);
    alert("게시글이 삭제되었습니다.");
  };
  console.log(router.query.youtubeUrl);
  return (
    <BoardDetailPresenter
      onClickMoveToEdit={onClickMoveToEdit}
      onClickMoveToList={onClickMoveToList}
      onClickDelete={onClickDelete}
      onClickLike={onClickLike}
      onClickDislike={onClickDislike}
      data={data}
    />
  );
}

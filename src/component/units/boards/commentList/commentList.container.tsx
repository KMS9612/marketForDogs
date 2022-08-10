import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { FETCH_BOARD_COMMENTS } from "./commentList.queries";
import CommentListPresenter from "./commentList.presenter";
export default function CommentListContainer() {
  const router = useRouter();
  const { data, fetchMore } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: { boardId: router.query._id },
  });

  const onLoadMore = () => {
    if (!data) return;

    fetchMore({
      variables: { page: Math.ceil(data?.fetchBoardComments.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchBoardComments)
          return { fetchBoardComments: [...prev.fetchBoardComments] };
        return {
          fetchBoardComments: [
            ...prev.fetchBoardComments,
            ...fetchMoreResult.fetchBoardComments,
          ],
        };
      },
    });
  };

  return <CommentListPresenter data={data} onLoadMore={onLoadMore} />;
}

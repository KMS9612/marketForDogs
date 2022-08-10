import NewBoardContainer from "../../../../../src/component/units/boards/new/NewBoard.container";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      likeCount
      dislikeCount
      youtubeUrl
    }
  }
`;

export default function BoardEditPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query._id,
    },
  });
  return <NewBoardContainer isEdit={true} data={data} />;
}

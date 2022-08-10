import CommentContainer from "../../../../src/component/units/boards/comment/comment.container";
import BoardDetailContainer from "../../../../src/component/units/boards/detail/BoardDetail.container";
import CommentListContainer from "../../../../src/component/units/boards/commentList/commentList.container";
export default function boardDetail() {
  return (
    <>
      <BoardDetailContainer />
      <CommentContainer />
      <CommentListContainer />
    </>
  );
}

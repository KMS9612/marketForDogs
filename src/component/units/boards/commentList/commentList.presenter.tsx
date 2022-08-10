import InfiniteScroll from "react-infinite-scroller";
import CommentListPresenterItem from "./commentList.presenterItem";

export default function CommentListPresenter(props: any) {
  return (
    <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
      {props.data?.fetchBoardComments.map((el: any) => (
        <CommentListPresenterItem key={el._id} el={el} />
      ))}
    </InfiniteScroll>
  );
}

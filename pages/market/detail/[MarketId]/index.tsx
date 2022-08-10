import MarketDetailContainer from "../../../../src/component/units/market/detail/marketDetail.container";
import MarketCommentContainer from "../../../../src/component/units/market/Marketcomment/marketComment.container";
import MarketCommentListContainer from "../../../../src/component/units/market/MarketcommentList/marketCommentList.container";

export default function MarketDetailPage() {
  return (
    <div>
      <MarketDetailContainer />
      <MarketCommentContainer />
      <MarketCommentListContainer />
    </div>
  );
}

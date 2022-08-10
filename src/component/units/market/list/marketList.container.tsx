import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import MarketListPresenter from "./marketList.presenter";
import { FETCH_USED_ITEMS } from "./marketList.queries";

export default function MarketListContainer() {
  const router = useRouter();
  const { data, fetchMore } = useQuery(FETCH_USED_ITEMS);
  const onClickMoveToDetail = (event: any) => {
    const TodayItem = event.currentTarget.id;
    localStorage.setItem("Today", JSON.stringify(TodayItem));
    router.push(`/market/detail/${event.currentTarget.id}`);
  };
  const onClickCreate = () => {
    router.push(`/market/new`);
  };
  // 무한스크롤 함수
  const loadFunc = () => {
    if (!data) return;

    fetchMore({
      variables: { page: Math.ceil(data?.fetchUseditems.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchUseditems)
          return { fetchUseditems: [...prev.fetchUseditems] };
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };

  return (
    <MarketListPresenter
      data={data}
      onClickMoveToDetail={onClickMoveToDetail}
      onClickCreate={onClickCreate}
      loadFunc={loadFunc}
    />
  );
}

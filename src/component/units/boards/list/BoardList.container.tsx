import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardPageNation from "../../../../commons/pagination/pagination";
import BoardListPresenter from "./BoardList.presenter";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardList.queries";
import _ from "lodash";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

export default function BoardListCotainer() {
  // api와 라우터 선언
  const router = useRouter();
  const { data, refetch } = useQuery(FETCH_BOARDS);
  const { data: boardsCountData } = useQuery(FETCH_BOARDS_COUNT);
  const [keyword, setKeyword] = useState("");
  // 이벤트 핸들러
  const onClickMoveToDetail = (event: any) => {
    router.push(`/board/board-detail/${event.currentTarget.id}`);
  };
  const onClickMovetoCreate = () => {
    router.push(`/board/new`);
  };

  // 검색하기
  const Debouncing = _.debounce((search: any) => {
    refetch({ search, page: 1 });
    setKeyword(search);
  }, 500);
  const onChangeSearch = (event: any) => {
    Debouncing(event.target.value);
  };
  // 페이지네이션 라스트페이지
  const lastPage = Math.ceil(boardsCountData?.fetchBoardsCount / 10);
  return (
    <div>
      <BoardListPresenter
        data={data}
        onClickMoveToDetail={onClickMoveToDetail}
        onClickMovetoCreate={onClickMovetoCreate}
        onChangeSearch={onChangeSearch}
        keyword={keyword}
        uuidv4={uuidv4}
      />
      <BoardPageNation refetch={refetch} lastPage={lastPage} />
    </div>
  );
}

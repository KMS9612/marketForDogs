import styled from "@emotion/styled";
import { useState } from "react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const PageNum = styled.span`
  margin: 20px;
  padding: 10px;
  font-size: 18px;
  font-weight: 700;
`;

const PrevButton = styled.button`
  width: 50px;
  height: 50px;
`;
const NextButton = styled.button`
  width: 50px;
  height: 50px;
`;

export default function BoardPagination(props: any) {
  const [startPage, setStartPage] = useState(1);
  const [changeColor, setChangeColor] = useState("");

  const onClickPage = (event: any) => {
    props.refetch({ page: Number(event.target.id) });
    setChangeColor(event.target.id);
  };
  const onClickPrevPage = () => {
    if (startPage === 1) {
      return;
    }
    setStartPage((prev) => prev - 10);
  };
  const onClickNextPage = () => {
    if (!(props.lastPage >= startPage + 10)) {
      return;
    }
    setStartPage((prev) => prev + 10);
    props.refetch({ page: startPage + 10 });
  };
  return (
    <Wrapper>
      <PrevButton
        onClick={onClickPrevPage}
        disabled={startPage === 1 ? true : false}
      >
        ≪
      </PrevButton>
      {new Array(10).fill(1).map(
        (_, index) =>
          index + startPage <= props.lastPage && (
            <PageNum
              style={
                Number(changeColor) === index + startPage
                  ? { backgroundColor: "#bdbdbd" }
                  : {}
              }
              key={index + startPage}
              onClick={onClickPage}
              id={String(index + startPage)}
            >
              {index + startPage}
            </PageNum>
          )
      )}

      <NextButton
        onClick={onClickNextPage}
        disabled={startPage + 10 >= props.lastPage ? true : false}
      >
        ≫
      </NextButton>
    </Wrapper>
  );
}

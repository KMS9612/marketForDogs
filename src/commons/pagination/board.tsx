import styled from "@emotion/styled";
import { Fragment } from "react";

const WrapperTable = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 1000px;
  font-weight: 700;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
const ListWriter = styled.div`
  margin-right: 100px;

  font-size: 50px;
`;
const ListContents = styled.div`
  font-size: 50px;
`;

const ListWriterT = styled.div`
  margin-right: 100px;
`;
const ListContentsT = styled.div``;

export default function BoardList(props) {
  return (
    <>
      <WrapperTable>
        <ListWriter>작성자</ListWriter>
        <ListContents>내용</ListContents>
      </WrapperTable>
      {props.data?.fetchBoards.map((el: any) => (
        <Wrapper key={el._id}>
          <ListWriterT>{el.writer}</ListWriterT>
          <ListContentsT>{el.contents}</ListContentsT>
        </Wrapper>
      ))}
    </>
  );
}

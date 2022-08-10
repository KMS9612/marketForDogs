import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  padding-bottom: 50px;
`;

export const body = styled.div`
  width: 1200px;
  box-sizing: border-box;
  border-bottom: 1px solid black;
  border-top: 1px solid black;
`;

export const BoardListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 12px 20px;
  border-top: 1px solid #d2d2d2;
  cursor: pointer;
`;

export const BoardListWrapperPin = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 12px 20px;
`;

export const BoardListNumber = styled.div`
  color: gray;
`;

export const BoardListTitle = styled.div`
  width: 180px;
  text-align: center;
  color: gray;
`;

export const BoardListWriter = styled.div`
  color: gray;
`;

export const BoardListDate = styled.div`
  color: gray;
`;

export const BoardListNumberPin = styled.div`
  font-weight: 700;
`;

export const BoardListWriterPin = styled.div`
  font-weight: 700;
`;

export const BoardListTitlePin = styled.div`
  font-weight: 700;
`;

export const BoardListDatePin = styled.div`
  font-weight: 700;
`;

export const CreateBoardButton = styled.button`
  background-color: #ffd600;
  width: 120px;
  height: 52px;
  border: 1px solid #ffd600;
  border-radius: 12px;
  font-size: 23;
  font-weight: 700;
  cursor: pointer;
`;

export const HeadWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Search = styled.input``;

export const Word = styled.span`
  background-color: ${(props: any) => (props.isMatched ? "beige" : "#fff")};
`;

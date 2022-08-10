import styled from "@emotion/styled";

const Wrapper = styled.div`
  font-weight: 700;
`;

const Search = styled.input`
  border: 1px solid #bdbdbd;
  border-radius: 5px;
`;

export default function SearchPage(props: any) {
  return (
    <Wrapper>
      검색: <Search onChange={props.onChangeSearch} />
    </Wrapper>
  );
}

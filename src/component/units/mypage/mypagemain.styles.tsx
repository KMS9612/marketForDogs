import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const NavWrapper = styled.div`
  width: 300px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const Nav = styled.div`
  font-size: 32px;
  font-weight: 700;
  color: #ffd600;
`;

export const SoldListWrapper = styled.div`
  width: 100%;
`;

export const SoldWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  border: 1px solid #bdbdbd;
`;

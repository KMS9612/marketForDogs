import styled from "@emotion/styled";

export const Wrapper = styled.div``;
export const Title = styled.div`
  font-size: 20px;
  font-family: "Courier New", Courier, monospace;
`;

export const TagContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid grey;
  border-radius: 12px;
  width: 60vw;
  height: 60px;
`;

export const Hash = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: blueviolet;
  border-radius: 12px;
  padding: 0 10px;
  margin: 10px;
  height: 40px;
`;
export const HashName = styled.h3`
  color: white;
  margin-right: 10px;
  margin-bottom: 2px;
`;
export const HashBtn = styled.button`
  border: none;
  border-radius: 30%;
  width: 30px;
  height: 10px;
  margin-bottom: 25px;
  background-color: blueviolet;
  cursor: pointer;
`;
export const InputBox = styled.input`
  border: none;
  height: 30px;
  font-size: 32px;
  &:focus {
    outline: none;
  }
  @media screen and (max-width: 820px) {
    font-size: 20px;
  }
`;

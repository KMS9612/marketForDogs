import styled from "@emotion/styled";

export const OutLine = styled.div`
  width: 100%;
  background-color: #fff;
  border: 1px solid #bdbdbd;
  padding: 20px;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 400px;
`;
export const Logo = styled.div`
  width: 100%;
  font-weight: 700;
  font-size: 24px;
`;
export const Input = styled.input`
  border: none;
  border-bottom: 2px solid #bdbdbd;
  width: 400px;

  font-size: 24px;
  text-align: start;
  outline-style: none;
`;
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 100%;
`;

export const Button = styled.button`
  width: 500px;
  height: 90px;
  font-size: 25px;
  font-weight: 600;
  border-radius: 15px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #ffd600;
  }
`;

export const SignIn = styled.button`
  width: 100%;
  height: 45px;
  border-radius: 15px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background-color: #ffd600;
  }
`;

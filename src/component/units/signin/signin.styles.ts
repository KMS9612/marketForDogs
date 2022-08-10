import styled from "@emotion/styled";

export const OutLine = styled.div`
  width: 570px;
  height: 550px;
  padding: 20px;
  border: 1px solid #bdbdbd;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.div`
  margin-bottom: 50px;
  font-size: 35px;
  font-weight: 700;
`;

export const inputWrapper = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
`;
export const inputBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: 15px;
  font-weight: 600;
`;
export const input = styled.input`
  width: 100%;
  height: 35px;
  margin-top: 10px;

  border-radius: 5px;
  border: 1px solid #bdbdbd;
`;

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 150px;
`;

export const SubmitBtn = styled.button`
  background-color: #ffd600;
  border: none;
  border-radius: 10px;
  width: 60px;
  height: 30px;
  font-weight: 600;
`;

export const CancelBtn = styled.button`
  background-color: #bdbdbd;
  border: none;
  border-radius: 10px;
  width: 60px;
  height: 30px;
  font-weight: 600;
`;

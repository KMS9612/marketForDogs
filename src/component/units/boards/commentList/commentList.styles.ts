import styled from "@emotion/styled";

export const commentTitle = styled.div`
  font-size: 18px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 50px 10px;
`;

export const commentInforWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 15px;
`;

export const commentInforInput = styled.input`
  width: 180px;
  height: 52px;
  background-color: #ffffff;
  border: 1px solid #bdbdbd;
  margin-right: 15px;
`;

export const inputWrapper = styled.div`
  width: 100%;
  border: 1px solid #bdbdbd;
`;

export const CommentInput = styled.textarea`
  width: 100%;
  height: 108px;
  text-align: start;
  border: none;
  resize: none;
`;

export const commentInforRating = styled.div``;

export const inputFunctionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const inputFunctionLimit = styled.div`
  color: #bdbdbd;
`;

export const inputFunctionBtn = styled.button`
  width: 91px;
  height: 52px;
  background-color: #000000;
  border: 1px solid #000000;
  color: #ffffff;
  padding: 14px 16px;
  cursor: pointer;
`;

export const CommentListWrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: row;
  padding: 20px;
  margin-bottom: 20px;
  border: 1px solid #d2d2d2;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  height: 150px;
`;

export const ProfileImg = styled.div`
  margin: 10px;
`;
export const inforWrapper = styled.div`
  width: 100%;
`;
export const inforHeader = styled.div`
  display: flex;
  flex-direction: row;
`;

export const commentWriter = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin-right: 12px;
`;
export const commentRating = styled.div``;

export const inforContents = styled.div`
  font-size: 16px;
  font-weight: 400;
`;
export const inforCreatedAt = styled.div`
  color: #bdbdbd;
  font-size: 12px;
  font-weight: 400;
`;

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100px;
  justify-content: space-around;
`;
export const updateBtn = styled.div`
  cursor: pointer;
`;
export const deleteBtn = styled.div`
  cursor: pointer;
`;
export const devideLine = styled.div`
  border-top: 1px solid #bdbdbd;
`;

// 수정하기

export const ContentsEdit = styled.textarea`
  width: 100%;
  height: 120px;
`;

export const EditCancelBtn = styled.div``;

export const EditSubmitBtn = styled.button`
  height: 50px;
  width: 100px;
  border: 1px solid #000000;
  background-color: #000000;
  color: #fff;
  margin-left: 10px;
`;

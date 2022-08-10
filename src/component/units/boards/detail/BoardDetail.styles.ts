import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 1200px;
  padding: 70px;
  margin: 150px;
  border: 1px solid #d2d2d2;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-top: 50px;
`;

export const WriterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
`;

export const WriterLeft = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

export const Profile = styled.div`
  margin-right: 10px;
`;

export const infor = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ProfileName = styled.div`
  margin-right: 10px;
  font-size: 20px;
`;

export const ProfileDate = styled.div`
  margin-right: 10px;
  font-size: 6px;
  color: #d2d2d2;
`;

export const WriterRight = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 70px;
`;

export const WriterRightImg = styled.img`
  margin-right: 30px;
  width: 20px;
  height: 20px;
`;

export const devideLine = styled.div`
  border-top: 1px solid #d2d2d2;
  margin: 30px 0px;
`;

export const MainTitle = styled.div`
  font-size: 42px;
  margin: 30px 0px;
  width: 100%;
  padding-left: 35px;
  text-align: left;
`;

export const MainImage = styled.img``;

export const MainContents = styled.div`
  margin: 30px 0px;
`;

export const youtube = styled.div`
  margin-bottom: 100px;
`;

export const likeCountWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px 0px;
`;

export const likeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
`;

export const likeImg = styled.img`
  margin-bottom: 12px;
`;

export const dislikeWrapper = styled.div``;

export const like = styled.div`
  margin-right: 15px;
  color: #ffd600;
`;

export const dislike = styled.div``;
export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 75%;
  height: 100px;
  margin-left: 120px;
`;

export const updateBtn = styled.button`
  border: 1px solid #ffd600;
  width: 130px;
  height: 40px;
  margin-right: 15px;
  cursor: pointer;
  background-color: #ffd600;
  font-weight: 700;
`;

export const deleteBtn = styled.button`
  border: 1px solid #ffd600;
  width: 130px;
  height: 40px;
  cursor: pointer;
  background-color: #ffd600;
  font-weight: 700;
`;

export const moveToListBtn = styled.button`
  border: 1px solid #ffd600;
  width: 130px;
  height: 40px;
  margin-right: 15px;
  cursor: pointer;
  background-color: #ffd600;
  font-weight: 700;
`;

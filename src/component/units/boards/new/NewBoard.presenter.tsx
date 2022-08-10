import * as S from "./NewBoard.styles";
import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";

export default function NewBoardPresenter(props: any) {
  return (
    <S.Wrapper>
      <S.Logo>{props.isEdit ? "게시물 수정" : "게시물 등록"}</S.Logo>
      <S.WriteWrapper>
        <S.Writebox>
          <S.Writer>작성자</S.Writer>
          <S.WriteInput
            placeholder="이름을 적어주세요."
            onChange={props.saveWrite}
            defaultValue={props.data?.fetchBoard.writer}
          />
          <S.Err>{props.WriterErr}</S.Err>
        </S.Writebox>
        <S.Writebox>
          <S.Pwd>비밀번호</S.Pwd>
          <S.PwdInput
            placeholder="비밀번호를 입력해주세요"
            type="password"
            onChange={props.savePwdF}
            defaultValue={props.data?.fetchBoard.password}
          />
          <S.Err>{props.PwdErr}</S.Err>
        </S.Writebox>
      </S.WriteWrapper>

      <S.HeadingWrapper>
        <S.Title>제목</S.Title>
        <S.TitleInput
          placeholder="제목을 작성해주세요."
          onChange={props.saveTitleF}
          defaultValue={props.data?.fetchBoard.title}
        />
        <S.Err>{props.TitleErr}</S.Err>
      </S.HeadingWrapper>

      <S.MainWrapper>
        <S.Main>내용</S.Main>
        <S.MainInput
          placeholder="내용을 입력해주세요"
          onChange={props.saveMainF}
          defaultValue={props.data?.fetchBoard.contents}
        />
        <S.Err>{props.MainErr}</S.Err>
      </S.MainWrapper>

      <S.Address>주소</S.Address>
      <S.AddressWrapper>
        <S.AddressInput1 placeholder="07250" readOnly value={props.zipcode} />
        <S.AddresBtn onClick={props.onToggleModal}>우편번호 검색</S.AddresBtn>
        {props.isModalVisible && (
          <Modal
            title="우편번호 찾기"
            visible={true}
            onOk={props.onToggleModal}
            onCancel={props.onToggleModal}
            keyboard={true}
          >
            <DaumPostcode onComplete={props.handleComplete}></DaumPostcode>
          </Modal>
        )}
      </S.AddressWrapper>
      <S.AddressWrapper2>
        <S.AddressInput2 readOnly value={props.Address} />
        <S.AddressInput2 onChange={props.saveAddressDetail} />
        <S.Err>{props.AddressErr}</S.Err>
      </S.AddressWrapper2>

      <S.YoutubeWrapper>
        <S.Youtube>유튜브</S.Youtube>
        <S.YoutubeInput
          placeholder="링크를 복사해주세요."
          onChange={props.onChangeYoutube}
          defaultValue={props.data?.fetchBoard.youtubeUrl}
        />
      </S.YoutubeWrapper>

      <S.Photo>사진첨부</S.Photo>
      <S.hiddenBtn
        type="file"
        ref={props.imgRef}
        onChange={props.onChangeSaveImg}
      />
      <S.PhotoWrapper>
        <S.PhotoBox onClick={props.onClickRef}>
          {props.imgUrl ? (
            <img
              width={"60px"}
              height={"60px"}
              src={`https://storage.googleapis.com/${props.imgUrl}`}
            />
          ) : (
            <div>Img</div>
          )}
        </S.PhotoBox>
        <S.PhotoBox>Img</S.PhotoBox>
        <S.PhotoBox>Img</S.PhotoBox>
      </S.PhotoWrapper>

      <S.Setting>메인 설정</S.Setting>
      <S.SettingWrapper>
        <S.SettingCheck type="radio" name="setting" />
        유튜브
        <S.SettingCheck type="radio" name="setting" />
        사진
      </S.SettingWrapper>

      <S.SubmitWrapper>
        <S.Submit
          id="submit"
          onClick={props.isEdit ? props.onClickEdit : props.check}
          disabled={props.isEdit ? console.log("수정완료") : props.btnDisabled}
        >
          {props.isEdit ? "수정" : "등록"}하기
        </S.Submit>
      </S.SubmitWrapper>
    </S.Wrapper>
  );
}

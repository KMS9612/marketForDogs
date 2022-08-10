import * as S from "./marketNew.styles";
import InputItem from "../../../../commons/inputs/inputItem";
import BtnLogin from "../../../../commons/btns/btn-login";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import Uploads01 from "../../../../commons/uploads/01/Uploads01.container";
import Tag from "../../../../commons/tags/tags";
import KakaoMap from "../../../../commons/kakaomap";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function MarketNewPresenter(props: any) {
  const Contents = props.data?.fetchUseditem.contents;
  return (
    <S.Wrapper>
      <S.Header>상품 {props.isEdit ? "수정" : "등록"}하기</S.Header>
      <form
        onSubmit={props.handleSubmit(
          props.isEdit ? props.onClickUpdate : props.onClickSubmit
        )}
      >
        <S.InputWrapper>
          <S.InputText>상품명</S.InputText>
          <InputItem
            type={"text"}
            placeholder={"상품명을 입력해주세요"}
            register={props.register("name")}
            default={props.data?.fetchUseditem.name}
          ></InputItem>
          {/* <S.ErrMessage>{props.fromState}</S.ErrMessage> */}
        </S.InputWrapper>
        <S.InputWrapper>
          <S.InputText>한줄요약</S.InputText>
          <InputItem
            type={"text"}
            placeholder={"한 줄 요약을 입력해주세요"}
            register={props.register("remarks")}
            default={props.data?.fetchUseditem.remarks}
          ></InputItem>
        </S.InputWrapper>
        <S.InputWrapper>
          <ReactQuill
            style={{ width: "100%", height: "270px", marginBottom: "30px" }}
            onChange={props.onChangeContents}
            defaultValue={props.data?.fetchUseditem.contents}
          />
        </S.InputWrapper>

        <S.InputWrapper>
          <S.InputText>판매가격</S.InputText>
          <InputItem
            type={"text"}
            placeholder={"판매 가격을 입력해주세요!"}
            register={props.register("price")}
            default={props.data?.fetchUseditem.price}
          ></InputItem>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.InputText>태그</S.InputText>
          <InputItem>
            <Tag></Tag>
          </InputItem>
        </S.InputWrapper>
        <S.GpsWrapper>
          <S.GpsMap>
            <KakaoMap {...props} />
          </S.GpsMap>
        </S.GpsWrapper>

        <S.InputWrapper>
          <S.ImgText>상품 이미지</S.ImgText>
          <S.ImgWrapper>
            {props.fileUrl.map((el: any, index: any) => (
              <Uploads01
                key={props.uuidv4}
                index={index}
                fileUrl={el}
                onChangeFileUrl={props.onChangeFileUrl}
              />
            ))}
          </S.ImgWrapper>
        </S.InputWrapper>
        <S.BtnWrapper>
          <BtnLogin
            BtnName={props.isEdit ? "수정하기" : "등록하기"}
            type={"submit"}
          />
        </S.BtnWrapper>
      </form>
    </S.Wrapper>
  );
}

import BtnLogin from "../../../../commons/btns/btn-login";
import * as S from "./marketDetail.styles";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Dompurify from "dompurify";
import KakaoMapDetail from "../../../../commons/kakaomapDetail";

export default function MarketDetailPresenter(props: any) {
  const imageSrc = [
    {
      original: `http://storage.googleapis.com/${props.data?.fetchUseditem.images[0]}`,
      thumbnail: `http://storage.googleapis.com/${props.data?.fetchUseditem.images[0]}`,
      originalWidth: "500px",
      originalHeight: "500px",
      thumbnailWidth: "50px",
      thumbnailHeight: "80px",
    },
    {
      original: `http://storage.googleapis.com/${props.data?.fetchUseditem.images[1]}`,
      thumbnail: `http://storage.googleapis.com/${props.data?.fetchUseditem.images[1]}`,
      originalWidth: "500px",
      originalHeight: "500px",
      thumbnailWidth: "50px",
      thumbnailHeight: "80px",
    },
    {
      original: `http://storage.googleapis.com/${props.data?.fetchUseditem.images[2]}`,
      thumbnail: `http://storage.googleapis.com/${props.data?.fetchUseditem.images[2]}`,
      originalWidth: "500px",
      originalHeight: "500px",
      thumbnailWidth: "50px",
      thumbnailHeight: "80px",
    },
  ];

  return (
    <S.OutLine>
      <S.Wrapper>
        <S.Header>상품 상세보기</S.Header>
        <S.ImgSection>
          {props.data?.fetchUseditem.images[0] ? (
            <ImageGallery
              items={imageSrc}
              onErrorImageURL={`http://storage.googleapis.com/${props.data?.fetchUseditem.images[0]}`}
            />
          ) : (
            <img
              style={{ width: "300px", height: "300px", borderRadius: "15px" }}
              src="/Logoimg/marketForDogs.png"
            ></img>
          )}
        </S.ImgSection>
        <S.TextSection>
          <S.TextWrapper>
            <S.Text>상품이름</S.Text>
            <S.DevideLine></S.DevideLine>
            <S.Name>{props.data?.fetchUseditem.name}</S.Name>
          </S.TextWrapper>
          <S.TextWrapper>
            <S.Text>한 줄 설명</S.Text>
            <S.DevideLine></S.DevideLine>
            <S.remarks> {props.data?.fetchUseditem.remarks}</S.remarks>
          </S.TextWrapper>
          <S.TextWrapper>
            <S.Text>내용</S.Text>
            <S.DevideLine></S.DevideLine>

            {typeof window !== "undefined" && (
              <S.Contents
                dangerouslySetInnerHTML={{
                  __html: Dompurify.sanitize(
                    props.data?.fetchUseditem.contents
                  ),
                }}
              />
            )}
          </S.TextWrapper>
          <S.TextWrapper>
            <S.Text>상품가격</S.Text>
            <S.DevideLine></S.DevideLine>

            <S.Price>{props.data?.fetchUseditem.price}</S.Price>
          </S.TextWrapper>
          <S.TextWrapper>
            <S.Text>태그</S.Text>
            <S.DevideLine></S.DevideLine>

            <S.Tags>{props.data?.fetchUseditem.tags}</S.Tags>
          </S.TextWrapper>
          <S.TextWrapper>
            <S.Text>거래위치</S.Text>
            <S.DevideLine></S.DevideLine>
            <KakaoMapDetail {...props} />
          </S.TextWrapper>
        </S.TextSection>
      </S.Wrapper>
      <S.BtnWrapper>
        <BtnLogin
          BtnName={"상품 목록"}
          onClickEvent={props.onClickMoveToList}
        />
        <BtnLogin BtnName={"삭제하기"} onClickEvent={props.onClickDelete} />
        <BtnLogin
          BtnName={"수정하기"}
          onClickEvent={props.onClickMoveToUpdata}
        />
        <BtnLogin
          BtnName={"장바구니"}
          onClickEvent={props.onClickGetToBasket}
        />
        <BtnLogin BtnName={"구입하기"} onClickEvent={props.onClickBuy} />
      </S.BtnWrapper>
    </S.OutLine>
  );
}

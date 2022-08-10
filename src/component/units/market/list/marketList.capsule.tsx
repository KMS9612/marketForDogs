import styled from "@emotion/styled";
import { ImgWrapper } from "../new/marketNew.styles";

const OutLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 400px;
  box-shadow: 0px 0px 20px rgb(0 0 0 / 10%);
  margin-bottom: 20px;
  padding: 10px 50px;
  cursor: pointer;
`;
const DevideLine = styled.div`
  width: 100%;
  border-top: 2px solid #bdbdbd;
  margin: 20px 0px;
`;
const Img = styled.img`
  width: 400px;
  height: 300px;
  background-color: #bdbdbd;
  border-radius: 15px;
  margin-right: 15px;
`;
const Section = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
const NameWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
const NameText = styled.div`
  font-size: 24px;
  font-weight: 700;
`;
const Name = styled.div``;

const PriceWrapper = styled.div`
  width: 100%;
`;
const PriceText = styled.div`
  font-size: 24px;
  font-weight: 700;
`;
const Price = styled.div``;

export default function MarketListCapsule(props: any) {
  return (
    <OutLine id={props.el._id} onClick={props.onClickMoveToDetail}>
      <ImgWrapper>
        {props.el.images[0] !== "" && (
          <Img
            max-width={"400px"}
            height={"300px"}
            src={
              props.el.images[0]
                ? `http://storage.googleapis.com/${props.el.images[0]}`
                : "/Logoimg/marketForDogs.png"
            }
            alt="Missing Files"
          />
        )}
        {props.el.images[0] === "" && (
          <Img
            max-width={"500px"}
            height={"300px"}
            src="/Logoimg/marketForDogs.png"
          />
        )}
      </ImgWrapper>
      <Section>
        <NameWrapper>
          <NameText>작성자: {props.el.seller.name}</NameText>
        </NameWrapper>
        <NameWrapper>
          <NameText>상품명</NameText>
          <DevideLine></DevideLine>
          <Name>{props.el.name}</Name>
        </NameWrapper>
        <PriceWrapper>
          <PriceText>상품가격</PriceText>
          <DevideLine></DevideLine>

          <Price>{props.el.price}</Price>
        </PriceWrapper>
      </Section>
    </OutLine>
  );
}

import React from "react";
import Slider from "react-slick";
import styled from "@emotion/styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  background-color: beige;
  margin-bottom: 30px;
`;

const SliderC = styled(Slider)`
  width: 65%;
  height: 300px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

const ImgOne = styled.div``;
const ImgTwo = styled.div``;
const ImgThree = styled.div``;

// const Img = styled.img`
//   width: 100%;
//   height: 600px;
//   border-radius: 20%;
// `;
export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Wrapper>
      <SliderC {...settings}>
        <ImgOne>이미지1</ImgOne>
        <ImgTwo>이미지2</ImgTwo>
        <ImgThree>이미지3</ImgThree>
      </SliderC>
    </Wrapper>
  );
}

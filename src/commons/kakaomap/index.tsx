import styled from "@emotion/styled";
import { Modal } from "antd";
import { useEffect, useState } from "react";
import DaumPostcode from "react-daum-postcode";

declare const window: typeof globalThis & {
  kakao: any;
};

const MapWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const InputWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Input = styled.input`
  border: 1px solid #bdbdbd;
  height: 50px;
  margin-bottom: 20px;
`;
export default function KakaoMap(props: any) {
  const [modal, setModal] = useState(false);
  // 다음 포스트 코드 함수들
  const onClickModal = () => {
    setModal((prev) => !prev);
  };
  const onChangeAddressDetail = (event: any) => {
    props.isEdit
      ? props.setAddressDetailEdit(event.target.value)
      : props.setAddressDetail(event.target.value);
  };
  const onClickSetAddress = (data: any) => {
    setModal((prev) => !prev);
    console.log(data);
    props.isEdit
      ? props.setAddressEdit(data.address)
      : props.setAddress(data.address);
    props.isEdit
      ? props.setZipcodeEdit(data.zonecode)
      : props.setZipcode(data.zonecode);
  };

  // 지도 관련 함수들
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=7d440312da6c815f14dd8b8a45364108&autoload=false&libraries=services";

    document.head.appendChild(script);
    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };
        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴

        // 주소-좌표 변환 객체를 생성
        const geocoder = new window.kakao.maps.services.Geocoder();
        // 주소로 좌표를 검색!
        geocoder.addressSearch(
          props.isEdit
            ? props.addressEdit ||
                props.data.fetchUseditem.useditemAddress.address
            : props.address,
          function (result, status) {
            // 검색이 정상적으로 완료됬다면
            if (status === window.kakao.maps.services.Status.OK) {
              const coords = new window.kakao.maps.LatLng(
                result[0].y,
                result[0].x
              );

              // 결과값으로 받은 위치를 마커로 표시합니다
              const marker = new window.kakao.maps.Marker({
                map,
                position: coords,
              });
              // const infowindow = new window.kakao.maps.InfoWindow({
              //   contents:
              //     '<span style="width:150px;text-align:center;padding:6px 0;"></span>',
              // });
              // infowindow.open(map, marker);

              // 지도의 중심값을 결과값으로 받은 위치로 이동시킵니다.
              map.setCenter(coords);
            }
          }
        );
      });
    };
  }, [props.address || props.addressEdit]);

  return (
    <div>
      <Modal visible={modal} onCancel={onClickModal} onOk={onClickModal}>
        <DaumPostcode onComplete={onClickSetAddress} />
      </Modal>
      <MapWrapper>
        <div id="map" style={{ width: "500px", height: "400px" }}></div>;
        <InputWrapper>
          <button type="button" onClick={onClickModal}>
            주소입력
          </button>
          <Input
            type="text"
            value={
              props.isEdit
                ? props.zipcodeEdit ||
                  props.data?.fetchUseditem.useditemAddress.zipcode
                : props.zipcode
            }
            placeholder="우편번호"
          />
          <Input
            type="text"
            value={
              props.isEdit
                ? props.addressEdit ||
                  props.data?.fetchUseditem.useditemAddress.address
                : props.address
            }
            placeholder="주소"
          />
          <Input
            type="text"
            placeholder="상세주소를 입력하세요!"
            defaultValue={
              props.isEdit
                ? props.addressDetailEdit ||
                  props.data?.fetchUseditem.useditemAddress.addressDetail
                : ""
            }
            onChange={onChangeAddressDetail}
          />
        </InputWrapper>
      </MapWrapper>
    </div>
  );
}

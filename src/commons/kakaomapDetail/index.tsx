import styled from "@emotion/styled";

import { useRouter } from "next/router";
import { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

const MapWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
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
  border: none;
`;
export default function KakaoMapDetail(props: any) {
  // 디테일 지도 기본값을 위한 api

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
          props.data?.fetchUseditem.useditemAddress.address,
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
  }, [props.data]);

  return (
    <div>
      <MapWrapper>
        <div id="map" style={{ width: "300px", height: "300px" }}></div>;
        <InputWrapper>
          <Input
            type="text"
            placeholder="우편번호"
            value={props.data?.fetchUseditem.useditemAddress.zipcode}
          />
          <Input
            type="text"
            value={props.data?.fetchUseditem.useditemAddress.address}
            placeholder="주소"
          />
          <Input
            type="text"
            placeholder="상세주소를 입력하세요!"
            value={props.data?.fetchUseditem.useditemAddress.addressDetail}
          />
        </InputWrapper>
      </MapWrapper>
    </div>
  );
}

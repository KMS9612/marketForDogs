import { Modal } from "antd";

import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState, isLoadState } from "../store";

export const useCheck = () => {
  const [token, setToken] = useRecoilState(accessTokenState);
  const router = useRouter();
  const [isloaded, setIsloaded] = useRecoilState(isLoadState);
  useEffect(() => {
    if (isloaded && !token) {
      Modal.error({
        content: "로그인이 필요합니다!",
        onOk() {
          router.push(`/login`);
        },
        onCancel() {
          router.push(`/login`);
        },
      });
    }
  }, [isloaded]);
};

import { atom } from "recoil";

export const accessTokenState = atom({
  key: "accessToken",
  default: "",
});

export const todayDate = atom({
  key: "todayDate",
  default: new Date(),
});

export const userInfoState = atom({
  key: "userInfo",
  default: "",
});
export const isLoadState = atom({
  key: "isload",
  default: false,
});

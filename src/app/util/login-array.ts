import { google, kakao, naver } from "@/../public";
import { StaticImageData } from "next/image";

export type bgColorType = "YELLOW" | "WHITE" | "GREEN";
export type colorType = "BACKGROUND" | "WHITE";
export const loginArray: {
  bgColor: bgColorType;
  color: colorType;
  src: StaticImageData;
  text: string;
  path: "google" | "kakao" | "naver";
}[] = [
  {
    bgColor: "WHITE",
    color: "BACKGROUND",
    src: google,
    text: "Google 계정으로 로그인",
    path: "google",
  },
  {
    bgColor: "YELLOW",
    color: "BACKGROUND",
    src: kakao,
    text: "Kakao 계정으로 로그인",
    path: "kakao",
  },
  {
    bgColor: "GREEN",
    color: "WHITE",
    src: naver,
    text: "Naver 계정으로 로그인",
    path: "naver",
  },
];

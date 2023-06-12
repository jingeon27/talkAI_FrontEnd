"use client";
import { MainProvider } from "../hooks/context/main";
import { IChildren } from "../util/children";

export default function IDLayout({ children }: IChildren) {
  return <MainProvider>{children}</MainProvider>;
}

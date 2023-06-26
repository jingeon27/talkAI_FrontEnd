"use client";
import { Suspense } from "react";
import { MainProvider } from "../../../hooks/context/main";
import { IChildren } from "../../../util/children";

export default function IDLayout({ children }: IChildren) {
  return (
    <MainProvider>
      <Suspense>{children}</Suspense>
    </MainProvider>
  );
}

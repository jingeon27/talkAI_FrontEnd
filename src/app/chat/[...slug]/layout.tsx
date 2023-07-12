"use client";
import { Suspense } from "react";
import { MainProvider } from "../../../hooks/context/main";
import { IChildren } from "../../../util/children";

export default function IDLayout({ children }: IChildren) {
  return (
    <Suspense>
      <MainProvider>{children}</MainProvider>
    </Suspense>
  );
}

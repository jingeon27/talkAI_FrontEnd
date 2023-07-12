import StyledComponentsRegistry from "./resistry";
import { Roboto } from "next/font/google";
import { RootLayoutComponents } from "@/layout";
import { Suspense } from "react";
import { IChildren } from "@/util/children";

const roboto = Roboto({
  weight: ["400", "500"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }: IChildren) {
  return (
    <html lang="ko" className={roboto.className}>
      <link rel="icon" href="/assets/favicon.png" />
      <title>TalkAi</title>
      <body>
        <StyledComponentsRegistry>
          <RootLayoutComponents>{children}</RootLayoutComponents>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

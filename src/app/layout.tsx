import StyledComponentsRegistry from "./resistry";
import { Roboto } from "next/font/google";
import { RootLayoutComponents } from "@/layout";
import { ReactNode } from "react";

const roboto = Roboto({
  weight: ["400", "500"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko" className={roboto.className}>
      <body>
        <StyledComponentsRegistry>
          <RootLayoutComponents>{children}</RootLayoutComponents>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

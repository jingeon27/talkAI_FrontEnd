import StyledComponentsRegistry from "./resistry";
import { Roboto } from "next/font/google";
import { RootLayoutProvider } from "@/layout";
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
          <RootLayoutProvider>{children}</RootLayoutProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

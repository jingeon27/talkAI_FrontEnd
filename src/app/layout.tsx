import StyledComponentsRegistry from "./resistry";
import { Roboto } from "next/font/google";
import { RootLayoutComponents } from "@/layout";
import { ReactNode, Suspense } from "react";

const roboto = Roboto({
  weight: ["400", "500"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko" className={roboto.className}>
      <link rel="icon" href="/assets/favicon.png" />
      <body>
        <StyledComponentsRegistry>
          <Suspense>
            <RootLayoutComponents>{children}</RootLayoutComponents>
          </Suspense>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

import StyledComponentsRegistry from "./resistry";
import { Roboto } from "next/font/google";
import { RootLayoutProvider } from "@/layout";

const roboto = Roboto({
  weight: ["400", "500"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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

import StyledComponentsRegistry from "./resistry";
import { CustomProvider } from "../theme";
import { Roboto } from "next/font/google";
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
          <CustomProvider>{children}</CustomProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

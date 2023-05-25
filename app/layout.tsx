import StyledComponentsRegistry from "./resistry";
import { CustomProvider } from "./components/theme";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <StyledComponentsRegistry>
          <CustomProvider>{children}</CustomProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

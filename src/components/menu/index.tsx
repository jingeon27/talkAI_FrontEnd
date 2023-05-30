import { useRootValue } from "@/hooks/context/useRootValueContext";
import { MainMenu } from "../list";
export const Menu = () => {
  const { header } = useRootValue();
  switch (header) {
    case "main":
      return (
        <>
          <MainMenu />
        </>
      );
    default:
      return <></>;
  }
};

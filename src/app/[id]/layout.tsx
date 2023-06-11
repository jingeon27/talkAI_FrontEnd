import { RootContextProvider } from "../hooks/context";
import { IChildren } from "../util/children";

export default function IDLayout({ children }: IChildren) {
  return <RootContextProvider>{children}</RootContextProvider>;
}

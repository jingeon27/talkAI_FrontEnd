import { IChatProps } from "@/components/chat";

export interface IRootMikeProps {
  changeChat: (props: Omit<IChatProps, "key">) => void;
}

import { IChatResponse } from "./chat-response.interface";

export interface IRootMikeProps {
  changeChat: (props: IChatResponse) => void;
}

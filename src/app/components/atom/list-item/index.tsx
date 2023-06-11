import { ChatIcon } from "@/app/assets/chat-icon";
import { styled } from "styled-components";
import { _Template } from "../new-chat";
export interface IListProps {
  onClick: () => void;
  name: string;
}
export const List = (props: IListProps) => (
  <>
    <_List {...props}>
      <ChatIcon />
      {props.name}
    </_List>
  </>
);

const _List = styled(_Template)`
  overflow: hidden;
`;

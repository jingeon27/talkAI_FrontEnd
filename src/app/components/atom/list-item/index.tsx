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
      <div>{props.name}</div>
    </_List>
  </>
);

const _List = styled(_Template)`
  width: 250px;
  box-sizing: border-box;
  > div {
    color: ${({ theme }) => theme.color.ON_BACKGROUND};
    ${({ theme }) => theme.font.LABEL_LARGE};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

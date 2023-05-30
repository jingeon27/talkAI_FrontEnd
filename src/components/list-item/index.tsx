import { styled } from "styled-components";

export interface IListProps {
  onClick: () => void;
  name: string;
}
export const List = (props: IListProps) => {
  return (
    <>
      <_List {...props}>{props.name}</_List>
    </>
  );
};
const _List = styled.li`
  list-style: none;
  height: 60px;

  display: flex;
  align-items: center;

  overflow: hidden;
  cursor: pointer;

  background-color: ${({ theme }) => theme.color.BACKGROUND};
  color: ${({ theme }) => theme.color.ON_BACKGROUND};
  ${({ theme }) => theme.font.LABEL_LARGE};

  &:hover {
    background-color: ${({ theme }) => theme.color.OUTLINE};
  }
`;

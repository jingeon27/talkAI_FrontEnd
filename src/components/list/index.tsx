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
  height: 20px;
  list-style: none;

  color: ${({ theme }) => theme.color.ON_BACKGROUND};
  font: ${({ theme }) => theme.font.LABEL_LARGE};
`;

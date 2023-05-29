import { styled } from "styled-components";
import { theme } from "../../theme/theme";

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

  background-color: ${({ theme }) => theme.color.BACKGROUND};
  color: ${({ theme }) => theme.color.ON_BACKGROUND};
  ${({ theme }) => theme.font.LABEL_LARGE};

  padding: 10px;
  overflow: hidden;
`;

import { styled } from "styled-components";
import { List } from "../list-item";

export const MainMenu = () => {
  return (
    <>
      <_Ul>
        <List
          onClick={() => {
            console.log("asdf");
          }}
          name={"dd"}
        />
        <List
          onClick={() => {
            console.log("asdf");
          }}
          name={"dd"}
        />
        <List
          onClick={() => {
            console.log("asdf");
          }}
          name={"dd"}
        />
      </_Ul>
    </>
  );
};
const _Ul = styled.ul`
  width: 250px;
  margin: 0;
  padding: 0;
  overflow: scroll;
  background-color: ${({ theme }) => theme.color.BACKGROUND};
`;

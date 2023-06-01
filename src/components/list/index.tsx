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
  margin: 0;
  padding: 0;
  z-index: 2;
  width: 250px;
  background-color: ${({ theme }) => theme.color.BACKGROUND};
`;

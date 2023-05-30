import { useRootValue } from "@/hooks/context/useRootValueContext";
import { styled } from "styled-components";
import { List } from "../list-item";

export const Menu = () => {
  const { header } = useRootValue();
  switch (header) {
    case "main":
      return <></>;
    default:
      return <></>;
  }
};

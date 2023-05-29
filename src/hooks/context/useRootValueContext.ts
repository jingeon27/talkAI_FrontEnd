import { useContext } from "react";
import { RootValueContext } from ".";

export const useRootAction = () => {
  const value = useContext(RootValueContext);
  if (value === undefined) {
    throw new Error("value error");
  }
  return value;
};

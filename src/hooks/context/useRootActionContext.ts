import { useContext } from "react";
import { RootActionContext } from ".";

export const useRootAction = () => {
  const actions = useContext(RootActionContext);
  if (actions === undefined) {
    throw new Error("action error");
  }
  return actions;
};

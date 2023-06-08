import { Dispatch, SetStateAction, MouseEvent } from "react";

export const useClickHandler = ({
  state,
  setState,
}: {
  state: boolean;
  setState: Dispatch<SetStateAction<boolean>>;
}) => {
  const onClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setState((prev) => !prev);
    if (!state) {
      document.addEventListener(
        "click",
        () => {
          setState(false);
        },
        { once: true }
      );
    }
  };
  return { onClick };
};

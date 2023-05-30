"use client";
import { ReactNode, createContext, useMemo, useState } from "react";
export interface IRootContextProviderProps {
  children: ReactNode;
}
export interface IRootActionContext {
  changeHeaderState: (header: "main") => void;
}
type InitialStateType = { header: "main" };
const initialState: InitialStateType = {
  header: "main",
};

export const RootValueContext = createContext<InitialStateType>(initialState);
export const RootActionContext = createContext<IRootActionContext>({
  changeHeaderState: () => null,
});
export const RootContextProvider = ({
  children,
}: IRootContextProviderProps) => {
  const [state, setState] = useState(initialState);

  const actions = useMemo(
    () => ({
      changeHeaderState(header: "main") {
        setState((prev) => ({ ...prev, header }));
      },
    }),
    []
  );

  return (
    <RootActionContext.Provider value={actions}>
      <RootValueContext.Provider value={state}>
        {children}
      </RootValueContext.Provider>
    </RootActionContext.Provider>
  );
};

"use client";
import { ReactNode, createContext, useMemo, useState } from "react";
export interface IRootContextProviderProps {
  children: ReactNode;
}
export interface IRootActionContext {
  changeHeaderState: (header: string) => void;
}
export const RootValueContext = createContext({});
export const RootActionContext = createContext<IRootActionContext>({
  changeHeaderState: () => null,
});
export const RootContextProvider = ({
  children,
}: IRootContextProviderProps) => {
  const [state, setState] = useState({});
  const actions = useMemo(
    () => ({
      changeHeaderState(header: string) {
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

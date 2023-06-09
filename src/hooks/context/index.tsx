import { ReactNode, createContext, useMemo, useState } from "react";
export interface IRootContextProviderProps {
  children: ReactNode;
}
export interface IRootActionContext {
  changeHeaderState: (header: "main") => void;
  setLoginState: () => void;
  setToast: (props: { comment: string; toastState: boolean }) => void;
}
type InitialStateType = {
  header: "main";
  login: boolean;
  toast: { comment: string; toastState: boolean };
};
const initialState: InitialStateType = {
  header: "main",
  login: false,
  toast: { comment: "", toastState: false },
};

export const RootValueContext = createContext<InitialStateType>(initialState);
export const RootActionContext = createContext<IRootActionContext>({
  changeHeaderState: () => null,
  setLoginState: () => null,
  setToast: () => null,
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
      setLoginState() {
        setState((prev) => ({ ...prev, login: !prev.login }));
      },
      setToast({
        comment,
        toastState,
      }: {
        comment: string;
        toastState: boolean;
      }) {
        setState((prev) => ({
          ...prev,
          toast: { comment, toastState: toastState },
        }));
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

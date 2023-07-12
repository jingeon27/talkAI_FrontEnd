import { ReactNode, createContext, useMemo, useState } from "react";
export interface IRootContextProviderProps {
  children: ReactNode;
}

type InitialStateType = {
  header: "main";
  login: boolean;
  user: { name: string; email: string; profile: string };
  toast: { comment: string; toastState: boolean };
};
const initialState: InitialStateType = {
  header: "main",
  login: false,
  user: { name: "", email: "", profile: "" },
  toast: { comment: "", toastState: false },
};
type SetToastArgsType = typeof initialState.toast;
type SetUserType = typeof initialState.user;
export interface IRootActionContext {
  changeHeaderState: (header: "main") => void;
  setLoginState: (login: boolean) => void;
  setToast: (props: SetToastArgsType) => void;
  setUser: ({ name, email }: SetUserType) => void;
}
export const RootValueContext = createContext<InitialStateType>(initialState);
export const RootActionContext = createContext<IRootActionContext>({
  changeHeaderState: () => null,
  setLoginState: () => null,
  setToast: () => null,
  setUser: () => null,
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
      setLoginState(login: boolean) {
        setState((prev) => ({ ...prev, login }));
      },
      setToast(toast: SetToastArgsType) {
        setState((prev) => ({
          ...prev,
          toast,
        }));
      },
      setUser(user: SetUserType) {
        setState((prev) => ({
          ...prev,
          user,
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

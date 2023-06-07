import {
  ReactNode,
  RefObject,
  createContext,
  useMemo,
  useRef,
  useState,
} from "react";
export interface IRootContextProviderProps {
  children: ReactNode;
}
export interface IRootActionContext {
  changeHeaderState: (header: "main") => void;
  setLoginState: () => void;
}
type InitialStateType = {
  header: "main";
  login: boolean;
};
const initialState: InitialStateType = {
  header: "main",
  login: false,
};

export const RootValueContext = createContext<InitialStateType>(initialState);
export const RootActionContext = createContext<IRootActionContext>({
  changeHeaderState: () => null,
  setLoginState: () => null,
});
export const RootContextProvider = ({
  children,
}: IRootContextProviderProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState({ ...initialState, scrollRef });

  const actions = useMemo(
    () => ({
      changeHeaderState(header: "main") {
        setState((prev) => ({ ...prev, header }));
      },
      setLoginState() {
        setState((prev) => ({ ...prev, login: !prev.login }));
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

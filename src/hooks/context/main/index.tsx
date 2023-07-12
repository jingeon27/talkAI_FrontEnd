"use client";

import { IChatResponse } from "@/util/chat-response.interface";
import { IChildren } from "@/util/children";
import {
  RefObject,
  createContext,
  useContext,
  useMemo,
  useRef,
  useState,
} from "react";

type InitialStateType = {
  mikeOn: boolean;
  scrollRef: RefObject<HTMLDivElement> | null;
  chat: IChatResponse[];
  name: string;
  role: string;
  ai: { id: string; profile: string };
  initial: number;
};

const initialState: InitialStateType = {
  mikeOn: false,
  scrollRef: null,
  chat: [],
  name: "김아무개",
  role: "비서",
  ai: { id: "", profile: "" },
  initial: 1,
};
type aiType = typeof initialState.ai;
interface IMainActionContext {
  changeChat: (props: IChatResponse) => void;
  setMikeState: () => void;
  setChatBotAi: (props: IChatResponse[], name: string, role: string) => void;
  setAi: (ai: aiType) => void;
  setInitial: (initial: number) => void;
}
const MainContextAction = createContext<IMainActionContext>({
  changeChat: () => null,
  setMikeState: () => null,
  setChatBotAi: () => null,
  setAi: () => null,
  setInitial: () => null,
});
const MainContextValue = createContext<InitialStateType>(initialState);
export const MainProvider = ({ children }: IChildren) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState(() => ({ ...initialState, scrollRef }));
  const action = useMemo(
    () => ({
      changeChat(props: IChatResponse) {
        setState((prev) => ({ ...prev, chat: [...prev.chat, props] }));
      },
      setMikeState() {
        setState((prev) => ({ ...prev, mikeOn: !prev.mikeOn }));
      },
      setChatBotAi(chat: IChatResponse[], name: string, role: string) {
        setState((prev) => ({ ...prev, chat, name, role }));
      },
      setInitial(initial: number) {
        setState((prev) => ({ ...prev, initial }));
      },
      setAi(ai: aiType) {
        setState((prev) => ({ ...prev, ai }));
      },
    }),
    []
  );
  return (
    <MainContextValue.Provider value={state}>
      <MainContextAction.Provider value={action}>
        {children}
      </MainContextAction.Provider>
    </MainContextValue.Provider>
  );
};
export const useMainValue = () => {
  const value = useContext(MainContextValue);
  if (value === undefined) {
    throw new Error("value error");
  }
  return value;
};
export const useMainAction = () => {
  const value = useContext(MainContextAction);
  if (value === undefined) {
    throw new Error("value error");
  }
  return value;
};

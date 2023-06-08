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
};
const initialState: InitialStateType = {
  scrollRef: null,
  mikeOn: false,
  chat: [],
  name: "assistant",
};

interface IMainActionContext {
  changeChat: (props: IChatResponse) => void;
  setMikeState: () => void;
  setChatBotAi: (props: IChatResponse, name: string) => void;
}
const MainContextAction = createContext<IMainActionContext>({
  changeChat: () => null,
  setMikeState: () => null,
  setChatBotAi: () => null,
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
      setChatBotAi(props: IChatResponse, name: string) {
        setState((prev) => ({ ...prev, chat: [props], name }));
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

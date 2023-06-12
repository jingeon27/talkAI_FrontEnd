"use client";

import { IChatResponse } from "@/app/util/chat-response.interface";
import { IChildren } from "@/app/util/children";
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
  id: string;
  initial: number;
};

const initialState: InitialStateType = {
  scrollRef: null,
  mikeOn: false,
  chat: [],
  name: "김아무개",
  role: "비서",
  id: "",
  initial: 1,
};

interface IMainActionContext {
  changeChat: (props: IChatResponse) => void;
  setMikeState: () => void;
  setChatBotAi: (props: IChatResponse[], name: string, role: string) => void;
  setID: (id: string) => void;
  setInitial: (initial: number) => void;
}
const MainContextAction = createContext<IMainActionContext>({
  changeChat: () => null,
  setMikeState: () => null,
  setChatBotAi: () => null,
  setID: () => null,
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
      setID(id: string) {
        setState((prev) => ({ ...prev, id }));
      },
      setInitial(initial: number) {
        setState((prev) => ({ ...prev, initial }));
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

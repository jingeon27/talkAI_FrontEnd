import { useEffect, useState } from "react";
import { useMainValue } from "../context/main";
const initialValue = { chat: "", isWriting: false };
export type useChatEffectType = typeof initialValue;
export const useChatEffect = (content: string): useChatEffectType => {
  const [state, setState] = useState<useChatEffectType>(initialValue);
  const { scrollRef } = useMainValue();
  useEffect(() => {
    const interval = setTimeout(() => {
      if (state.chat.length !== content.length) {
        setState((prev) => ({
          ...prev,
          chat: content.slice(0, state.chat.length + 1),
        }));
      } else {
        setState((prev) => ({ ...prev, isWriting: true }));
      }
      if (scrollRef !== null) {
        scrollRef.current?.scrollTo(0, scrollRef.current?.scrollHeight);
      }
    }, 30);

    return () => clearTimeout(interval);
  }, [state.chat]);
  return state;
};

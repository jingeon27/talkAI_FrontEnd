import { RefObject, useEffect, useState } from "react";
import { useMainValue } from "../context/main";
const initialValue = { chat: "", isWriting: false };
export type useChatEffectType = typeof initialValue;
export const useChatEffect = <T extends Element>(
  content: string,
  ref: RefObject<T>
): useChatEffectType => {
  const [state, setState] = useState<useChatEffectType>(initialValue);
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
      ref.current?.scrollTo(0, ref.current?.scrollHeight);
    }, 30);

    return () => clearTimeout(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.chat]);
  return state;
};

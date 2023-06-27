import { useEffect, useRef } from "react";

export interface IWebSpeechOption {
  onresult: (e: any) => void;
  onstart: (e?: any) => void;
  start(): void;
  stop(): void;
  lang: string;
  continuous: boolean;
  interimResults: boolean;
}
export const useSpeech = () => {
  const NativeSpeechRecognition = useRef<IWebSpeechOption>(
    new (window.SpeechRecognition ||
      window.webkitSpeechRecognition ||
      window.mozSpeechRecognition ||
      window.msSpeechRecognition)()
  );

  useEffect(() => {
    NativeSpeechRecognition.current.lang = "ko";
    NativeSpeechRecognition.current.continuous = true;
    NativeSpeechRecognition.current.interimResults = false;
  }, []);

  return { NativeSpeechRecognition };
};

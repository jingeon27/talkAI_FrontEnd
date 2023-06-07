declare interface Window {
  webkitSpeechRecognition: IWebSpeechOption | undefined;
  SpeechRecognition: IWebSpeechOption | undefined;
  mozSpeechRecognition: IWebSpeechOption | undefined;
  msSpeechRecognition: msSpeechRecognition | undefined;
}
interface IWebSpeechOption {
  onresult: (e: any) => void;
  onstart: (e?: any) => void;
  start(): void;
  stop(): void;
  lang: string;
  continuous: boolean;
  interimResults: boolean;
}

export interface IWebSpeechOption {
  onresult: (e: any) => void;
  onstart: (e?: any) => void;
  start(): void;
  stop(): void;
  lang: string;
  continuous: boolean;
  interimResults: boolean;
}

export interface IChatResponse {
  role: "assistant" | "user" | "system";
  content: string;
}

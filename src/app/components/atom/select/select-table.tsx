import { OpenAiModeKeyType, OpenAiModeType } from "@/app/util/chat-ai-mode";
import React from "react";
export interface ISelectTableProps {
  onClick: (item: OpenAiModeKeyType) => void;
  list: OpenAiModeType;
}

export const SelectTable = ({ onClick, list }: ISelectTableProps) => {
  return (
    <>
      {Object.entries(list).map((user) => (
        <div
          onMouseDown={() => {
            onClick(user[0] as OpenAiModeKeyType);
          }}
          key={user[0]}
        >
          {user[1].role}
        </div>
      ))}
    </>
  );
};

import { styled } from "styled-components";
import { List } from "../../atom/list-item";
import { GetConversationContent } from "@/app/api/getChatList";
import { NewChat } from "../../atom/new-chat";
import { useRouter } from "next/navigation";

export const MainMenu = () => {
  const { data, loading, error } = GetConversationContent();
  const router = useRouter();
  return (
    <>
      <_Ul>
        <NewChat onClick={() => {}} />
        {!loading &&
          !error &&
          data!.chatList.map((e) => (
            <List
              onClick={() => {
                router.push(`${e.id}`);
              }}
              key={e.id}
              name={e.title}
            />
          ))}
      </_Ul>
    </>
  );
};
const _Ul = styled.ul`
  margin: 0;
  padding: 0;
  z-index: 2;

  width: 250px;
  background-color: ${({ theme }) => theme.color.BACKGROUND};
`;

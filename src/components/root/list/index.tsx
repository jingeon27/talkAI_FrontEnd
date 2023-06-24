import { styled } from "styled-components";
import { List } from "../../atom/list-item";
import { GetConversationContent } from "@/api/getChatList";
import { NewChat } from "../../atom/new-chat";
import { useRouter } from "next/navigation";

export const MainMenu = () => {
  const { data, loading, error } = GetConversationContent();
  const router = useRouter();
  const returnDateFormat = (item: number): string => {
    const baseDateValue = item.toString();
    const today = new Date().toISOString().substring(0, 10).replace(/-/g, "");
    if (baseDateValue === today) return "오늘";
    if (item === parseInt(today) - 1) return "어제";
    return `${baseDateValue.slice(0, 4)}-${baseDateValue.slice(
      4,
      6
    )}-${baseDateValue.slice(6, 8)}`;
  };
  return (
    <>
      <_Ul>
        <NewChat />
        {!loading &&
          !error &&
          data!.chatList.map((e, i) => (
            <>
              {((i !== 0 && e.date !== data?.chatList[i - 1].date) ||
                i === 0) && (
                <_Date key={e.date}>{returnDateFormat(e.date)}</_Date>
              )}
              <List
                onClick={() => router.push(`chat/${e.id}`)}
                name={e.title}
                key={e.id}
              />
            </>
          ))}
      </_Ul>
    </>
  );
};
const _Ul = styled.ul`
  margin: 0;
  padding: 0;
  z-index: 2;

  height: 100%;
  width: 250px;

  overflow-y: scroll;
  overflow-x: hidden;
  background-color: ${({ theme }) => theme.color.BACKGROUND};
`;
const _Date = styled.li`
  list-style: none;
  height: 30px;

  color: ${({ theme }) => theme.color.ON_SURFACE_VARIENT};
  ${({ theme }) => theme.font.TITLE_SMALL};
  padding-left: 20px;

  display: flex;
  align-items: center;
`;

import { styled } from "styled-components";
import { List } from "../../atom/list-item";
import { GetConversationContent } from "@/api/getChatList";
import { NewChat } from "../../atom/new-chat";
import { useRouter } from "next/navigation";
import { useDateTime } from "@/hooks/list";

export const MainMenu = () => {
  const { data, loading, error } = GetConversationContent();
  const router = useRouter();
  const { isEqual, yearMonthDate, returnDateFormat } = useDateTime();
  return (
    <>
      <_Ul>
        <NewChat />
        {!loading &&
          !error &&
          data!.chatList.map((e, i) => (
            <>
              {((i !== 0 &&
                !isEqual(
                  yearMonthDate(new Date(e.date)),
                  yearMonthDate(new Date(data!.chatList[i - 1].date)),
                  0
                )) ||
                i === 0) && (
                <_Date key={e.date.toString()}>
                  {returnDateFormat(e.date)}
                </_Date>
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

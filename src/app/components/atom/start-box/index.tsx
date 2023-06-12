import { styled, useTheme } from "styled-components";
import { HiOutlineLightBulb } from "react-icons/hi";
export interface IStartBoxProps {
  name: string;
  role: string;
  user: { name: string; email: string };
}
export const StartBox = ({ name, role, user }: IStartBoxProps) => {
  return (
    <>
      <_Container>
        <div>
          <HiOutlineLightBulb size={40} color={useTheme()?.color.ON_PRIMARY} />
        </div>
        <div>
          <div>
            <b>{user.name || "사용자"}</b>님 아래 <b>마이크 버튼</b>을 눌러서
            음성인식을 하거나 <b>채팅</b>을 입력하시면
          </div>
          <div>
            <b>{role}</b>인 <b>{name}</b>님과 대화할 수 있습니다.
          </div>
        </div>
      </_Container>
    </>
  );
};
const _Container = styled.div`
  width: 700px;
  height: 100px;

  padding: 0 30px;
  margin-top: 50px;
  border-radius: 5px;

  background-color: ${({ theme }) => theme.color.ON_PRIMARY_CONTAINER};

  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;

  > div {
    display: flex;
    flex-direction: column;
    gap: 5px;

    > div {
      color: ${({ theme }) => theme.color.PRIMARY_CONTAINER};
    }
  }
`;

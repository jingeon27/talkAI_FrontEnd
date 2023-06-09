import { IChildren } from "@/app/util/children";
import { styled } from "styled-components";

export const ModalLayout = ({ children }: IChildren) => {
  return <_Layout>{children}</_Layout>;
};
const _Layout = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  top: 0;
  left: 0;
  z-index: 3;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  backdrop-filter: blur(3px);
  background-color: rgba(0, 0, 0, 0.3);
  color: ${({ theme }) => theme.color.ON_BACKGROUND};
`;

import { keyframes, styled, useTheme } from "styled-components";
import { BiError } from "react-icons/bi";
export const ErrorToast = ({ comment }: { comment: string }) => {
  return (
    <>
      <ToastLabel>
        <div>
          <BiError size={20} color={useTheme()?.color.ON_ERROR_CONTAINER} />
          {comment}
        </div>
        <div />
      </ToastLabel>
    </>
  );
};
const FadeIn = keyframes`
 0% {
    transform: translateX(100px);
 }
 100% {
  transform: translate(0);
 }`;
const FillUp = keyframes`
    0% {
       width: 0;
    }
    100% {
     width: 340px;
    }
 `;
const ToastLabel = styled.div`
  position: absolute;
  top: 100px;
  right: 20px;
  z-index: 5;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.ERROR_CONTAINER};
  animation: ${FadeIn} 0.5s ease-in-out 0s alternate both;
  > div {
    &:first-child {
      width: 300px;
      height: 50px;
      padding: 5px 20px;
      color: ${({ theme }) => theme.color.ON_ERROR_CONTAINER};

      ${({ theme }) => theme.font.BODY_LARGE};
      display: flex;
      gap: 20px;
      align-items: center;
    }
    &:last-child {
      height: 5px;
      background-color: ${({ theme }) => theme.color.ON_ERROR_CONTAINER};
      animation: ${FillUp} 2s linear 0.5s alternate both;
    }
  }
`;

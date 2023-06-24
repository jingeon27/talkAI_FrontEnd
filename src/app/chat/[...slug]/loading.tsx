"use client";
import { ModalLayout } from "@/components/modal";
import { styled, keyframes } from "styled-components";

export default function Loading() {
  return (
    <ModalLayout>
      <_Spiiner />
    </ModalLayout>
  );
}
const Rotation = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }`;
const _Spiiner = styled.div`
  width: 48px;
  height: 48px;
  border: 5px solid ${({ theme }) => theme.color.ON_BACKGROUND};
  border-bottom-color: ${({ theme }) => theme.color.ON_PRIMARY};
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: ${Rotation} 1s linear infinite;
`;

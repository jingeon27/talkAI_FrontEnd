import React, { useState, ReactNode } from "react";
import { PolygonIcon } from "@/assets/polygon-icon";
import { useClickHandler } from "@/hooks/click";
import { styled, keyframes } from "styled-components";
export interface ISelectProps {
  now: string;
  children: ReactNode;
}

export const Select = ({ now, children }: ISelectProps) => {
  const [state, setState] = useState<boolean>(false);
  const { onClick } = useClickHandler({ state, setState });
  return (
    <>
      <_Layout>
        <_InfoButton id={now} {...{ onClick }}>
          <div>{now}</div>
          <_SelectIcon {...{ state: `${state}` }}>
            <PolygonIcon />
          </_SelectIcon>
        </_InfoButton>
        <_SelectList {...{ state: `${state}` }}>{children}</_SelectList>
      </_Layout>
    </>
  );
};
const Spin = (x: number, y: number) => keyframes`
 0% {
    transform: rotate(${x}deg);
 }
 100% {
  transform: rotate(${y}deg);
 }
`;
const _SelectList = styled.div<{ state: string }>`
  visibility: ${({ state }) => (state === "true" ? "visible" : "hidden")};

  box-shadow: 1px 1px 10px 5px ${({ theme }) => theme.color.BACKGROUND};
  border-radius: 8px;
  z-index: 2;
  > div {
    position: relative;
    box-sizing: border-box;
    padding: 15px 0;
    background-color: ${({ theme }) => theme.color.OUTLINE};
    color: ${({ theme }) => theme.color.ON_SURFACE};
    ${({ theme }) => theme.font.LABEL_LARGE}

    line-height: 32px;
    text-align: center;
    cursor: pointer;
    &:hover {
      border: 1px solid ${({ theme }) => theme.color.ON_BACKGROUND};
    }
    &:last-of-type {
      border-radius: 0px 0px 8px 8px;
    }
    &:first-of-type {
      border-radius: 8px 8px 0px 0px;
    }
  }
`;
const _InfoButton = styled.button`
  width: 100%;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  background-color: ${({ theme }) => theme.color.OUTLINE};
  color: ${({ theme }) => theme.color.ON_SURFACE};
  ${({ theme }) => theme.font.BODY_LARGE};

  line-height: 50px;
  text-align: center;

  border: none;
  border-radius: 10px;
  cursor: pointer;

  div {
    text-align: center;
    width: 100px;
  }
`;
const _SelectIcon = styled.span<{ state: string }>`
  display: flex;
  align-items: center;
  animation: ${({ state }) => (state === "true" ? Spin(0, 180) : Spin(180, 0))}
    0.25s ease-in-out 0s alternate forwards;
`;
const _Layout = styled.div`
  position: relative;
  flex-grow: 1;
  height: 50px;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;

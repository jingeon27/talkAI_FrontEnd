"use client";
import { MainProvider } from "@/app/hooks/context/main";
import { RootPage } from "./components/pages/root";
export default function Home() {
  return (
    <>
      <MainProvider>
        <RootPage />
      </MainProvider>
    </>
  );
}

import { useMainValue } from "@/app/hooks/context/main";
export interface IStartBoxProps {
  name: string;
  role: string;
  user: { name: string; email: string };
}
export const StartBox = ({ name, role, user }: IStartBoxProps) => {
  //   const { name, role } = useMainValue();
  return (
    <>
      <></>
    </>
  );
};

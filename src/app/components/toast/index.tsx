import { useRootValue } from "@/app/hooks/context/useRootValueContext";
import { useEffect } from "react";
import { useRootAction } from "@/app/hooks/context/useRootActionContext";
import { ErrorToast } from "./error";
export const Toast = () => {
  const { toast } = useRootValue();
  const { setToast } = useRootAction();
  useEffect(() => {
    const interval = setTimeout(() => {
      if (toast.toastState) {
        setToast({ comment: "", toastState: false });
      }
    }, 2700);
    return () => clearTimeout(interval);
  }, [toast.toastState]);
  return <>{toast.toastState && <ErrorToast comment={toast.comment} />}</>;
};

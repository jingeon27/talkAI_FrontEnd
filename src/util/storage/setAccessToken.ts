export const setAccessToken = (value: string) => {
  if (typeof window !== undefined) {
    sessionStorage.setItem("token", value);
  }
};

export const getAccessToken = () => {
  if (typeof window !== undefined) {
    return sessionStorage.getItem("token") ?? false;
  }
};

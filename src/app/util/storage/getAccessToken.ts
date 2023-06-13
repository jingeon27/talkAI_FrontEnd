export const getAccessToken = () => {
  try {
    return typeof window !== undefined ? sessionStorage.getItem("token") : null;
  } catch {
    return null;
  }
};

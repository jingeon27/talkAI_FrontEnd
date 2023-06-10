export const Logout = () => {
  if (typeof window !== undefined) {
    document.cookie = `refreshToken=null; ${new Date()} path=/;`;
    sessionStorage.removeItem("token");
  }
};

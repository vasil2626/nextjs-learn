export const getUserData = async () => {
  return await fetch("http://localhost:3000/api/get_user");
};

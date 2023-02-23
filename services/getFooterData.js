export const getFooterData = async () => {
  return await fetch("https://jsonplaceholder.typicode.com/posts");
};

export const getSolutions = async () => {
  return await fetch("http://localhost:3000/api/get_solution");
};

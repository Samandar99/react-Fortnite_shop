export const getLocal = () => {
  const data = localStorage.getItem("forever");
  return data ? JSON.parse(data) : [];
};

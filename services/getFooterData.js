export const getFooterInfo = async () => {
  const url = process.env.DB_HOST;
  return await fetch(`${url}/api/get_footer_info`);
};

const envFunction = function (event, context) {
  const value = process.env.GATSBY_SHEETS_URL;

  return value;
};

export default envFunction;

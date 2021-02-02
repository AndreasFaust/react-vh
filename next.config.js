const isProduction = process.env.NODE_ENV === "production";
const productionPath = "/react-vh";

module.exports = {
  basePath: isProduction ? productionPath : "",
  env: {
    productionPath: isProduction ? productionPath + "/" : "",
  },
};

module.exports = {
  default: {
    paths: ["features/**/*.feature"],
    require: ["step-definition/**/*.ts"],
    requireModule: ["ts-node/register"]
  }
};
module.exports = {
  default: {
    paths: ["features/**/*.feature"],
    require: ["step-definition/**/*.ts"],
    requireModule: ["ts-node/register"],
    order: "defined",
    tags: "@nagative",
    format: [
        "progress",
        "html:reports/cucumber-report.html",
            ],
            //retry: 2
            // failFast: true
            worldParameters: {
    url: "https://www.saucedemo.com/"
}


  }
};
const webpack = require("webpack");
const fs = require("fs");
const packageJson = fs.readFileSync("./package.json");
const version = JSON.parse(packageJson).version || 0;

module.exports = {
  transpileDependencies: ["vuetify"],
  lintOnSave: process.env.NODE_ENV !== "production",
  integrity: false, // enable Subresource Integrity (SRI) on <link rel="stylesheet"> and <script> tags in generated HTML.
  // crossorigin: "anonymous",
  // crossorigin: "use-credentials",
  // publicPath: "/vimo/",
  publicPath: "/",
  productionSourceMap: false,
  pwa: {
    // https://cli.vuejs.org/config/#global-cli-config
    // https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
    name: "nothingasis",
    themeColor: "#0200FF",
    msTileColor: "#4A90E2", // App title color on Windows
    appleMobileWebAppCapable: "yes", // https://medium.com/@firt/dont-use-ios-web-app-meta-tag-irresponsibly-in-your-progressive-web-apps-85d70f4438cb
    appleMobileWebAppStatusBarStyle: "default",
    // appleMobileWebAppStatusBarStyle: "black",
    assetsVersion: "", // This option is used if you need to add a version to your icons and manifest, against browser’s cache. This will append ?v=<pwa.assetsVersion> to the URLs of the icons and manifest.
    manifestOptions: {
      display: "standalone" // In order to show the Add to Home Screen Prompt, display must be set to standalone.
    },
    // Add the router fallback for off-line mode
    // https://stackoverflow.com/questions/49963982/vue-router-history-mode-with-pwa-in-offline-mode
    workboxOptions: {
      navigateFallback: "index.html"
    }
  },
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        "process.env": {
          PACKAGE_VERSION: '"' + version + '"'
        }
      })
    ]
  }
};

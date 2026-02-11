const createExpoWebpackConfigAsync = require("@expo/webpack-config");

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);

  // Allow unsafe-inline and unsafe-eval for development
  config.devServer = config.devServer || {};
  config.devServer.headers = {
    ...config.devServer.headers,
    "Content-Security-Policy":
      "default-src * 'unsafe-inline' 'unsafe-eval' data: blob:;",
  };

  return config;
};

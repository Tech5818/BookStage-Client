module.exports = function (api) {
  api.cache(true);
  const plugins = [
		// react-native-dotenv
		[
			'module:react-native-dotenv', {
        "moduleName": "@env",
        "path": ".env",
        "blacklist": null,
        "whitelist": null,
        "safe": true,
        "allowUndefined": true
      },
      'react-native-reanimated/plugin'
		],
	];
  return {
    presets: ['babel-preset-expo'],
    plugins
  };
};

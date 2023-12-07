module.exports = function(api) {
  api.cache(true);
  const plugins = [
    // react-native-dotenv
    ['module:react-native-dotenv'],
  ];
  return {
    presets: ['babel-preset-expo'],
    plugins
  };
};

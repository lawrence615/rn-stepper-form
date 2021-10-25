module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'module-resolver',
    {
      root: ['.'],
      extensions: ['.js'],
      alias: {
        reducers: './src/application/reducers',
        selectors: './src/application/selectors',
        components: './src/presentation/components',
        navigation: './src/presentation/navigation',
        screens: './src/presentation/screens',
      }
    }
  ]
};

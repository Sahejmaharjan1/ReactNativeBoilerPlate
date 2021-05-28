const config = {
  initialRouteName: 'Home',
  screens: {
    // Home: {
    //   path: 'home',
    //   screens: {
    // User: {
    //   // path: 'user',
    //   screens: {
    //     HomeTopTab: {
    //       initialRouteName: 'HomeTopTabStack',
    //       screens: {
    Home: {
      path: 'home/:_id',
    },
  },
};
export const linking = {
  prefixes: ['https://www.google.com', 'appname://'],
  config,
};

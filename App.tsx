import React from 'react';
import {Provider} from 'react-redux';
import {storeObj as store} from './src/redux/store';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import MainNavigation from './src/navigation/MainNavigation';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <SafeAreaProvider>
          <MainNavigation />
        </SafeAreaProvider>
      </Provider>
    </>
  );
};

export default App;

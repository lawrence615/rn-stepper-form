import React from 'react';
import { KeyboardAvoidingView, Platform, StatusBar } from 'react-native';
import { Provider } from 'react-redux'
import { store } from './src/application/store'
import { SafeAreaProvider } from 'react-native-safe-area-context';

import AppNavigator from 'navigation/AppNavigator';


const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <StatusBar hidden={false} backgroundColor="#FFF" barStyle="dark-content" translucent={false} />
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? -64 : 0}
          style={{ flex: 1 }}>
          <AppNavigator />
        </KeyboardAvoidingView>
      </SafeAreaProvider>
    </Provider >
  );
}

export default App;
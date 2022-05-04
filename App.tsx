import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, StatusBar, StyleSheet, useColorScheme } from 'react-native';
import { Provider } from 'react-redux';

import Colors from './constants/Colors';
import StackNavigation from './navigation/StackNavigation';
import store from './redux/store';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darkStatusBar : Colors.lightStatusBar,
    flex: 1
  };
  
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Provider store={store}>
        <NavigationContainer>
          <StackNavigation />
        </NavigationContainer>
      </Provider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'black'
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default App;

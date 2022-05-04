import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';

import Colors from './constants/Colors';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darkStatusBar : Colors.lightStatusBar,
    flex: 1
  };
  
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.textContainer}>
        <Text style={styles.text} >Hello MyMusic</Text>
      </View>
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

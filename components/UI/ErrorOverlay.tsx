import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import Colors from '../../constants/Colors';

interface ErrorOverlayProps {
  children?: JSX.Element,
  message: string
}

const ErrorOverlay = ({ children, message }: ErrorOverlayProps) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.title]}>An error occurred!</Text>
      <Text style={styles.text}>{message}</Text>
      {
        children
      }
    </View>
  );
}

export default ErrorOverlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24
  },
  text: {
    color: Colors.error400,
    textAlign: 'center',
    marginBottom: 8,
  },
  title: {
    color: Colors.error500,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
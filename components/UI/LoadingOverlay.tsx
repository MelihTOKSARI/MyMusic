import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';

interface LoadingOverlayProps {
  children?: JSX.Element
}

const LoadingOverlay = ({ children }: LoadingOverlayProps) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={Colors.primary500} />
      {
        children
      }
    </View>
  );
}

export default LoadingOverlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24
  },
});
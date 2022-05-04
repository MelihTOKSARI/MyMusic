import React from 'react';
import { View, StyleSheet, Pressable, GestureResponderEvent, StyleProp, ViewStyle } from 'react-native';

import Colors from '../../constants/Colors';

interface Props {
    backgroundColor?: string,
    children: JSX.Element,
    extraStyles?: StyleProp<ViewStyle>,
    onPress?: (event: GestureResponderEvent) => void
}

const Card: React.FC<Props> = ({ backgroundColor, children, extraStyles, onPress }) => {
    return <Pressable onPress={onPress}>
        <View style={[styles.card, extraStyles , backgroundColor ? { backgroundColor: backgroundColor } : undefined]}>
            {children}
        </View>
    </Pressable>
}

export default Card;

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
    marginVertical: 8,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25
  },
});
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from 'src/theme/appTheme';

interface Props {
  text: string;
  color?: string;
  width?: boolean;
  onPress: (numberText: string) => void;
}

export const ButtonCalc = ({
  text,
  color = '#2d2d2d',
  width = false,
  onPress,
}: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.4} onPress={() => onPress(text)}>
      <View
        style={{
          ...styles.boton,
          backgroundColor: color,
          width: width ? 180 : 80,
        }}>
        <Text
          style={{
            ...styles.botonTexto,
            color: color === '#9b9b9b' ? 'black' : 'white',
          }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
